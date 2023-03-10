/*
듣보잡 성공

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	256 MB	73434	30890	23751	40.356%

문제
김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다. 이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다.

듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.

출력
듣보잡의 수와 그 명단을 사전순으로 출력한다.

예제 입력 1 
3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton

예제 출력 1 
2
baesangwook
ohhenrie

출처
문제를 만든 사람: author5

알고리즘 분류
자료 구조
문자열
정렬
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

input.shift();

const hash = {};
const answer = [];

input.forEach((v) => {
  hash[v] = (hash[v] || 0) + 1;
});

for (const key in hash) {
  if (hash[key] === 2) {
    answer.push(key);
  }
}

console.log(answer.length);
for (const v of answer.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))) {
  console.log(v);
}
