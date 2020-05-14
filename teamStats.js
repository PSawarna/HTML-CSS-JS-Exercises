const team = {
    _players: [
    {firstName: 'John', lastName: 'Smith', age: 25},
    {firstName: 'James', lastName: 'Williams', age: 20},
    {firstName: 'Chris', lastName: 'Wilson', age: 19},
    ],
    _games: [
     {opponent: 'Habs', teamPoints: 3, opponentPoints: 0},
     {opponent: 'Senators', teamPoints: 2, opponentPoints: 2},
     {opponent: 'Maple Leafs', teamPoints: 5, opponentPoints: 4}
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age,
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent,
            teamPoints,
            opponentPoints,
        };
        this.games.push(game);
    }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Canucks', 0, 1);
team.addGame('Oilers', 1, 1);
team.addGame('Pokey', 3, 1);

console.log(team.games);
