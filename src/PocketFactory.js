
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
            const pocket = store.get(this);
            const cost = numTrinkets * 10;

            if (pocket.coins < cost) return `You only have ${pocket.coins} coins in your pocket.`;

            pocket.coins -= cost;
            pocket.trinkets += numTrinkets;
        }
    },
    'sellTrinkets': {
        value: function(numTrinkets = 1) {
            const pocket = store.get(this);

            if (pocket.trinkets < numTrinkets) return `You only have ${pocket.trinkets} trinkets available to sell`;

            pocket.trinkets -= numTrinkets;
            pocket.coins += numTrinkets * 10;
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
        trinkets: (trinkets | 0) <= 0 ? 0 : trinkets
    });

    return o;
}


module.exports = PocketFactory;