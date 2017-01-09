import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    saveRental1() {
      if (this.get('owner') &&
          this.get('city') &&
          this.get('type') &&
          this.get('image') &&
          this.get('bedrooms')) {

            var params = {
              owner: this.get('owner') ? this.get('owner') : "No value selected.",
              city: this.get('city') ? this.get('city') : "No value selected.",
              type: this.get('type') ? this.get('type') : "No value selected.",
              image: this.get('image') ? this.get('image') : "No value selected.",
              bedrooms: this.get('bedrooms') ? this.get('bedrooms') : "No value selected.",
            };
            this.set('addNewRental', false);
            this.sendAction('saveRental2', params);
          } else {
            alert("Invalid input");
          }
    }
  }
});
