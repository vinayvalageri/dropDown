import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      foodoption: this.store.findAll("foodoption"),
    });

  },

  afterModel(resolvedModel, transition) {
    Ember.set(resolvedModel, "foodoption", resolvedModel.foodoption.objectAtContent(0));
  }
});
