/*

*******
 *****
  ***
   *
   
*/

class Solution {
  pattern8(n) {
    for (let i = 1; i <= n; i++) {
      for (let k = 1; k <= i - 1; k++) {
        process.stdout.write(" ");
      }
      for (let j = 1; j <= 2 * n - 2 * i + 1; j++) {
        process.stdout.write("*");
      }
      console.log();
    }
  }
}
