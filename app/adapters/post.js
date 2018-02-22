import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  buildURL: function (modelType, id) {
    return 'https://jsonplaceholder.typicode.com/posts' ;
  }
});
