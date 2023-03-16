/*
네 번째 점

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	40187	29140	26023	73.474%

문제
세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

입력
세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

출력
직사각형의 네 번째 점의 좌표를 출력한다.

예제 입력 1 
5 5
5 7
7 5

예제 출력 1 
7 7

예제 입력 2 
30 20
10 10
10 20

예제 출력 2 
30 10

출처
Contest > Croatian Open Competition in Informatics > COCI 2007/2008 > Contest #1 1번

문제를 번역한 사람: baekjoon
문제의 오타를 찾은 사람: onjo0127
데이터를 추가한 사람: pichulia

알고리즘 분류
구현
기하학
*/

const fs = require("fs");

const coordinates = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(coordinates) {
  const xs = {};
  const ys = {};

  for (let i = 0; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];

    xs[x] = (xs[x] || 0) + 1;
    ys[y] = (ys[y] || 0) + 1;
  }

  return [
    Object.keys(xs).filter((x) => xs[x] === 1)[0],
    Object.keys(ys).filter((y) => ys[y] === 1)[0],
  ].join(" ");
}

console.log(solution(coordinates));
