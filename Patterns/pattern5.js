/*

****
***
**
*

*/

class Solution {
  pattern5(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
      for (let j = n; j >= i; j--) {
        row = row + "*";
      }
      console.log(row);
      row = "";
    }
  }
}
