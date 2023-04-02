/*
팩토리얼 0의 개수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	128 MB	59011	28420	23543	47.904%

문제
N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N이 주어진다. (0 ≤ N ≤ 500)

출력
첫째 줄에 구한 0의 개수를 출력한다.

예제 입력 1 
10

예제 출력 1 
2

예제 입력 2 
3

예제 출력 2 
0

출처
데이터를 추가한 사람: 111111111111, his130
문제를 만든 사람: author6

알고리즘 분류
수학
*/

const fs = require("fs");

const n = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

function solution(n) {
  let fac = 1n;

  for (let i = 1n; i <= BigInt(n); i++) {
    fac *= i;
  }

  fac = fac.toString();

  for (let i = 1; i <= fac.length; i++) {
    if (+fac.at(-i)) {
      return i - 1;
    }
  }
}

console.log(solution(n));
