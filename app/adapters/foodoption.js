import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  buildURL: function (modelType, id) {
    return 'http://localhost:8080/getData' ;
  }
});
