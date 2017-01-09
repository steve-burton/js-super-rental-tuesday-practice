import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set("addNewAnnouncement", true);
    },

    saveAnnouncement() {
      if (this.get('announcement')) {
        var params = {
          string: this.get('announcement')
        };
        this.set('addNewAnnouncement', false);
        this.sendAction('saveAnnouncement', params);
      } else {
        alert("Invalid input");
      }
    }
  }
});
