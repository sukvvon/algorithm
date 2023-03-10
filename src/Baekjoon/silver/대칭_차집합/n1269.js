/*
대칭 차집합 성공

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	256 MB	18054	11268	9328	63.155%

문제
자연수를 원소로 갖는 공집합이 아닌 두 집합 A와 B가 있다. 이때, 두 집합의 대칭 차집합의 원소의 개수를 출력하는 프로그램을 작성하시오. 두 집합 A와 B가 있을 때, (A-B)와 (B-A)의 합집합을 A와 B의 대칭 차집합이라고 한다.

예를 들어, A = { 1, 2, 4 } 이고, B = { 2, 3, 4, 5, 6 } 라고 할 때,  A-B = { 1 } 이고, B-A = { 3, 5, 6 } 이므로, 대칭 차집합의 원소의 개수는 1 + 3 = 4개이다.

입력
첫째 줄에 집합 A의 원소의 개수와 집합 B의 원소의 개수가 빈 칸을 사이에 두고 주어진다. 둘째 줄에는 집합 A의 모든 원소가, 셋째 줄에는 집합 B의 모든 원소가 빈 칸을 사이에 두고 각각 주어진다. 각 집합의 원소의 개수는 200,000을 넘지 않으며, 모든 원소의 값은 100,000,000을 넘지 않는다.

출력
첫째 줄에 대칭 차집합의 원소의 개수를 출력한다.

예제 입력 1 
3 5
1 2 4
2 3 4 5 6

예제 출력 1 
4

출처
문제를 만든 사람: author5

알고리즘 분류
자료 구조
해시를 사용한 집합과 맵
트리를 사용한 집합과 맵
*/

const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.shift();
const A = input.shift().split(" ");
const B = input.shift().split(" ");
const hash = {};
const answer = [];

for (const v of A) {
  hash[v] = (hash[v] || 0) + 1;
}

for (const v of B) {
  hash[v] = (hash[v] || 0) + 1;
}

for (const key in hash) {
  if (hash[key] === 2) {
    answer.push(key);
  }
}

console.log(A.length - answer.length + B.length - answer.length);
