/*
문자열 분석

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	27504	11184	9226	41.189%

문제
문자열 N개가 주어진다. 이때, 문자열에 포함되어 있는 소문자, 대문자, 숫자, 공백의 개수를 구하는 프로그램을 작성하시오.

각 문자열은 알파벳 소문자, 대문자, 숫자, 공백으로만 이루어져 있다.

입력
첫째 줄부터 N번째 줄까지 문자열이 주어진다. (1 ≤ N ≤ 100) 문자열의 길이는 100을 넘지 않는다.

출력
첫째 줄부터 N번째 줄까지 각각의 문자열에 대해서 소문자, 대문자, 숫자, 공백의 개수를 공백으로 구분해 출력한다.

예제 입력 1 
This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8

예제 출력 1 
10 2 0 2
0 10 1 8
5 6 0 16
0 8 9 0

출처
문제를 만든 사람: baekjoon

알고리즘 분류
구현
문자열
*/

const fs = require("fs");

const sentences = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .split("\n");

function solution(sentences) {
  const result = [];

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];

    if (sentence === "") {
      continue;
    }

    result.push(
      [
        (sentence.match(/[a-z]/g) || []).length,
        (sentence.match(/[A-Z]/g) || []).length,
        (sentence.match(/[0-9]/g) || []).length,
        (sentence.match(/\ /g) || []).length,
      ].join(" ")
    );
  }

  return result.join("\n");
}

console.log(solution(sentences));
