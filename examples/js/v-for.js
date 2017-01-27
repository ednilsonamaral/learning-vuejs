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
		title: 'Diretiva - v-for',
        teams: [
			'FC Barcelona',
			'Corinthians',
			'New York Giants',
			'Green Bay Packers',
			'San Francisco Giants',
			'Golden State Warrios'
		],
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
		]
	}
});
