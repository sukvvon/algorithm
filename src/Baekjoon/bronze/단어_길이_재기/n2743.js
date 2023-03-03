/*
단어 길이 재기

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	31193	25545	23062	83.241%

문제

알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.

입력

첫째 줄에 영어 소문자와 대문자로만 이루어진 단어가 주어진다. 단어의 길이는 최대 100이다.

출력

첫째 줄에 입력으로 주어진 단어의 길이를 출력한다.

예제 입력 1 
pulljima

예제 출력 1 
8

출처

데이터를 추가한 사람: 79brue
문제를 만든 사람: baekjoon

알고리즘 분류

구현
문자열
*/

const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim();

console.log(input.length);
