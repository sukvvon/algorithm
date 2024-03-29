/*
오큰수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	512 MB	60257	20384	14607	32.743%

문제
크기가 N인 수열 A = A1, A2, ..., AN이 있다. 수열의 각 원소 Ai에 대해서 오큰수 NGE(i)를 구하려고 한다. Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다. 그러한 수가 없는 경우에 오큰수는 -1이다.

예를 들어, A = [3, 5, 2, 7]인 경우 NGE(1) = 5, NGE(2) = 7, NGE(3) = 7, NGE(4) = -1이다. A = [9, 5, 4, 8]인 경우에는 NGE(1) = -1, NGE(2) = 8, NGE(3) = 8, NGE(4) = -1이다.

입력
첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에 수열 A의 원소 A1, A2, ..., AN (1 ≤ Ai ≤ 1,000,000)이 주어진다.

출력
총 N개의 수 NGE(1), NGE(2), ..., NGE(N)을 공백으로 구분해 출력한다.

예제 입력 1 
4
3 5 2 7

예제 출력 1 
5 7 7 -1

예제 입력 2 
4
9 5 4 8

예제 출력 2 
-1 8 8 -1

출처
문제를 만든 사람: baekjoon
데이터를 추가한 사람: rhdqor213

알고리즘 분류
자료 구조
스택
*/

const fs = require("fs");

const [n, arr] = fs
  .readFileSync(
    process.platform === "linux" ? "dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => (i ? v.split(" ").map(Number) : +v));

function solution(n, arr) {
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (arr[stack.at(-1)] < arr[i]) {
      result[stack.pop()] = arr[i];
    }

    stack.push(i);
  }

  return result.join(" ");
}

console.log(solution(n, arr));
