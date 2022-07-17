/*
result 찍기

문제
자연수 result이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 100,000보다 작거나 같은 자연수 result이 주어진다.

출력
첫째 줄부터 result번째 줄 까지 차례대로 출력한다.

예제 입력 1 
5

예제 출력 1 
1
2
3
4
5
*/

const fs = require("fs");

const inputData = +fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

let result = "";

for (let i = 1; i <= inputData; i++) {
  result += `${i}\n`;
}

console.log(result);
