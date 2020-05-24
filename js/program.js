import {API} from "./api.js";
import {ClubHighlight} from "./components/club-highlight.js";

class Program {
    static async main() {
        try {
            Program.registerSW()
            await Program.loadHome()
        } catch (e) {
            console.error(`Hmmm entah kenapa program-nya error: ${e}`)
        }
    }

    static async loadHome() {
        try {
            customElements.define('club-highlight', ClubHighlight)

            const randomClub = document.createElement('club-highlight')
            const section = document.querySelector('#randomClub')
            const randomClubData = await API.getRandomClub()

            section.innerHTML = ''
            section.append(randomClub)

            randomClub.setClub(randomClubData)
            randomClub.render()
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