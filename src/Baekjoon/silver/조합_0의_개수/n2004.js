/*
조합 0의 개수

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	128 MB	47375	13329	11002	28.715%

문제
 
$n \choose m$의 끝자리 
$0$의 개수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 
$n$, 
$m$ (
$0 \le m \le n \le 2,000,000,000$, 
$n \ne 0$)이 들어온다.

출력
첫째 줄에 
$n \choose m$의 끝자리 
$0$의 개수를 출력한다.

예제 입력 1 
25 12

예제 출력 1 
2

출처
데이터를 추가한 사람: dcrgkev

알고리즘 분류
수학
정수론
*/

const fs = require("fs");

const [n, m] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .split(" ")
  .map(Number);

function solution(n, m) {
  function getCountPower(n, p) {
    let cnt = 0;

    while (n >= p) {
      cnt += Math.floor(n / p);
      n /= p;
    }

    return cnt;
  }

  return Math.min(
    getCountPower(n, 2) - getCountPower(m, 2) - getCountPower(n - m, 2),
    getCountPower(n, 5) - getCountPower(m, 5) - getCountPower(n - m, 5)
  );
}

console.log(solution(n, m));
