/*
단어 정렬

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	256 MB	132939	55537	41482	40.360%

문제
알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

길이가 짧은 것부터
길이가 같으면 사전 순으로
단, 중복된 단어는 하나만 남기고 제거해야 한다.

입력
첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 주어지는 문자열의 길이는 50을 넘지 않는다.

출력
조건에 따라 정렬하여 단어들을 출력한다.

예제 입력 1 
13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours

예제 출력 1 
i
im
it
no
but
more
wait
wont
yours
cannot
hesitate

출처
문제를 만든 사람: author5

알고리즘 분류
문자열
정렬
*/

const fs = require("fs");

const [n, ...input] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

// 1
function solution(input) {
  input = [...new Set(input)].sort((a, b) =>
    a.length > b.length
      ? 1
      : a.length < b.length
      ? -1
      : a > b
      ? 1
      : a < b
      ? -1
      : 0
  );

  return input.join("\n");
}

// 2-1
function solution(input) {
  input = [...new Set(input)].sort((a, b) =>
    a.length !== b.length ? a.length - b.length : a > b ? 1 : a < b ? -1 : 0
  );

  return input.join("\n");
}

// 2-2
function solution(input) {
  input = [...new Set(input)].sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
    }
  });

  return input.join("\n");
}

// 3-1
function solution(input) {
  input = [...new Set(input)].sort((a, b) => {
    if (a.length === b.length) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
    } else {
      return a.length - b.length;
    }
  });

  return input.join("\n");
}

// 3-2
function solution(input) {
  input = [...new Set(input)].sort((a, b) =>
    a.length === b.length ? (a > b ? 1 : a < b ? -1 : 0) : a.length - b.length
  );

  return input.join("\n");
}

console.log(solution(input));
