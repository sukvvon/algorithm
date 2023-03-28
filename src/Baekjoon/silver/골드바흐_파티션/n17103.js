/*
골드바흐 파티션

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
0.5 초	512 MB	10706	4358	3242	38.994%

문제
골드바흐의 추측: 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
짝수 N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라고 한다. 짝수 N이 주어졌을 때, 골드바흐 파티션의 개수를 구해보자. 두 소수의 순서만 다른 것은 같은 파티션이다.

입력
첫째 줄에 테스트 케이스의 개수 T (1 ≤ T ≤ 100)가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 N은 짝수이고, 2 < N ≤ 1,000,000을 만족한다.

출력
각각의 테스트 케이스마다 골드바흐 파티션의 수를 출력한다.

예제 입력 1 
5
6
8
10
12
100

예제 출력 1 
1
1
2
1
6

출처
문제를 만든 사람: baekjoon
데이터를 추가한 사람: djm03178
문제의 오타를 찾은 사람: jh05013

알고리즘 분류
수학
정수론
소수 판정
에라토스테네스의 체
*/

const fs = require("fs");

const [t, ...input] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

function solution(t, input) {
  const answer = [];
  const max = Math.max(...input);

  const arr = new Array(max + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= max; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let i = 0; i < t; i++) {
    const n = input[i];
    let cnt = 0;

    for (let j = 2; j < n; j++) {
      if (arr[n - j] && arr[j]) {
        cnt++;
      }
    }

    answer.push(Math.ceil(cnt / 2));
  }

  return answer.join("\n");
}

console.log(solution(t, input));
