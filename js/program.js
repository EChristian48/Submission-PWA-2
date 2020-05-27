import {API} from "./api.js";
import {ClubHighlight} from "./components/club-highlight.js";
import {Helper} from "./helper.js";
import {RandomClub} from "./components/random-club.js";
import {Standings} from "./components/standings.js";

class Program {
    static async main() {
        try {
            customElements.define('random-club', RandomClub)
            customElements.define('standings-table', Standings)

            await Program.registerSW()
        } catch (e) {
            console.error(`Hmmm entah kenapa program-nya error: ${e}`)
        }
    }

    static async loadStandings(leagueID) {
        try {
            Helper.removeOldContent()
            Helper.showElement('#contentSpinner')

            const content = document.querySelector('#content')
            const standingsTable = document.createElement('standings-table')
            const standingsData = await API.getStandings(leagueID)

            standingsTable.setStandings(standingsData)
            standingsTable.render()

            content.append(standingsTable)
            Helper.hideElement('#contentSpinner')
        } catch (e) {
            console.error(`Kok gagal render standings ya? ${e}`)
        }
    }

    static async loadRandomClub() {
        try {
            Helper.removeOldContent()
            Helper.showElement('#contentSpinner')

            const content = document.querySelector('#content')
            const randomClub = document.createElement('random-club')
            const randomClubData = await API.getRandomClub()

            if (randomClubData) {
                randomClub.setClub(randomClubData)
                randomClub.render()
            } else {
                randomClub.renderError()
            }

            content.append(randomClub)
            Helper.hideElement('#contentSpinner')
        } catch (e) {
            console.error(`Hmmm entah kenapa gagal render: ${e}`)
        }
    }

    static async registerSW() {
        try {
            await navigator.serviceWorker.register('../sw.js')
            console.log('Registrasi sw berhasil! Kece kan')
        } catch (e) {
            console.error(`Kenapa ya? kok error register sw: ${e}`)
        }
    }
}

export {Program}