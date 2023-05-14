/*
회사에 있는 사람

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	28714	11586	8414	41.397%

문제
상근이는 세계적인 소프트웨어 회사 기글에서 일한다. 이 회사의 가장 큰 특징은 자유로운 출퇴근 시간이다. 따라서, 직원들은 반드시 9시부터 6시까지 회사에 있지 않아도 된다.

각 직원은 자기가 원할 때 출근할 수 있고, 아무때나 퇴근할 수 있다.

상근이는 모든 사람의 출입카드 시스템의 로그를 가지고 있다. 이 로그는 어떤 사람이 회사에 들어왔는지, 나갔는지가 기록되어져 있다. 로그가 주어졌을 때, 현재 회사에 있는 모든 사람을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 로그에 기록된 출입 기록의 수 n이 주어진다. (2 ≤ n ≤ 106) 다음 n개의 줄에는 출입 기록이 순서대로 주어지며, 각 사람의 이름이 주어지고 "enter"나 "leave"가 주어진다. "enter"인 경우는 출근, "leave"인 경우는 퇴근이다.

회사에는 동명이인이 없으며, 대소문자가 다른 경우에는 다른 이름이다. 사람들의 이름은 알파벳 대소문자로 구성된 5글자 이하의 문자열이다.

출력
현재 회사에 있는 사람의 이름을 사전 순의 역순으로 한 줄에 한 명씩 출력한다.

예제 입력 1 
4
Baha enter
Askar enter
Baha leave
Artem enter

예제 출력 1 
Askar
Artem

출처
Contest > KBTU Open > KBTU Open 2008 E번

문제를 번역한 사람: baekjoon
빠진 조건을 찾은 사람: haja, lyzqm
데이터를 추가한 사람: jh05013

알고리즘 분류
자료 구조
해시를 사용한 집합과 맵
*/

const fs = require("fs");

const [n, ...logs] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => (!i ? +v : v.split(" ")));

// 1
function solution(n, logs) {
  const set = new Set();

  for (let i = 0; i < n; i++) {
    const [name, behave] = logs[i];

    if (behave === "enter") {
      set.add(name);
    } else {
      set.delete(name);
    }
  }

  return [...set].sort((a, b) => (a < b ? 1 : a > b ? -1 : 0)).join("\n");
}

// 2
function solution(n, logs) {
  const hash = {};

  for (let i = 0; i < n; i++) {
    const [name, behave] = logs[i];

    if (behave === "enter") {
      hash[name] = 1;
    } else {
      delete hash[name];
    }
  }

  return Object.keys(hash)
    .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
    .join("\n");
}

console.log(solution(n, logs));
