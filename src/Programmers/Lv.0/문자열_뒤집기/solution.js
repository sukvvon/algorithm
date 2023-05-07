/*
문자열 뒤집기

문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000

입출력 예
my_string	return
"jaron"	"noraj"
"bread"	"daerb"

입출력 예 설명
입출력 예 #1

my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
입출력 예 #2

my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
*/

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

/*
문자열 뒤집기

문제 설명
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
my_string은 숫자와 알파벳으로만 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000
0 ≤ s ≤ e < my_string의 길이

입출력 예
my_string	s	e	result
"Progra21Sremm3"	6	12	"ProgrammerS123"
"Stanley1yelnatS"	4	10	"Stanley1yelnatS"

입출력 예 설명
입출력 예 #1

예제 1번의 my_string에서 인덱스 6부터 인덱스 12까지를 뒤집은 문자열은 "ProgrammerS123"이므로 "ProgrammerS123"를 return 합니다.
입출력 예 #2

예제 2번의 my_string에서 인덱스 4부터 인덱스 10까지를 뒤집으면 원래 문자열과 같은 "Stanley1yelnatS"이므로 "Stanley1yelnatS"를 return 합니다.
*/

function solution(my_string, s, e) {
  return (
    my_string.slice(0, s) +
    [...my_string.slice(s, e + 1)].reverse().join("") +
    my_string.slice(e + 1)
  );
}
