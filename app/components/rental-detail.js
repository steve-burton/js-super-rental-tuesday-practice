import Ember from 'ember';

export default Ember.Component.extend({
  action: {
    delete(rental) {
      if (confirm('Are you sure you wnat to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
