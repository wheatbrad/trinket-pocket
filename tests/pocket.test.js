
const PocketFactory = require('../src/PocketFactory');
const pocket = PocketFactory();


test('has method to buy trinkets', () => {
    expect(pocket).toHaveProperty('buyTrinkets');
});


test('has method to sell trinkets', () => {
    expect(pocket).toHaveProperty('sellTrinkets');
});