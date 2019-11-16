<template>
<div>
	<navbar></navbar>
	<router-view></router-view>
	<!--<login> TEST FOR LOGIN  </login>-->

</div>
	</template>

<script>
    import Bracket from "./Bracket";
    import navbar from "./navbar";
	import login from "./login";
	import Tourney from "./Tourney";
    import Register from "./register";

var players = 8;
    var mock_db = { round1:{Player1:{id:'1', name: "Competitor 1"},
                            Player2:{id: '2', name:"Competitor 2"},
                            Player3:{id: '3', name:"Competitor 3"},
                            Player4: {id: '4', name:"Competitor 4"},
                            Player5:{id:'5', name: "Competitor 5"},
                            Player6:{id: '6', name:"Competitor 6"},
                            Player7:{id: '7', name:"Competitor 7"},
                            Player8: {id: '8', name:"Competitor 8"}},
                    round2:{Player1:{id:'1', name: 'Competitor 1'},
                            Player2:{id:'4', name: 'Competitor 4'},
                            Player3:{id:'6', name: 'Competitor 6'},
                            Player4:{id:'8', name: 'Competitor 8'}},
                    round3:{Player1:{id:'4', name: 'Competitor 4'},
                            Player2:{id:'6', name: 'Competitor 6'}}};
    const rounds = [];
    let count = 1;
    let round_obj = {};
    let games = [];
    let round = 1;
    let game = {};
    while (players > 1) {
        round_obj = {};
        games = [];
        while (count <= players) {
            const player1 = 'Player' + count;
            const player2 = 'Player' + (count + 1);
            const round_name = 'round' + round;
            game = {
                player1: {id: mock_db[round_name][player1].id, name: mock_db[round_name][player1].name, det: true, winner: false},
                player2: {id: mock_db[round_name][player2].id, name: mock_db[round_name][player2].name, det: true, winner: true},
            };
            count += 2;
            games.push(game)
        }
        round_obj.games = games;
        rounds.push(round_obj);
        count = 1;
        players /= 2;
        round += 1;
    }
    export default {
        name: "app",
        components: {
            Bracket,
			navbar,
			login,
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