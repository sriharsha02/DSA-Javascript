/*

1
12
123
1234

*/

class Solution {
  pattern3(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        row = row + j;
      }
      console.log(row);
      row = "";
    }
  }
}
