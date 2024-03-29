/*
숫자 카드 2

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	100862	37845	27104	36.539%

문제
숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 넷째 줄에는 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

출력
첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지를 공백으로 구분해 출력한다.

예제 입력 1 
10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10

예제 출력 1 
3 0 0 1 2 0 0 2

출처
문제를 만든 사람: baekjoon
문제의 오타를 찾은 사람: cko301, mwy3055, wkd48632
데이터를 추가한 사람: emppu, jh05013

알고리즘 분류
자료 구조
정렬
이분 탐색
해시를 사용한 집합과 맵
*/

const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const test = input.shift().split(" ");
const M = +input.shift();
const hashV = input.shift().split(" ");
const hash = {};
const answer = [];

for (const v of test) {
  hash[v] = (hash[v] || 0) + 1;
}

for (const v of hashV) {
  if (hash[v]) {
    answer.push(hash[v]);
  } else {
    answer.push(0);
  }
}

console.log(answer.join(" "));
