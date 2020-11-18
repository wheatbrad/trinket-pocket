# Trinket Pocket<img align="left" width="80" height="80" src="img/pocket.svg">

**A simple team exercise**

Create a pocket object that can contain coins :moneybag: and trinkets :prayer_beads:. The pocket allows users to `buy()` trinkets for 10 coins, and `sell()` trinkets for 8 coins. You can also return the number of `coins()` or `trinkets()`.

You cannot have a negative number of coins or trinkets.

**Example Usage**
```javascript
const pocket = PocketFactory({
    coins: 500,
    trinkets: 2
});
```

Purchase 5 trinkets:
```javascript
pocket.buyTrinkets(5);
```

Inspect pocket after purchase transaction:
```javascript
pocket.getPocketedTrinkets();   // 7
pocket.getPocketedCoins();      // 450
```

Sell a single trinket:
```javascript
pocket.sellTrinkets();
```

Inspect transaction history:
```javascript
let history = pocket.getTransactionHistory();

console.table(history);
/*
+-------+-----------------------------------+--------------------------+
| index | description                       | timestamp                |
+-------+-----------------------------------+--------------------------+
|  0    | Account initiation                | 2020-11-18T04:58:08.711Z |
|  1    | Purchased 5 trinkets for 50 coins | 2020-11-18T04:58:14.706Z |
|  2    | Sold 1 trinkets for 8 coins       | 2020-11-18T04:58:20.686Z |
+-------+-----------------------------------+--------------------------+
*/
```
