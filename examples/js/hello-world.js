new Vue({
	el: 'body',
	data: {
		title: 'Hello World in VueJS',
		description: 'My first lines of code with VueJS!'
	},
	ready(){
		const self = this;

		setTimeout(function (){
			self.title = 'GoPackGo!';
		}, 3000);
	}
});
