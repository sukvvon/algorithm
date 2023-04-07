/*
쉬운 계단 수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	124588	39620	28644	30.058%

문제
45656이란 수를 보자.

이 수는 인접한 모든 자리의 차이가 1이다. 이런 수를 계단 수라고 한다.

N이 주어질 때, 길이가 N인 계단 수가 총 몇 개 있는지 구해보자. 0으로 시작하는 수는 계단수가 아니다.

입력
첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 100보다 작거나 같은 자연수이다.

출력
첫째 줄에 정답을 1,000,000,000으로 나눈 나머지를 출력한다.

예제 입력 1 
1

예제 출력 1 
9

예제 입력 2 
2

예제 출력 2 
17

출처
문제를 만든 사람: baekjoon

알고리즘 분류
다이나믹 프로그래밍
*/

const fs = require("fs");

const n = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

// 1
function solution(n) {
  const memo = new Array(n + 1).fill(null).map(() => new Array(10).fill(0));
  memo[1] = [0n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n];
  memo[2] = [1n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 2n, 1n];

  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < 10; j++) {
      if (!j) {
        memo[i][j] = memo[i - 1][j + 1];
        continue;
      }

      if (j === 9) {
        memo[i][j] = memo[i - 1][j - 1];
        continue;
      }

      memo[i][j] = memo[i - 1][j - 1] + memo[i - 1][j + 1];
    }
  }

  return +memo[n]
    .reduce((acc, cur) => acc + cur, 0n)
    .toString()
    .slice(-9);
}

// 2
function solution(n) {
  const mod = 1000000000;

  const memo = new Array(n + 1).fill(null).map(() => new Array(10).fill(0));
  memo[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  memo[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < 10; j++) {
      if (!j) {
        memo[i][j] = memo[i - 1][j + 1] % mod;
        continue;
      }

      if (j === 9) {
        memo[i][j] = memo[i - 1][j - 1] % mod;
        continue;
      }

      memo[i][j] = (memo[i - 1][j - 1] + memo[i - 1][j + 1]) % mod;
    }
  }

  return memo[n].reduce((acc, cur) => acc + cur, 0) % mod;
}

console.log(solution(n));
