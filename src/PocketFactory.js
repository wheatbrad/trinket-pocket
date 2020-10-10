
const store = new WeakMap();
const pocketPrototype = Object.create(null);

Object.defineProperties(pocketPrototype, {
    'getPocketedCoins': {
        value: function () {
            return store.get(this).coins;
        }
    },
    'getPocketedTrinkets': {
        value: function () {
            return store.get(this).trinkets;
        }
    },
    'buyTrinkets': {
        value: function(numTrinkets = 1) {
            return; // stub
        }
    },
    'sellTrinkets': {
        value: function(numTrinkets = 1) {
            return; // stub
        }
    }
});


/**
 * Factory function initializes and returns Pocket objects
 *
 * @param   {object}    Initial number of coins and trinkets
 *
 * @return  {object}    Pocket
 */
function PocketFactory({coins, trinkets} = {coins: 100, trinkets: 0}) {
    
    const o = Object.create(pocketPrototype);

    store.set(o, {
        coins: (coins | 0) <= 0 ? 0 : coins,
        trinkets: (trinkets | 0) <= 0 ? 0 : coins
    });

    return o;
}


module.exports = PocketFactory;