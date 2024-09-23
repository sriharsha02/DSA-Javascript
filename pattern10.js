/*

*
**
***
****
***
**
*

*/

class Solution {
  pattern10(n) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
      }
      console.log();
    }
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 1; j <= n - i; j++) {
        process.stdout.write("*");
      }
      console.log();
    }
  }
}
