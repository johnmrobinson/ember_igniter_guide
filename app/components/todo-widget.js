import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    addItem(text) {
      this.get('myTodos').pushObject({ text: text });
    }
  }

});
