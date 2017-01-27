Vue.filter('upper', function (value) {
	return value.toUpperCase();
});

new Vue({
	el: 'body',
	data: {
		title: 'Filters, part 01',
		description: 'My first lines of code with VueJS!'
	},
	ready(){
		const self = this;

		setTimeout(function (){
			self.title = 'GoPackGo!';
		}, 3000);
	}
});
