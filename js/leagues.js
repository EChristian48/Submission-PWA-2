const Leagues = {
    LA_lIGA: 2014,
    PREMIER_LEAGUE: 2021,
    BUNDESLIGA: 2002,
    SERIE_A: 2019,


    // Currently unused because I'm using hash routing
    // getLeagueID(button_name) {
    //     switch (button_name) {
    //         case 'premier-league':
    //             return this.PREMIER_LEAGUE
    //         case 'la-liga':
    //             return this.LA_lIGA
    //         case 'bundesliga':
    //             return this.BUNDESLIGA
    //         case 'serie-a':
    //             return this.SERIE_A
    //         default:
    //             return this.PREMIER_LEAGUE
    //     }
    // }
}

Object.freeze(Leagues)

export {Leagues}