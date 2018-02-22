export default DS.RESTSerializer.extend({
  normalizeResponse(store,primaryModelClass,payload,id,requestType) {
    payload = { dropdowns: payload };
    console.log(JSON.stringify(payload));
    return this._super(store,primaryModelClass,payload,id,requestType);
  }
});
