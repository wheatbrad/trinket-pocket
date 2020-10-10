# Trinket Pocket<img align="left" width="80" height="80" src="img/pocket.svg">

**A simple team exercise**

Create a pocket object that can contain coins :moneybag: and trinkets :prayer_beads:. The pocket allows users to `buy()` trinkets for 10 coins, and `sell()` trinkets for 8 coins. You can also return the number of `coins()` or `trinkets()`.

You cannot have a negative number of coins or trinkets.

**Example Usage:**
```javascript
// initialize pocket
const pocket = PocketFactory({
    coins: 500,
    trinkets: 2
});

// purchase 5 trinkets
pocket.buyTrinkets(5);

// inspect pocket after purchase
pocket.getPocketedTrinkets();   // 7
pocket.getPocketedCoins();      // 450

// only selling 1 trinket
pocket.sellTrinkets();

// inspect pocket after sale
pocket.getPocketedTrinkets();   // 6
pocket.getPocketedCoins();      // 458
```
