console.log("connected");

var people = [
	{
		name: "Evan",
		role: "Mentor",
		progress: "N/A"
	},
	{
		name: "Josue",
		role: "Student",
		progress: "76%"
	},
	{
		name: "Courtney",
		role: "Student",
		progress: "89%"
	},
	{
		name: "Sam",
		role: "Student",
		progress: "96%"
	},
	{
		name: "Matt",
		role: "Student",
		progress: "64%"
	},
	{
		name: "Miranda",
		role: "Student",
		progress: "81%"
	},
	{
		name: "Ryan",
		role: "Student",
		progress: "87%"
	}
];


// VUE COMPONENT
// names for components should not be camelCased; use hyphens or all one word without camelCasing; no spaces
// inside the object(second object in the component) when creating a string -- use back ticks (``) instead of single quote ('') or double quote ("")
// creating a component basic template: 
	// Vue.component('name-of-component', { template: ``})
//limitation, only one element containing children element can be used; only 1st element will render if multiple same level elements are used

Vue.component('app-student', {
	props: ['name', 'role', 'progress'],
	data: function() {
		return {
			isFlagged: false
		}
	},
	methods: {
		flag: function() {
			this.isFlagged = !this.isFlagged;
		}
	},
	template: `
		<div class="col-4 p-4"
			v-bind:class="{ 'flagged': isFlagged }">
			<h1>Name: {{ name }}</h1>
			<p>Role: {{ role }}</p>
			<p>Progress: {{ progress }}</p>
			<button v-on:click="flag">Flag</button>
		</div>
			`
});

// MASTER VUE INSTANCE
new Vue({
	el: '#app',
	data: {
		students: people
	},
	methods: {

	}
})



