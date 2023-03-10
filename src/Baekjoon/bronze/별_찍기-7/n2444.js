/*
별 찍기 - 7

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	34857	23855	21481	69.773%

문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

예제 입력 1 
5

예제 출력 1 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

출처
문제를 만든 사람: baekjoon

알고리즘 분류
구현
*/

const fs = require("fs");

const input = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

let index = 0;
let result = "";

for (let i = 1; i < (2 * input - 1) * 2; i += 2) {
  let answer = "";
  let star = "";

  if (i > 2 * input - 1) {
    index += 4;
  }

  for (let j = 0; j < Math.abs((2 * input - 1 - i) / 2); j++) {
    answer += " ";
  }

  for (let k = 0; k < i - index; k++) {
    star += "*";
  }

  result += answer + star + "\n";
}

console.log(result.trimEnd());
