/*
일곱 난쟁이

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	128 MB	115794	47677	34044	41.913%

문제
왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.

아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.

아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

입력
아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

출력
일곱 난쟁이의 키를 오름차순으로 출력한다. 일곱 난쟁이를 찾을 수 없는 경우는 없다.

예제 입력 1 
20
7
23
19
10
15
25
8
13

예제 출력 1 
7
8
10
13
19
20
23

출처
Olympiad > 한국정보올림피아드 > 한국정보올림피아드시․도지역본선 > 지역본선 2004 > 초등부 1번

데이터를 추가한 사람: ung27540421
어색한 표현을 찾은 사람: upple1

알고리즘 분류
브루트포스 알고리즘
정렬
*/

const fs = require("fs");
const heights = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(heights) {
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (
        100 + heights[i] + heights[j] ===
        heights.reduce((acc, cur) => acc + cur, 0)
      ) {
        heights = heights.filter(
          (height) => ![heights[i], heights[j]].includes(height)
        );
        break;
      }
    }
  }

  return heights.sort((a, b) => a - b).join("\n");
}

console.log(solution(heights));
