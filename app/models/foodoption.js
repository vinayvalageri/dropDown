import DS from 'ember-data';

export default DS.Model.extend({
    display:DS.attr('boolean'),
    responselist:DS.hasMany('responselist')
});
