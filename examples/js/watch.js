Vue.filter('upper', (value) => {
	return value.toUpperCase();
});

Vue.filter('limit', (value, limit = 15) => {
	const length = value.length;

	if (length <= limit) {
		return value;
	}

	return `${value.substr(0, limit)}...`;
});

new Vue({
	el: 'body',

	data: {
		title: 'watch',
		teamsTv: [
			{
				title: 'BAR',
				name: 'FC Barcelona'
			},
			{
				title: 'COR',
				name: 'Corinthians'
			},
			{
				title: 'NYG',
				name: 'New York Giants'
			},
			{
				title: 'GB',
				name: 'Green Bay Packers'
			},
			{
				title: 'SFG',
				name: 'San Francisco Giants'
			},
			{
				title: 'GSW',
				name: 'Golden State Warrios'
			}
		],
		teams: [
			'FC Barcelona',
			'Corinthians',
			'New York Giants',
			'Green Bay Packers',
			'San Francisco Giants',
			'Golden State Warrios'
		],
		selected: {},
		log: [],
		actives: []
	},

	watch: {
		selected(value, oldValue) {
			this.log.push(oldValue);
		},

		teams: {
			handler(value) {
				this.actives = value.filter(t => t.selected === true);
			},
			deep: true
		}
	}
});
