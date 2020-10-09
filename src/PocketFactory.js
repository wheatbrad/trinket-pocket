
/**
 * Factory function initializes and returns Pocket objects
 *
 * @param   {object}    Initial number of coins and trinkets
 *
 * @return  {object}    Pocket
 */
function PocketFactory({coins, trinkets} = {coins:100, trinkets:0}) {
    
    const obj = Object.create(null);
    const staticPocket = new WeakMap();

    obj.buyTrinkets = function (numTrinkets = 1) {} 

    obj.sellTrinkets = function (numTrinkets = 1) {}

    obj.coins = coins;

    return obj;
}


module.exports = PocketFactory;