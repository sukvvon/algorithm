/*
꼬마 정민

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	512 MB	30912	15958	15026	53.019%
문제
꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!

입력
첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.

출력
A+B+C의 값을 출력한다.

예제 입력 1 
77 77 7777

예제 출력 1 
7931

출처
Contest > kriiicon > 제3회 kriiicon ㄲ번

문제를 만든 사람: august14
알고리즘 분류
수학
구현
사칙연산
*/

const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "dev/stdin" : "../../../index.txt"
  )
  .toString();

const [A, B, C] = input.split(" ");

console.log(+A + +B + +C);
