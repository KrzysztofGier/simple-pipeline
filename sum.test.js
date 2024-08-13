const sum = require('./sum');
test('Adds 5 + 7 to equal 12',() => {
  expect(sum(5,7)).tobe(12);
});
