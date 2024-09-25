/*
1
2 3
4 5 6
7 8 9 10

*/

function pattern13(n) {
  let start = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(start) + " ");
      start++;
    }
    console.log();
  }
}

pattern13(4);
