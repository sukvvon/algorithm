/*
약수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	512 MB	56157	30984	26888	55.417%

문제
양수 A가 N의 진짜 약수가 되려면, N이 A의 배수이고, A가 1과 N이 아니어야 한다. 어떤 수 N의 진짜 약수가 모두 주어질 때, N을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N의 진짜 약수의 개수가 주어진다. 이 개수는 50보다 작거나 같은 자연수이다. 둘째 줄에는 N의 진짜 약수가 주어진다. 1,000,000보다 작거나 같고, 2보다 크거나 같은 자연수이고, 중복되지 않는다.

출력
첫째 줄에 N을 출력한다. N은 항상 32비트 부호있는 정수로 표현할 수 있다.

예제 입력 1 
2
4 2

예제 출력 1 
8

예제 입력 2 
1
2

예제 출력 2 
4

예제 입력 3 
6
3 4 2 12 6 8

예제 출력 3 
24

예제 입력 4 
14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596

예제 출력 4 
185192

출처
문제를 번역한 사람: baekjoon
빠진 조건을 찾은 사람: doju
어색한 표현을 찾은 사람: jh05013

알고리즘 분류
수학
정수론
*/

const fs = require("fs");

const [n, divisors] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => (!i ? +v : v.split(" ").map(Number)));

// 1
function solution(n, divisors) {
  const sortedDivisors = divisors.sort((a, b) => a - b);
  const halfIdx = ~~(n / 2);

  return !(n % 2)
    ? sortedDivisors[halfIdx - 1] * sortedDivisors[halfIdx]
    : sortedDivisors[halfIdx] ** 2;
}

// 2
function solution(n, divisors) {
  return Math.min(...divisors) * Math.max(...divisors);
}

console.log(solution(n, divisors));
