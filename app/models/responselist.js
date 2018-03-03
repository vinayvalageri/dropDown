import DS from 'ember-data';

export default DS.Model.extend({
    description: DS.attr("string"),
    deleted:DS.attr("string")
    //foodoption: DS.belongsTo("foodoption"),
});
