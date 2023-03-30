/*
네 수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	25543	11326	9818	44.538%

문제
네 자연수 A, B, C, D가 주어진다. 이때, A와 B를 붙인 수와 C와 D를 붙인 수의 합을 구하는 프로그램을 작성하시오.

두 수 A와 B를 합치는 것은 A의 뒤에 B를 붙이는 것을 의미한다. 즉, 20과 30을 붙이면 2030이 된다.

입력
첫째 줄에 네 자연수 A, B, C, D가 주어진다. (1 ≤ A, B, C, D ≤ 1,000,000)

출력
A와 B를 붙인 수와 C와 D를 붙인 수의 합을 출력한다.

예제 입력 1 
10 20 30 40

예제 출력 1 
4060

출처
문제를 만든 사람: baekjoon
문제의 오타를 찾은 사람: wurikiji

알고리즘 분류
수학
구현
문자열
사칙연산
*/

const fs = require("fs");

const [a, b, c, d] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split(" ");

function solution(a, b, c, d) {
  return +(a + b) + +(c + d);
}

console.log(solution(a, b, c, d));
