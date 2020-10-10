
const PocketFactory = require('../src/PocketFactory');
const pocket = PocketFactory({
    coins: -1,
    trinkets: '-1'
});

/** ---------------------------------------------------
 *  Tests to enforce expected interface on
 *  Pocket objects
 */

test('has method to report coins in pocket', () => {
    expect(pocket).toHaveProperty('getPocketedCoins');
});


test('has method to report trinkets in pocket', () => {
    expect(pocket).toHaveProperty('getPocketedTrinkets');
});


test('has method to buy trinkets', () => {
    expect(pocket).toHaveProperty('buyTrinkets');
});


test('has method to sell trinkets', () => {
    expect(pocket).toHaveProperty('sellTrinkets');
});


/** ---------------------------------------------------
 *  Pocket instance cannot have a negative amount
 *  of coins or trinkets. This instance was initialize
 *  with a negative number of coins and a value of
 *  type `String` for the amount of trinkets. Returned
 *  values should only be of type `Number`.
 */

 test('should not have a negative number of coins', () => {
     expect(pocket.getPocketedCoins()).toBe(0);
 });
 
 
 test('should not have a negative number of trinkets', () => {
     expect(pocket.getPocketedTrinkets()).toBe(0);
 });