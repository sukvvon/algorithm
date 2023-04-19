/*
합분해

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	128 MB	38907	17361	12726	43.083%

문제
0부터 N까지의 정수 K개를 더해서 그 합이 N이 되는 경우의 수를 구하는 프로그램을 작성하시오.

덧셈의 순서가 바뀐 경우는 다른 경우로 센다(1+2와 2+1은 서로 다른 경우). 또한 한 개의 수를 여러 번 쓸 수도 있다.

입력
첫째 줄에 두 정수 N(1 ≤ N ≤ 200), K(1 ≤ K ≤ 200)가 주어진다.

출력
첫째 줄에 답을 1,000,000,000으로 나눈 나머지를 출력한다.

예제 입력 1 
20 2

예제 출력 1 
21

예제 입력 2 
6 4

예제 출력 2 
84

출처
잘못된 데이터를 찾은 사람: tncks0121

알고리즘 분류
수학
다이나믹 프로그래밍
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
  const MOD = 1000000000;
  const memo = new Array(k + 1)
    .fill(null)
    .map(() => Array.from({ length: n + 1 }).fill(1));

  for (let i = 2; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      memo[i][j] = (memo[i][j - 1] + memo[i - 1][j]) % MOD;
    }
  }

  return memo[k][n] % MOD;
}

console.log(solution(n, k));
