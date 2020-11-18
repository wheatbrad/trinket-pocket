
const store = new WeakMap();
const logTransaction = (obj, description) => {
    const transaction = Object.create(null);

    transaction.description = description;
    transaction.timestamp = new Date().toISOString();

    obj.transactionHistory.push(transaction);
}
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
            
            logTransaction(pocket, `Purchased ${numTrinkets} trinkets for ${cost} coins`);
        }
    },
    'sellTrinkets': {
        value: function(numTrinkets = 1) {
            const pocket = store.get(this);
            const profit = numTrinkets * 8;

            if (pocket.trinkets < numTrinkets) return `You only have ${pocket.trinkets} trinkets available to sell`;

            pocket.trinkets -= numTrinkets;
            pocket.coins += profit;

            logTransaction(pocket, `Sold ${numTrinkets} trinkets for ${profit} coins`);
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
    const instanceProps = Object.create(null);
    const transaction = Object.create(null);

    transaction.description = 'Account initiation';
    transaction.timestamp = new Date().toISOString();
    
    instanceProps.coins = (coins | 0) <= 0 ? 0 : coins;
    instanceProps.trinkets = (trinkets | 0) <= 0 ? 0 : trinkets;
    instanceProps.transactionHistory = [transaction];

    store.set(o, instanceProps);

    return o;
}


module.exports = PocketFactory;