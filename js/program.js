import {API} from "./api.js";
import {ClubHighlight} from "./components/club-highlight.js";
import {Helper} from "./helper.js";
import {BUTTON_LIST} from "./constants.js";
import {Leagues} from "./leagues.js";
import {RandomClub} from "./components/random-club.js";

class Program {
    static async main() {
        try {
            customElements.define('random-club', RandomClub)
            await Program.registerSW()
            Program.registerButton()
            Program.loadRandomClub()
        } catch (e) {
            console.error(`Hmmm entah kenapa program-nya error: ${e}`)
        }
    }

    static registerButton() {
        for (const buttonID of BUTTON_LIST) {
            const button = document.querySelector(buttonID)
            button.addEventListener('click', async () => {
                history.pushState({}, '', `/${button.name}`)
                console.log('ANJ')
                await Program.loadStandings(Leagues.getLeagueID(button.name))
                console.log('ING')
            })
        }
    }

    static async loadStandings(leagueID) {
        try {
            Helper.removeOldContent()
            Helper.showElement('#contentSpinner')
            console.log('Loading standings...')
            await API.getStandings(leagueID)
            console.log('Loaded standings')
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