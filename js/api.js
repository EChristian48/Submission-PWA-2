import {API_KEY, API_URL} from "./constants.js";
import {Helper} from "./helper.js";

class API {
    static async getRandomClub() {
        try {
            const randomClub = Helper.random(0, 47)
            const response = await fetch(`https://${API_URL}/teams`, {
                headers: {
                    'X-Auth-Token': API_KEY,
                },
            })
            const json = await response.json()
            console.log(json.teams[randomClub])
            return await json.teams[randomClub]
        } catch (e) {
            console.error(e)
        }
    }

    static async getCLub(id) {
        try {
            const randomClub = Helper.random(0, 47)
            const response = await fetch(`https://${API_URL}/teams`, {
                headers: {
                    'X-Auth-Token': API_KEY,
                },
            })
            const json = await response.json()
            console.log(json.teams[randomClub])
            return await json.teams[randomClub]
        } catch (e) {
            console.error(e)
        }
    }
}

export {API}