/*
2진수 8진수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	28262	11086	9129	40.979%

문제
2진수가 주어졌을 때, 8진수로 변환하는 프로그램을 작성하시오.

입력
첫째 줄에 2진수가 주어진다. 주어지는 수의 길이는 1,000,000을 넘지 않는다.

출력
첫째 줄에 주어진 수를 8진수로 변환하여 출력한다.

예제 입력 1 
11001100

예제 출력 1 
314

출처
문제를 만든 사람: author5
데이터를 추가한 사람: sheepbomb

비슷한 문제
1212번. 8진수 2진수

알고리즘 분류
수학
문자열
*/

const fs = require("fs");

const n = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim();

// 1
function solution(n) {
  const arr = [...n]
    .reverse()
    .join("")
    .match(/\d{1,3}/g);

  return arr
    .map((v) =>
      v
        .split("")
        .map(Number)
        .reduce((acc, cur, idx) => acc + cur * 2 ** idx, 0)
    )
    .reverse()
    .join("");
}

// 2
function solution(n) {
  const arr = [...n].reverse().map(Number);
  const answer = [];
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!(i % 3) && i >= 3) {
      answer.push(result);
      result = 0;
    }

    result += 2 ** (i % 3) * arr[i];
  }

  answer.push(result);

  return answer.reverse().join("");
}

console.log(solution(n));
