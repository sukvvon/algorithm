/*
-2진수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	128 MB	9765	4555	3735	45.677%

문제
-2진법은 부호 없는 2진수로 표현이 된다. 2진법에서는 20, 21, 22, 23이 표현 되지만 -2진법에서는 (-2)0 = 1, (-2)1 = -2, (-2)2 = 4, (-2)3 = -8을 표현한다. 10진수로 1부터 표현하자면 1, 110, 111, 100, 101, 11010, 11011, 11000, 11001 등이다.

10진법의 수를 입력 받아서 -2진수를 출력하는 프로그램을 작성하시오.

입력
첫 줄에 10진법으로 표현된 수 N이 주어진다.

출력
-2진법 수를 출력한다.

제한
-2,000,000,000 ≤ N ≤ 2,000,000,000

예제 입력 1 
-13

예제 출력 1 
110111

출처
Olympiad > USA Computing Olympiad > 2005-2006 Season > USACO February 2006 Contest > Bronze ?번

알고리즘 분류
수학
정수론
*/

const fs = require("fs");

const n = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

function solution(n) {
  let answer = "";

  if (!n) {
    return "0";
  }

  if (n === 1) {
    return "1";
  }

  while (true) {
    answer = n - Math.ceil(n / -2) * -2 + answer;
    n = Math.ceil(n / -2);

    if (n === 1) {
      answer = n + answer;
      break;
    }
  }

  return answer;
}

console.log(solution(n));
