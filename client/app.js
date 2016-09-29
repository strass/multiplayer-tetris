Vue.use(VueSocketio, 'tetromino.herokuapp.com')

var tetris = new Vue({
	el: '#app',
	data: {
		name: '',
		players: [],
		messages: [],
		highScores: []
	},
	computed: {
		sortedPlayers: function() {
			return this.players.sort(function(a, b) {
				if (a.score < b.score) { return 1 }
				if (a.score > b.score) { return -1 }
				return 0
			})
		}
	},
	sockets: {
		connect: function() {},
		updateScoreboard: function(activePlayers) {
			this.players = activePlayers
			// console.log(this.players)
		},
		updateActivity: function(message) { //george
			this.messages.unshift(message)
			while (this.messages.length > 6) {
				this.messages.pop()
			}
			// console.log(this.players)
		},
		updateDbScoreboard: function(highScores) {
			this.highScores = highScores
		}
	}
})
