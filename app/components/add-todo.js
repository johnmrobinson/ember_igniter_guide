import Ember from 'ember';

export default Ember.Component.extend({
	myText: 'some text',

	actions: {
		submitMe() {
			const _text = this.get('myText');
			// myText is a property that is defined in the template. A template can inject a property.
			// Alternatively, we can define a property as above. This gives us a default value.
			this.get('onAdd')(_text);
			// onAdd is added as a property by the template. Turns out onAdd is a function.
			// So, this.get('onAdd') gets the function action 'addItem' and calls the 'addItem' action (defined in todo-widget controller) with _text
			this.set('myText',"");
			this.$('input').focus();
			console.log(_text);
		}
	}

});
