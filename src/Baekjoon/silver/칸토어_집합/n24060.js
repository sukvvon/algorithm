/*
칸토어 집합

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	4720	2141	1756	44.865%

문제
칸토어 집합은 0과 1사이의 실수로 이루어진 집합으로, 구간 [0, 1]에서 시작해서 각 구간을 3등분하여 가운데 구간을 반복적으로 제외하는 방식으로 만든다.

전체 집합이 유한이라고 가정하고, 다음과 같은 과정을 통해서 칸토어 집합의 근사를 만들어보자.

1. -가 3N개 있는 문자열에서 시작한다.

2. 문자열을 3등분 한 뒤, 가운데 문자열을 공백으로 바꾼다. 이렇게 하면, 선(문자열) 2개가 남는다.

3. 이제 각 선(문자열)을 3등분 하고, 가운데 문자열을 공백으로 바꾼다. 이 과정은 모든 선의 길이가 1일때 까지 계속 한다.

예를 들어, N=3인 경우, 길이가 27인 문자열로 시작한다.

---------------------------
여기서 가운데 문자열을 공백으로 바꾼다.

---------         ---------
남은 두 선의 가운데 문자열을 공백으로 바꾼다.

---   ---         ---   ---
한번 더

- -   - -         - -   - -
모든 선의 길이가 1이면 멈춘다. N이 주어졌을 때, 마지막 과정이 끝난 후 결과를 출력하는 프로그램을 작성하시오.

입력
입력을 여러 줄로 이루어져 있다. 각 줄에 N이 주어진다. 파일의 끝에서 입력을 멈춘다. N은 0보다 크거나 같고, 12보다 작거나 같은 정수이다.

출력
입력으로 주어진 N에 대해서, 해당하는 칸토어 집합의 근사를 출력한다.

예제 입력 1 
0
1
3
2

예제 출력 1 
-
- -
- -   - -         - -   - -
- -   - -

출처
ICPC > Regionals > North America > Mid-Atlantic Regional > 2002 Mid-Atlantic Regional Programming Contest G번

문제를 번역한 사람: baekjoon

알고리즘 분류
분할 정복
재귀
*/

const fs = require("fs");

const ns = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 1
function solution(ns) {
  const answer = [];

  function cantor(n) {
    if (n > 0) {
      return cantor(n - 1) + " ".repeat(3 ** (n - 1)) + cantor(n - 1);
    } else {
      return "-";
    }
  }

  ns.forEach((n) => {
    answer.push(cantor(+n));
  });

  return answer.join("\n");
}

// 2
function solution(ns) {
  const answer = [];

  function cantor(num, arr) {
    if (arr[0] === "1 1") {
      return arr
        .map((v) => {
          const [isChar, cnt] = v.split(" ").map(Number);

          return isChar ? "-".repeat(cnt) : " ".repeat(cnt);
        })
        .join("");
    } else {
      const newArr = [];

      arr.forEach((v) => {
        if (v.split(" ")[0] === "1") {
          newArr.push(`1 ${num / 3}`);
          newArr.push(`0 ${num / 3}`);
          newArr.push(`1 ${num / 3}`);
        } else {
          newArr.push(v);
        }
      });

      return cantor(num / 3, newArr);
    }
  }

  for (let i = 0; i < ns.length; i++) {
    answer.push(cantor(3 ** ns[i], [`1 ${3 ** ns[i]}`]));
  }

  return answer.join("\n");
}

console.log(solution(ns));
