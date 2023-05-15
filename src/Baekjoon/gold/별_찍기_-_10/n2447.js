/*
별 찍기 - 10

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	65698	35741	26689	54.370%

문제
재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다.

크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.

***
* *
***
N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를 들어 크기 27의 패턴은 예제 출력 1과 같다.

입력
첫째 줄에 N이 주어진다. N은 3의 거듭제곱이다. 즉 어떤 정수 k에 대해 N=3k이며, 이때 1 ≤ k < 8이다.

출력
첫째 줄부터 N번째 줄까지 별을 출력한다.

예제 입력 1 
27

예제 출력 1 
***************************
* ** ** ** ** ** ** ** ** *
***************************
***   ******   ******   ***
* *   * ** *   * ** *   * *
***   ******   ******   ***
***************************
* ** ** ** ** ** ** ** ** *
***************************
*********         *********
* ** ** *         * ** ** *
*********         *********
***   ***         ***   ***
* *   * *         * *   * *
***   ***         ***   ***
*********         *********
* ** ** *         * ** ** *
*********         *********
***************************
* ** ** ** ** ** ** ** ** *
***************************
***   ******   ******   ***
* *   * ** *   * ** *   * *
***   ******   ******   ***
***************************
* ** ** ** ** ** ** ** ** *
***************************

출처
문제를 만든 사람: baekjoon
문제를 다시 작성한 사람: jh05013

알고리즘 분류
분할 정복
재귀
*/

const fs = require("fs");

const n = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

// 1
function solution(n) {
  const pattern = "***\n* *\n***";

  function makePattern(depth, pattern, cnt, n) {
    if (3 ** depth === n) {
      return pattern;
    } else {
      const resultPattern = [];
      const midPattern = [];
      const edgePattern = pattern.split("\n").map((v) => v.repeat(3));

      pattern.split("\n").forEach((v) => {
        midPattern.push(v + " ".repeat(cnt) + v);
      });

      resultPattern.push(...edgePattern);
      resultPattern.push(...midPattern);
      resultPattern.push(...edgePattern);

      return makePattern(depth + 1, resultPattern.join("\n"), cnt * 3, n);
    }
  }

  return makePattern(1, pattern, 3, n);
}

// 2
function solution(n) {
  let answer = "";

  function starOrBlank(i, j) {
    if (i % 3 === 1 && j % 3 === 1) {
      answer += " ";
    } else {
      if (!~~(i / 3) && !~~(j / 3)) {
        answer += "*";
      } else {
        starOrBlank(~~(i / 3), ~~(j / 3));
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      starOrBlank(i, j);

      if (j === n - 1 && i < n - 1) {
        answer += "\n";
      }
    }
  }

  return answer;
}

console.log(solution(n));
