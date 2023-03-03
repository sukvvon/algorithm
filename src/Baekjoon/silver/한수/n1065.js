/*
한수

문제
어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 

입력
첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

출력
첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

예제 입력 1 
110

예제 출력 1 
99

예제 입력 2 
1

예제 출력 2 
1

예제 입력 3 
210

예제 출력 3 
105

예제 입력 4 
1000

예제 출력 4 
144

예제 입력 5 
500

예제 출력 5 
119
*/

const fs = require("fs");

const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

function arithmeticalSequence(n) {
  if (n < 100) {
    return true;
  } else if (n < 1000) {
    const number = n % 10;
    const tens = Math.floor(n / 10) % 10;
    const hundreds = Math.floor(n / 100);
    if (number - tens === tens - hundreds) {
      return true;
    } else {
      return false;
    }
  }
}

let count = 0;

for (let i = 1; i <= inputData; i++) {
  if (arithmeticalSequence(i)) {
    count++;
  }
}

console.log(count);
