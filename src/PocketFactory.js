
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
    'getTransactionHistory': {
        value: function () {
            return store.get(this).transactionHistory;
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
            pocket.coins += numTrinkets * 8;
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
    const partition = Object.create(null);
    const transaction = Object.create(null);

    partition.coins = (coins | 0) <= 0 ? 0 : coins;
    partition.trinkets = (trinkets | 0) <= 0 ? 0 : trinkets;
    
    transaction.description = 'Account initiation';
    transaction.timestamp = new Date().toISOString();
    partition.transactionHistory = [transaction];

    store.set(o, partition);

    return o;
}


module.exports = PocketFactory;