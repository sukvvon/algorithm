/*
자연수 뒤집어 배열로 만들기

문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.

입출력 예
n	return
12345	[5,4,3,2,1]
*/

// 1
// use for loop
function solution(n) {
  let answer = [];

  for (let i = (n + "").length - 1; i >= 0; i--) {
    answer.push(+(n + "")[i]);
  }

  return answer;
}

// 2
// use split()
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((value) => +value);
}

// 3
// use Spread syntax
function solution(n) {
  return [...(n + "")].reverse().map((value) => +value);
}

// 4
// use Array.from
function solution(n) {
  return Array.from(n + "")
    .reverse()
    .map((value) => +value);
}
