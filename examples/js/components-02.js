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

const HelloComponent = Vue.extend({
	template: `<h2>{{ description }}</h2>
	<input type="text" v-model="description">`,

	props: ['description']
});

Vue.component('hello-component', HelloComponent); // disponível globalmente

new Vue({
	el: 'body',

	data: {
		title: 'componentes'
	}
});
