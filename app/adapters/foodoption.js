import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  buildURL: function (modelType, id) {
    return 'http://localhost:8080/getData' ;
  },
  handleResponse: function(status, headers, payload) {
   payload = {foodoptions: payload};
   return this._super(status, headers, payload);
  }
});
