import {Leagues} from "./leagues.js";
import {Program} from "./program.js";
import {HOME} from "./constants.js";

class Routes {
    static init() {
        Routes.loadPage()
        window.addEventListener('hashchange', Routes.loadPage)
    }

    static loadPage() {
        if (!window.location.hash) {
            window.location.href = HOME
        }

        if (window.location.hash.indexOf('standings') > -1) {
            const route = Routes.routeList[window.location.hash]
            route.func(route.param)
        } else {
            Routes.routeList[window.location.hash]()
        }
    }

    static routeList = {
        '#/home': Program.loadRandomClub,
        '#/saved': (function(){}),

        // Standings
        '#/standings/laLiga': {
            func: Program.loadStandings,
            param: Leagues.LA_lIGA,
        },
        '#/standings/premierLeague': {
            func: Program.loadStandings,
            param: Leagues.PREMIER_LEAGUE,
        },
        '#/standings/bundesliga': {
            func: Program.loadStandings,
            param: Leagues.BUNDESLIGA,
        },
        '#/standings/serieA': {
            func: Program.loadStandings,
            param: Leagues.SERIE_A,
        },
    }
}

export {Routes}