/*

****
****
****
****

*/

class Solution {
  pattern1(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        row = row + "*";
      }
      console.log(row);
      row = "";
    }
  }
}
