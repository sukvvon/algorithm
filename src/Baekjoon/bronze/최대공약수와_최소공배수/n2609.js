/*
최대공약수와 최소공배수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	89612	51773	41991	58.113%

문제
두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

출력
첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

예제 입력 1 
24 18

예제 출력 1 
6
72

출처
Olympiad > 한국정보올림피아드 > 한국정보올림피아드시․도지역본선 > 지역본선 2004 > 중등부 1번

Olympiad > 한국정보올림피아드 > 한국정보올림피아드시․도지역본선 > 지역본선 2004 > 고등부 1번

데이터를 추가한 사람: circlecho, jsh587

알고리즘 분류
수학
정수론
유클리드 호제법
*/

const fs = require("fs");

const [a, b] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split(" ");

function solution(a, b) {
  const answer = [];

  function gcd(a, b) {
    while (b > 0) {
      r = a % b;
      a = b;
      b = r;
    }

    return a;
  }

  answer.push(gcd(a, b));
  answer.push((a * b) / gcd(a, b));

  return answer.join("\n");
}

console.log(solution(a, b));
