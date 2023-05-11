/*
타일 채우기

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	128 MB	46013	16525	13094	35.817%

문제
3×N 크기의 벽을 2×1, 1×2 크기의 타일로 채우는 경우의 수를 구해보자.

입력
첫째 줄에 N(1 ≤ N ≤ 30)이 주어진다.

출력
첫째 줄에 경우의 수를 출력한다.

예제 입력 1 
2

예제 출력 1 
3

힌트
아래 그림은 3×12 벽을 타일로 채운 예시이다.



출처


Contest > Waterloo's local Programming Contests > 24 September, 2005 D번

문제의 오타를 찾은 사람: imgosari

알고리즘 분류
다이나믹 프로그래밍
*/

const fs = require("fs");
const n = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

function solution(n) {
  if (n % 2) {
    return 0;
  }

  const memo = new Array(n + 1).fill(0);
  memo[0] = 1;
  memo[2] = 3;

  for (let i = 4; i <= n; i += 2) {
    memo[i] = memo[i - 2] * memo[2];

    for (let j = 4; j <= i; j += 2) {
      memo[i] += memo[i - j] * (memo[2] - 1);
    }
  }

  return memo[n];
}

console.log(solution(n));
