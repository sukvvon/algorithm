/*
큰 수 만들기

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	512 MB	5127	1581	1134	30.248%

문제
음이 아닌 정수가 N개 들어있는 리스트가 주어졌을 때, 리스트에 포함된 수를 나열하여 만들 수 있는 가장 큰 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄에는 리스트에 포함된 수가 주어진다. 수는 공백으로 구분되어져 있고, 1,000,000,000보다 작거나 같은 음이 아닌 정수 이다. 0을 제외한 나머지 수는 0으로 시작하지 않으며, 0이 주어지는 경우 0 하나가 주어진다.

출력
리스트에 포함된 수를 나열하여 만들 수 있는 가장 큰 수를 출력한다. 수는 0으로 시작하면 안되며, 0이 정답인 경우 0 하나를 출력해야 한다.

예제 입력 1 
5
3 30 34 5 9

예제 출력 1 
9534330

예제 입력 2 
5
0 0 0 0 1

예제 출력 2 
10000

출처
University > 한양대학교 ERICA 캠퍼스 > 2018 ERICA Software-Up Programming Contest > League A F번

데이터를 추가한 사람: 3juhwan, ahmg1216, dogeee, gaelim, goooora, hyper2012, kdongha1103, lambda, pgggggggggh, rlatpwlsdlek

알고리즘 분류
그리디 알고리즘
정렬
*/

const fs = require("fs");

const [n, input] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  input = input
    .split(" ")
    .sort((a, b) => +(b + a) - +(a + b))
    .join("");

  return !+input ? 0 : input;
}

console.log(solution(input));
