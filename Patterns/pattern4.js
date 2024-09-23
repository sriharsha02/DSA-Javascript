/*

1
22
333
4444

*/

class Solution {
  pattern4(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        row = row + i;
      }
      console.log(row);
      row = "";
    }
  }
}
