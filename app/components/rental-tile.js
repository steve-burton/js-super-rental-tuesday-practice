import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if (confirm('Are you super duper positive you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
