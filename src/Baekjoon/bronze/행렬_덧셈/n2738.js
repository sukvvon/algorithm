const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");
let arr1 = [];
const arr2 = [];

for (let i = 0; i < N; i++) {
  arr1.push(
    input
      .shift()
      .split(" ")
      .map((v) => +v)
  );
}

for (let i = 0; i < N; i++) {
  arr2.push(
    input
      .shift()
      .split(" ")
      .map((v) => +v)
  );
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr1[i][j] += arr2[i][j];
  }

  console.log(arr1[i].join(" "));
}
