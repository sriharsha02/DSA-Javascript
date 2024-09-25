/*
A
BB
CCC
DDDD
*/

function pattern16(n) {
  let ch = "A";
  for (let i = 1; i <= n; i++) {
    let letter = String.fromCharCode(ch.charCodeAt(0));
    for (let j = 1; j <= i; j++) {
      process.stdout.write(letter);
    }
    ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    console.log();
  }
}
pattern16(4);
