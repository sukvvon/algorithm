/*
오르막 수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	47049	23005	17798	47.720%

문제
오르막 수는 수의 자리가 오름차순을 이루는 수를 말한다. 이때, 인접한 수가 같아도 오름차순으로 친다.

예를 들어, 2234와 3678, 11119는 오르막 수이지만, 2232, 3676, 91111은 오르막 수가 아니다.

수의 길이 N이 주어졌을 때, 오르막 수의 개수를 구하는 프로그램을 작성하시오. 수는 0으로 시작할 수 있다.

입력
첫째 줄에 N (1 ≤ N ≤ 1,000)이 주어진다.

출력
첫째 줄에 길이가 N인 오르막 수의 개수를 10,007로 나눈 나머지를 출력한다.

예제 입력 1 
1

예제 출력 1 
10

예제 입력 2 
2

예제 출력 2 
55

예제 입력 3 
3

예제 출력 3 
220

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
  const memo = new Array(n).fill(null).map(() => new Array(10).fill(1));

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < 10; j++) {
      memo[i][j] = (memo[i - 1][j] + memo[i][j - 1]) % 10007;
    }
  }

  return memo[n - 1].reduce((acc, cur) => acc + cur, 0) % 10007;
}

console.log(solution(n));
