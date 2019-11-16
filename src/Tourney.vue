<template>
<div>
	<bracket :rounds="rounds">
		<template slot="player" slot-scope="{ player }">
			{{ player.name }}
		</template> 
	   
	</bracket>

</div>
	</template>

<script>
    import Bracket from "./Bracket";
    import navbar from "./navbar";
	import login from "./login";

var players = 8;
    var mock_db = { round1:[{id:'1', name: "Competitor 1"},
                            {id: '2', name:"Competitor 2"},
                            {id: '3', name:"Competitor 3"},
                             {id: '4', name:"Competitor 4"},
                            {id:'5', name: "Competitor 5"},
                            {id: '6', name:"Competitor 6"},
                            {id: '7', name:"Competitor 7"},
                             {id: '8', name:"Competitor 8"}],
                    round2:[{id:'1', name: 'Competitor 1'},
                            {id:'4', name: 'Competitor 4'},
                            {id:'6', name: 'Competitor 6'},
                            {id:'8', name: 'Competitor 8'}],
                    round3:[{id:'4', name: 'Competitor 4'},
                            {id:'6', name: 'Competitor 6'}],};
    const rounds = [];
    let count = 0;
    let round_obj = {};
    let games = [];
    let round = 1;
    let game = {};
    while (players > 1) {
        round_obj = {};
        games = [];
        while (count < players) {
            const player1 = 'Player' + count;
            const player2 = 'Player' + (count + 1);
            const round_name = 'round' + round;
            console.log(round + ": " + count);
            game = {
                player1: {id: mock_db[round_name][count].id, name: mock_db[round_name][count].name, det: true, winner: false},
                player2: {id: mock_db[round_name][count+1].id, name: mock_db[round_name][count+1].name, det: true, winner: true},
            };
            count += 2;
            games.push(game)
        }
        round_obj.games = games;
        rounds.push(round_obj);
        count = 0;
        players /= 2;
        round += 1;
    }
    export default {
        name: "tourney",
        components: {
            Bracket,
			navbar,
			login
        },
        data() {
            return {
                rounds: rounds
            }
        }
    };

</script>

<style>
html, body {
	font-family: "Roboto";
    margin: 0px; 
    padding: 0px;
}
</style>