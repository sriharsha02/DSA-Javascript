/*
1      1
12    21
123  321
12344321

*/

function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(j));
    }
    for (let k = 1; k <= 2 * n - 2 * i; k++) {
      process.stdout.write(" ");
    }
    for (let m = i; m >= 1; m--) {
      process.stdout.write(String(m));
    }
    console.log();
  }
}

pattern12(5);
