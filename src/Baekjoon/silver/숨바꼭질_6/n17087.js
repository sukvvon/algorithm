/*
숨바꼭질 6

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	512 MB	7998	3957	3172	48.479%

문제
수빈이는 동생 N명과 숨바꼭질을 하고 있다. 수빈이는 현재 점 S에 있고, 동생은 A1, A2, ..., AN에 있다.

수빈이는 걸어서 이동을 할 수 있다. 수빈이의 위치가 X일때 걷는다면 1초 후에 X+D나 X-D로 이동할 수 있다. 수빈이의 위치가 동생이 있는 위치와 같으면, 동생을 찾았다고 한다.

모든 동생을 찾기위해 D의 값을 정하려고 한다. 가능한 D의 최댓값을 구해보자.

입력
첫째 줄에 N(1 ≤ N ≤ 105)과 S(1 ≤ S ≤ 109)가 주어진다. 둘째 줄에 동생의 위치 Ai(1 ≤ Ai ≤ 109)가 주어진다. 동생의 위치는 모두 다르며, 수빈이의 위치와 같지 않다.

출력
가능한 D값의 최댓값을 출력한다.

예제 입력 1 
3 3
1 7 11

예제 출력 1 
2

예제 입력 2 
3 81
33 105 57

예제 출력 2 
24

예제 입력 3 
1 1
1000000000

예제 출력 3 
999999999

출처
문제를 번역한 사람: baekjoon

알고리즘 분류
수학
정수론
유클리드 호제법
*/

const fs = require("fs");

const [ns, location] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution([n, s], location) {
  const answer = [];
  location.push(s);
  location.sort((a, b) => a - b);

  for (let i = 0; i < location.length - 1; i++) {
    answer.push(location[i + 1] - location[i]);
  }

  function gcd(a, b) {
    while (b > 0) {
      r = a % b;
      a = b;
      b = r;
    }

    return a;
  }

  return answer.reduce((acc, cur) => gcd(acc, cur), 0);
}

console.log(solution(ns, location));
