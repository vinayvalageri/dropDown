export default DS.RESTSerializer.extend({
  normalizeResponse(store,primaryModelClass,payload,id,requestType) {
    payload={foodoptions:  payload.foodoption,
              dropdowns: payload.dropdown};
    console.log(payload);
    return this._super(store,primaryModelClass,payload,id,requestType);
  }
});
