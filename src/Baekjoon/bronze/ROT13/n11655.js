/*
ROT13

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	20261	12211	10373	61.118%

문제
ROT13은 카이사르 암호의 일종으로 영어 알파벳을 13글자씩 밀어서 만든다.

예를 들어, "Baekjoon Online Judge"를 ROT13으로 암호화하면 "Onrxwbba Bayvar Whqtr"가 된다. ROT13으로 암호화한 내용을 원래 내용으로 바꾸려면 암호화한 문자열을 다시 ROT13하면 된다. 앞에서 암호화한 문자열 "Onrxwbba Bayvar Whqtr"에 다시 ROT13을 적용하면 "Baekjoon Online Judge"가 된다.

ROT13은 알파벳 대문자와 소문자에만 적용할 수 있다. 알파벳이 아닌 글자는 원래 글자 그대로 남아 있어야 한다. 예를 들어, "One is 1"을 ROT13으로 암호화하면 "Bar vf 1"이 된다.

문자열이 주어졌을 때, "ROT13"으로 암호화한 다음 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 알파벳 대문자, 소문자, 공백, 숫자로만 이루어진 문자열 S가 주어진다. S의 길이는 100을 넘지 않는다.

출력
첫째 줄에 S를 ROT13으로 암호화한 내용을 출력한다.

예제 입력 1 
Baekjoon Online Judge

예제 출력 1 
Onrxwbba Bayvar Whqtr

예제 입력 2 
One is 1

예제 출력 2 
Bar vf 1

출처
문제를 만든 사람: baekjoon

알고리즘 분류
구현
문자열
*/

const fs = require("fs");

const s = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .split("");

function solution(s) {
  const lower = {};
  const upper = {};

  for (let i = 0; i < 26; i++) {
    lower[i] = String.fromCharCode(i + 97);
    upper[i] = String.fromCharCode(i + 65);
  }

  s.forEach((char, index) => {
    const ascii = char.charCodeAt();

    s[index] =
      97 <= ascii && ascii <= 122
        ? lower[(ascii + 13 - 97) % 26]
        : 65 <= ascii && ascii <= 90
        ? upper[(ascii + 13 - 65) % 26]
        : s[index];
  });

  return s.join("");
}

console.log(solution(s));
