/*
1
0 1
1 0 1
0 1 0 1

*/

function pattern11(n) {
  for (let i = 1; i <= n; i++) {
    let start = 1;
    if (i % 2 == 0) {
      start = 0;
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(start) + " ");
      start = 1 - start;
    }
    console.log();
  }
}

pattern11(4);
