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
		title: 'Diretiva - v-model',
		name: 'ednilson',
		active: false,
		description: 'My first lines of code with VueJS!',
		color: [],
		status: ""
	}
});
