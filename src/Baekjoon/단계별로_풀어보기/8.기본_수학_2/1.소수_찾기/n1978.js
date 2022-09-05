/*
소수 찾기

문제
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

출력
주어진 수들 중 소수의 개수를 출력한다.

예제 입력 1 
4
1 3 5 7

예제 출력 1 
3
*/

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "src/index.txt";
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +inputData[0];
const values = inputData[1].split(" ").map((value) => +value);

let count = 0;

for (let i = 0; i < N; i++) {
  if (isPrimeNumber(values[i])) {
    count++;
  }
}

console.log(count);

function isPrimeNumber(value) {
  if (value < 2) {
    return false;
  }

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}
