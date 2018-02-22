import DS from 'ember-data';
import Model from 'ember-data/model';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});
