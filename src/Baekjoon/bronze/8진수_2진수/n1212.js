/*
8진수 2진수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	40150	13446	11147	35.734%

문제
8진수가 주어졌을 때, 2진수로 변환하는 프로그램을 작성하시오.

입력
첫째 줄에 8진수가 주어진다. 주어지는 수의 길이는 333,334을 넘지 않는다.

출력
첫째 줄에 주어진 수를 2진수로 변환하여 출력한다. 수가 0인 경우를 제외하고는 반드시 1로 시작해야 한다.

예제 입력 1 
314

예제 출력 1 
11001100

출처
문제를 만든 사람: author5
데이터를 추가한 사람: occidere

비슷한 문제
1373번. 2진수 8진수

알고리즘 분류
수학
구현
문자열
*/

const fs = require("fs");

const n = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim();

// 1
function solution(n) {
  const hash = {
    0: "000",
    1: "001",
    2: "010",
    3: "011",
    4: "100",
    5: "101",
    6: "110",
    7: "111",
  };

  return BigInt([...n].map((v) => hash[v]).join("")).toString();
}

// 2
function solution(n) {
  let answer = "";

  for (let i = 0; i < n.length; i++) {
    answer += !i ? (+n[i]).toString(2) : (+n[i]).toString(2).padStart(3, 0);
  }

  return answer;
}

console.log(solution(n));
