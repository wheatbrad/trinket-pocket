
/**
 * Factory function initializes and returns Pocket objects
 *
 * @param   {number}  coins     initial number of coins in Pocket
 * @param   {number}  trinkets  initial number of tinkets in Pocket
 *
 * @return  {object}            Pocket
 */
function PocketFactory({coins, trinkets} = {}) {
    
    const obj = Object.create(null);
    const staticPocket = new WeakMap();

    obj.buyTrinkets = function (numTrinkets = 1) {} 

    obj.sellTrinkets = function (numTrinkets = 1) {}



    return obj;
}


module.exports = PocketFactory;