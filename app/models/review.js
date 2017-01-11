import DS from 'ember-data';

export default DS.Model.extend({
  authro: DS.attr(),
  rating: DS.attr(),
  content: DS.attr()
});
