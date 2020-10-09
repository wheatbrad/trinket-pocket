Pocket can contain coins and trinkets. 

Create a pocket object that can contain COINS and TRINKETS. The pocket
allows users to buy() trinkets for 10 coins, or sell() trinkets for 5
coins. You can also return the number of coins() or trinkets().

You can't have a negative number of coins or trinkets.

var pocket = hof.pocket(50);

pocket.buy(); // buy for 10 coins
console.log(pocket.coins()); // 40
console.log(pocket.trinkets()); // 1

pocket.buy();
console.log(pocket.coins()); // 30
console.log(pocket.trinkets()); // 2

pocket.sell();
console.log(pocket.coins()); // 35
console.log(pocket.trinkets()); // 1
