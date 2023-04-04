const fs = require("fs");

const [b, n] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(b, n) {
  return b.toString(n).toUpperCase();
}

console.log(solution(b, n));
