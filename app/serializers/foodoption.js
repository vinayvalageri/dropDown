import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey:'display',
  attrs: {
    responselist: {embedded: 'always'}
  }
});
