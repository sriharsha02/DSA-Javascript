/*
ABCD
ABC
AB
A
*/

function pattern15(n) {
  for (let i = 1; i <= n; i++) {
    let ch = "A";
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(ch);
      ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }
    console.log();
  }
}
pattern15(4);
