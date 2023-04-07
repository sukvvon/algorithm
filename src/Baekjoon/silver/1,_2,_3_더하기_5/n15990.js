/*
1, 2, 3 더하기 5

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초 (추가 시간 없음)	512 MB	23129	7844	5470	30.953%

문제
정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 3가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다. 단, 같은 수를 두 번 이상 연속해서 사용하면 안 된다.

1+2+1
1+3
3+1
정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다. n은 양수이며 100,000보다 작거나 같다.

출력
각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 1,000,000,009로 나눈 나머지를 출력한다.

예제 입력 1 
3
4
7
10

예제 출력 1 
3
9
27

출처
문제를 만든 사람: baekjoon

알고리즘 분류
다이나믹 프로그래밍
*/

const fs = require("fs");

const [n, ...cards] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v) => (+v ? +v : v.split(" ").map(Number)));

function solution(n, cards) {
  const max = 100000;
  const mod = 1000000009;

  const answer = [];
  const memo = new Array(max + 1).fill(null).map(() => new Array(3).fill(0));
  memo[1] = [1, 0, 0];
  memo[2] = [0, 1, 0];
  memo[3] = [1, 1, 1];

  for (let i = 4; i <= max; i++) {
    memo[i][0] = (memo[i - 1][1] + memo[i - 1][2]) % mod;
    memo[i][1] = (memo[i - 2][0] + memo[i - 2][2]) % mod;
    memo[i][2] = (memo[i - 3][0] + memo[i - 3][1]) % mod;
  }

  for (let i = 0; i < n; i++) {
    answer.push(memo[cards[i]].reduce((acc, cur) => acc + cur, 0) % mod);
  }

  return answer.join("\n");
}

console.log(solution(n, cards));
