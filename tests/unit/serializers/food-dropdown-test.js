import { moduleForModel, test } from 'ember-qunit';

moduleForModel('food-dropdown', 'Unit | Serializer | food dropdown', {
  // Specify the other units that are required for this test.
  needs: ['serializer:food-dropdown']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
