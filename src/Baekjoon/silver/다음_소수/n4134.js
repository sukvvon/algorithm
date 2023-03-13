/*
다음 소수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	4451	1188	856	26.444%

문제
정수 n(0 ≤ n ≤ 4*109)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수 찾는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이 주어진다.

출력
각각의 테스트 케이스에 대해서 n보다 크거나 같은 소수 중 가장 작은 소수를 한 줄에 하나씩 출력한다.

예제 입력 1 
3
6
20
100

예제 출력 1 
7
23
101

출처
Contest > Waterloo's local Programming Contests > 15 July, 2012 B번

문제를 번역한 사람: baekjoon

알고리즘 분류
수학
브루트포스 알고리즘
정수론
소수 판정
*/

const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .split("\n")
  .map((v) => +v);

const N = input.shift();

for (let i = 0; i < N; i++) {
  let cnt = input[i];

  while (true) {
    if (isPrime(cnt)) {
      break;
    }

    cnt++;
  }

  console.log(cnt);
}

function isPrime(n) {
  if (n === 0 || n === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false;
    }
  }

  return true;
}
