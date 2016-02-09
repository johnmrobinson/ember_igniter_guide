import Ember from 'ember';

// Here, we are defining a model for the 'todos' route.
// This model is injected (as the myTodos object) into todo-widget by the todos.hbs template

export default Ember.Route.extend({
	model() { 
		return [
			{text: "create ember app"},
			{text: "read igniter"},
			{text: "master ember!"}
		]
	}
});
