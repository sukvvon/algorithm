/*
1, 2, 3 더하기 3

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초 (추가 시간 없음)	512 MB	25829	9437	7185	34.868%

문제
정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.

1+1+1+1
1+1+2
1+2+1
2+1+1
2+2
1+3
3+1

정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다. n은 양수이며 1,000,000보다 작거나 같다.

출력
각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 1,000,000,009로 나눈 나머지를 출력한다.

예제 입력 1 
3
4
7
10

예제 출력 1 
7
44
274

출처
문제를 만든 사람: baekjoon
어색한 표현을 찾은 사람: game9777

알고리즘 분류
다이나믹 프로그래밍
*/

const fs = require("fs");

const [t, ...ns] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(t, ns) {
  const MOD = 1000000009;
  const max = Math.max(...ns);
  const memo = [0, 1, 2, 4];

  for (let i = 4; i <= max; i++) {
    memo[i] = (memo[i - 3] + memo[i - 2] + memo[i - 1]) % MOD;
  }

  return ns.map((n) => memo[n]).join("\n");
}

console.log(solution(t, ns));
