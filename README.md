# Learning Vue.js 1.x

VueJS são componentes reativos para interfaces web modernas. É uma biblioteca para criar interfaces web iterativas. Não é um framework completo, é focado para ser exclusivamente a camada de view.

Ele não é considerado um framework fullstack, pois ele permite a construção de interfaces, e partir daí, podemos montar a aplicação como preferirmos.

Com isso, podemos construir sistemas e aplicações complexas com VueJS. O VueJS é baseado em componentes.


## Hello world

`hello-world.js`

```js  
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
```

- O comando `new Vue({...})` diz que estamos iniciando uma nova aplicação em VueJS.  
- O `el` vai dizer qual elemento eu irei controlar em minha aplicação VueJS.  
- Todo o controle de informações estará dentro de `data`.  
- Tudo dentro de `ready()` será carregado assim que o componente estiver pronto, ou seja, carregado.  
- O `this` em `ready()` é a minha instância em VueJS.  
- Chamo um `setTimeout()` para que altere o `title` após o tempo que eu determinar.

Nossa função `setTimeout()` eu poderia facilmente passar como um *callback* uma *arrow function*. Caso fosse uma *arrow function*, declarar *this* como *self* não seria necessário, ficando da seguinte forma:  

```js  
ready(){
  setTimeout(() => {
	this.title = 'GoPackGo!';
  }, 3000);
}
```


No HTML, fica da seguinte forma:  

```html  
<h1>{{ title }}</h1>
<p>{{ description }}</p>
```

No HTML, fazemos o *data binding*, chamando pelo nome da **propriedade** que queremos exibir a informação. Por exemplo, `{{ title }}` vai exibir a informação da **propriedade** `title` presente em `data`.


## Filters

### Filtros de exibição

```html  
<h1>{{ title | upper }}</h1>
<p>{{ description | limit 8}}</p>
```

Nos filtros acima, chamamos o nome do filtro após o **pipe**. No `p`, nós passamos além do nome do filtro, um parâmetro, o **8**. No JS ficou:  

```js  
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
```


## Diretivas

Diretivas são atributos diferentes dos atributos do HTML. Todas as diretivas no VueJS possuem uma nomenclatura padrão, sempre começando com `v-` seguido pelo nome da diretiva.


### `v-bind`

Ela anexa, dá um bind, um conteúdo no elemento ou componente que ela está inserida.

No HTML, fazemos da seguinte forma: `<p v-bind:id="name">{{ description | limit 8}}</p>`. Ou seja, no nosso `v-bind`, falamos para ele setar como **ID** a propriedade **name**. No HTML compilado, ficará da seguinte maneira: `<p id="ednilson">My first...</p>`.

O VueJS nos proporciona uma chamada curta para o `v-bind`, declarando apenas com `:nome`. Por exemplo: `<p :id="name">{{ description | limit 8}}</p>`. O resultado é o mesmo do exemplo anterior.

Também podemos trabalhar no `v-bind` com classes. Por exemplo: `<p v-bind:class="{ 'redColor': true }">{{ description | limit 8}}</p>`, onde ele vai atribuir a classe `redColor` se ela for *true*. Se for *false*, não será declarada.


### `v-model`

Ela é responsável por aplicar um `v-bind` aos inputs do HTML. Além de ser responsável por permitir ao usuário modificar as informações contidas nos componentes do VueJS.

No HTML, `<input type="text" v-model="title">`. Aqui, entra em ação o *two-way data binding*. Automaticamente **EM TEMPO REAL** mudamos a propriedade `title` do nosso componente. Podemos atualizar automaticamente uma informação com o `v-model` ou enviar para alguma API, salvar em um JSON.

O `v-model` não fica restrito apenas à *input* do tipo texto, ele pode atuar em vários tipos de *inputs*.

#### lazy

É um parâmetro do `v-model` que permite alterar o comportamento padrão do `v-model` em questão.

Evento *change* é invocado apenas quando eu termino de digitar alguma coisa no meu input.

`<input type="text" v-model="title" lazy>`


#### debounce

Caso queiramos que ele atualize com um pouco mais de atraso, utilizamos o `debounce`:  

`<input type="text" v-model="title" debounce="5000">`


#### radio

```html  
<input type="radio" :value="false" v-model="active"> Inativo
<input type="radio" :value="true" v-model="active"> Ativo
```


#### select

```html  
<select v-model="active">
	<option :value="0">Inativo</option>
	<option :value="1">Ativo</option>
</select>
```


```html
<select v-model="color" multiple>
	<option value="blue">Azul</option>
	<option value="green">Verde</option>
	<option value="red">Vermelho</option>
	<option value="yellow">Amarelo</option>
</select>
```


#### checkbox

```html  
<input type="checkbox" v-model="color" value="blue"> Azul
<input type="checkbox" v-model="color" value="red"> Vermelho
<input type="checkbox" v-model="color" value="yellow"> Amarelo
```


```html  
<input type="checkbox" :false-value="'INATIVO'" :true-value="'ATIVO'" v-model="status" value="yellow"> Ativo?
```


### v-show / v-if

```html  
<img src="img/haha.jpg" v-show="img.visible">

<input type="checkbox" v-model="img.visible"> Visible?
```

Em `v-show` ele acrescenta/remove um `display: none` no elemento. Já em `v-if` ele vai remover/acrescentar completamente o elemento HTML da página.

```html  
<img src="img/haha.jpg" v-if="img.visible">
```


### v-for

```js  
teams: [
	'FC Barcelona',
	'Corinthians',
	'New York Giants',
	'Green Bay Packers',
	'San Francisco Giants',
	'Golden State Warrios'
]
```

```html  
<ul>
	<li v-for="team in teams">
		{{ $index }} - {{ team }}
		<span class="blueColor" v-show="($index % 2) == 0">(par)</span>
	</li>
</ul>
```


```js  
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
```

```html  
<ul>
	<li v-for="(index, tvTeam) in teamsTv">
		{{ index }} - {{ tvTeam.name }}
		<span class="blueColor">({{ tvTeam.title }})</span>
	</li>
</ul>
```


### v-on  

```js  
methods: {
	addTask() {
		const task = clone(this.newTask);
		this.tasks.push(task);
	}
}
```

```html  
<button class="btn btn-default" type="button" v-on:click="addTask()">Add</button>
```

No exemplo acima, o `v-on` é acionado quando o evento `click` ocorrer. Então ele irá chamar o método `addTask()`.


## Propriedades  

### watch  

Podemos observar uma propriedade e criar componentes com isso. Ou seja, permite observar valores contidos na propriedade data e/ou passados como props. Todas as vezes que o valor mudar então o método contido em watch será executado, lhe permitindo executar alguma ação.


```js  
watch: {
	selected(value, oldValue) {
		this.log.push(oldValue);
	}
}
```


### ready()  

É chamado apenas quando o componente estiver pronto. Ou seja, é um método que será executado quando componente estiver totalmente configurado e pronto para uso.


### computed (propriedades computadas)  

Ele contém funções que são utilizadas como propriedades. Seu principal objetivo é retornar dados manipulados, tornando assim propriedades *computed* reativas.


```js  
computed: {
	actives() {
		return this.teams.filter(t => t.selected === true);
	}
}
```


### methods  

Ele irá conter todos os métodos que podemos utilizar para realizar algumas operação com os dados. Por exemplo, um método **cadastrar**. Conterá um objeto com todos os métodos também disponíveis ao HTML mas não limitados a ele. Digo isso pois qualquer método contido neste objeto pode também executar os demais métodos do componente, bastando para isso utilizar o this (neste caso o this se refere ao próprio componente).


```js  
methods: {
	addTask() {
		const task = clone(this.newTask);
		this.tasks.push(task);
	}
}
```

```html  
<button class="btn btn-default" type="button" v-on:click="addTask()">Add</button>
```


### props  

São as propriedades que o componente pode receber de seu pai. Em sua forma de uso mais simples, props recebe um array de strings, porém, caso ao menos uma das propriedades necessite ter um valor padrão ou precise ser validada, então props será um objeto.


## Componentes  

> Os componentes são conhecidos como as meninas dos olhos do Vue.js.  

Uma introdução aos componentes para quem veio de Angular é que os componentes são as diretivas do Angular 1, porém aquelas diretivas que podemos inserir tags. E dentro dessas tags podemos inserir template, controller, links, etc.

Com o Vue.js criamos componentes para absolutamente tudo, reutilizaveis e não reutilizaveis. Nos permite termos componentes no escopo global, disponíveis para toda a aplicação ou então componentes que ficarão disponíveis apenas para outros componentes.

> VueJS é uma biblioteca para se criar componentes, então ao criar uma aplicação com "VueJS" você estará criando uma aplicação com componentes. Isso é o mais próximo que se tem da "visão lego" de desenvolvimento web.

> Os componentes do VueJS são utilizados como custom-tags do HTML, permitindo criar uma composição de páginas/interfaces bem intuitiva e reutilizável.


```html  
<div class="row">
	<div class="col-md-12">
		<hello-component></hello-component>
	</div><!-- fim da /.col -->
</div><!-- fim da /.row -->
```

```js  
const HelloComponent = Vue.extend({
	template: `<h2>{{ description }}</h2>
	<input type="text" v-model="description">`,

	data() {
		return {
			description: 'Hey, yow!'
		}
	}
});

new Vue({
	el: 'body',

	components: {
		HelloComponent
	}
});
```


## vue-cli  

É uma ferramenta com o intuito de facilitar a criação de projetos. Responsável por criar alguns templates para projetos em Vue.js.

Para instalar o **vue-cli** basta executar o seguinte comando: `npm install -g vue-cli`.

Para visualizar os templates disponíveis basta executar o seguinte comando: `vue list`. E para criar um projeto com um template padrão do `vue-cli`, basta executar o seguinte comando: `vue init nome_template nome_projeto`, por exemplo, `vue init webpack vue-webpack`.

Ele irá instalar o projeto dividido em vários arquivos e pastas, vamos descobrir o que cada pasta possui e qual é sua responsabilidade.


* `build`: possui os arquivos de configuração que irão fazer o *build* da aplicação;  
* `config`: alguns arquivos que precisamos alterar uma coisa ou outra em nosso ambiente;  
* `src`: é o nosso **CÓDIGO FONTE**, onde iremos brincar pra caramba.


## Single File Component  

O Vue.js possui um tipo de arquivo com a extensão `.vue`. Com esses tipos de arquivo irá facilitar e muito a nossa vida enquanto desenvolvemos o nosso projeto. Um arquivo `.vue` é dividido em três partes: `<template></template>`, `<script></script>` e `<style></style>`.

```html  
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World!',
    };
  },
};
</script>

<style>
h1 {
  color: #42b983;
}
</style>
```

Para transformar os arquivos `.vue` em arquivos `.js` existem alguns pacotes que realizam esse trabalho. Se o template do seu projeto é Browserify o pacote é **vueify**. Agora, se o template do seu projeto é o Webpack, então o carinha que vai fazer esse trabalho é o **vue-loader**.


## Hot reload

É um reload, porém diferente de *live reload* ou *browser sync*. Ele dá o reload apenas na parte do código que você modificou, não recarrega a página toda. Ele atualiza o template, o javascript e o CSS; porém o objeto data não é recarregado/manipulado.


## ESLint

É uma ferramenta para garantir a qualidade e o padrão no nosso código javascript. Isso, quanto ao trabalho em equipe é importantissimo, pois garantimos assim que a equipe mantenha o código no padrão e com qualidade.
