/*
2×n 타일링 2

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	60313	36077	28887	59.218%

문제
2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

아래 그림은 2×17 직사각형을 채운 한가지 예이다.



입력
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

출력
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

예제 입력 1 
2

예제 출력 1 
3

예제 입력 2 
8

예제 출력 2 
171

예제 입력 3 
12

예제 출력 3 
2731

출처
문제를 만든 사람: baekjoon

알고리즘 분류
다이나믹 프로그래밍
*/

const fs = require("fs");

const n = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

function solution(n) {
  const memo = new Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 3;

  for (let i = 3; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2] * 2) % 10007;
  }

  return memo[n];
}

console.log(solution(n));
