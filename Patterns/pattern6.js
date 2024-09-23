/*
1234
123
12
1
*/

class Solution {
  pattern6(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i + 1; j++) {
        row = row + j;
      }
      console.log(row);
      row = "";
    }
  }
}
