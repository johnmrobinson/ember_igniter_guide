// app/components/add-todo.js

import Ember from 'ember';

export default Ember.Component.extend({
	myText: 'some text',

	actions: {
		submitMe() {
			const _text = this.get('myText');
			// 'myText' is a property that is defined in the add-todo.hbs template. A property can be injected by the component's .js file or by the component's .hbs template file.
			// My preference is to define all properties in the .js file, as above.
			this.get('onAdd')(_text);
			// onAdd is added as a property by the template. Turns out onAdd is a function.
			// So, this.get('onAdd') gets the function action 'addItem' and calls the 'addItem' action (defined in todo-widget controller) with _text
			this.set('myText',"");
			this.$('input').focus();
			console.log(_text);
		}
	}

});
