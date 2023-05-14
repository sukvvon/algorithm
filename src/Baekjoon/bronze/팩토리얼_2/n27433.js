/*
팩토리얼 2

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	1024 MB	5908	2896	2670	52.373%

문제
0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 N(0 ≤ N ≤ 20)이 주어진다.

출력
첫째 줄에 N!을 출력한다.

예제 입력 1 
10

예제 출력 1 
3628800

예제 입력 2 
0

예제 출력 2 
1

알고리즘 분류
수학
사칙연산
*/

const fs = require("fs");

const n = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

function solution(n) {
  function pactorial(n) {
    if (!n) {
      return 1;
    }

    return n * pactorial(n - 1);
  }

  return pactorial(n);
}

console.log(solution(n));
