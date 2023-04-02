/*
GCD 합

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	31188	12547	10271	41.077%

문제
양의 정수 n개가 주어졌을 때, 가능한 모든 쌍의 GCD의 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 t (1 ≤ t ≤ 100)이 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있다. 각 테스트 케이스는 수의 개수 n (1 < n ≤ 100)가 주어지고, 다음에는 n개의 수가 주어진다. 입력으로 주어지는 수는 1,000,000을 넘지 않는다.

출력
각 테스트 케이스마다 가능한 모든 쌍의 GCD의 합을 출력한다.

예제 입력 1 
3
4 10 20 30 40
3 7 5 12
3 125 15 25

예제 출력 1 
70
3
35

출처
ICPC > Regionals > Asia Pacific > Thailand > 2013 ACM-ICPC Asia Phuket Regional Programming Contest PE번

어색한 표현을 찾은 사람: alkyne
문제를 번역한 사람: baekjoon
잘못된 데이터를 찾은 사람: tncks0121
데이터를 추가한 사람: topology

알고리즘 분류
수학
정수론
유클리드 호제법
*/

const fs = require("fs");

const [t, ...cases] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .split("\n")
  .map((v) => (+v ? +v : v));

function solution(t, cases) {
  const answer = [];

  function gcd(a, b) {
    while (b > 0) {
      r = a % b;
      a = b;
      b = r;
    }

    return a;
  }

  for (let i = 0; i < t; i++) {
    const result = [];
    const [len, ...nums] = cases[i].split(" ").map(Number);

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        result.push(gcd(nums[i], nums[j]));
      }
    }

    answer.push(result.reduce((acc, cur) => acc + cur, 0));
  }

  return answer.join("\n");
}

console.log(solution(t, cases));
