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
		title: 'computed',
		person: {
			first_name: 'Ednilson',
			last_name: 'Amaral'
		}
	},

	computed: {
		full_name: {
			get() {
				return `${ this.person.first_name } ${ this.person.last_name }`;
			},

			set(value) {
				const [first, ...last] = value.split(' ');
				this.person.first_name = first;
				this.person.last_name = last.join(' ');
			}
		}
	}
});
