/*
이항 계수 1

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	50305	32577	28124	64.657%

문제
자연수 
\(N\)과 정수 
\(K\)가 주어졌을 때 이항 계수 
\(\binom{N}{K}\)를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 
\(N\)과 
\(K\)가 주어진다. (1 ≤ 
\(N\) ≤ 10, 0 ≤ 
\(K\) ≤ 
\(N\))

출력

\(\binom{N}{K}\)를 출력한다.

예제 입력 1 
5 2

예제 출력 1 
10

출처
문제를 만든 사람: baekjoon

알고리즘 분류
수학
구현
조합론
*/

const fs = require("fs");

const [n, k] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(n, k) {
  return (
    Array.from({ length: k }, (_, i) => n - i).reduce(
      (acc, cur) => acc * cur,
      1
    ) /
    Array.from({ length: k }, (_, i) => i + 1).reduce(
      (acc, cur) => acc * cur,
      1
    )
  );
}

console.log(solution(n, k));
