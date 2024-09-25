/*
   A
  ABA
 ABCBA
ABCDCBA

*/

function pattern17(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      process.stdout.write(" ");
    }
    let ch = "A";
    let breakpoint = Math.floor((2 * i + 1) / 2);
    for (let j = 1; j <= 2 * i + 1; j++) {
      process.stdout.write(ch);
      if (j <= breakpoint) {
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
      } else {
        ch = String.fromCharCode(ch.charCodeAt(0) - 1);
      }
    }
    console.log();
  }
}

pattern17(4);
