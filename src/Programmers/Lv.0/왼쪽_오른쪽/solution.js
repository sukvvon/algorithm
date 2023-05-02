/*
왼쪽 오른쪽

문제 설명
문자열 리스트 str_list에는 "u", "d", "l", "r" 네 개의 문자열이 여러 개 저장되어 있습니다. str_list에서 "l"과 "r" 중 먼저 나오는 문자열이 "l"이라면 해당 문자열을 기준으로 왼쪽에 있는 문자열들을 순서대로 담은 리스트를, 먼저 나오는 문자열이 "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트를 return하도록 solution 함수를 완성해주세요. "l"이나 "r"이 없다면 빈 리스트를 return합니다.

제한사항
1 ≤ str_list의 길이 ≤ 20
str_list는 "u", "d", "l", "r" 네 개의 문자열로 이루어져 있습니다.

입출력 예
str_list	result
["u", "u", "l", "r"]	["u", "u"]
["l"]	[]

입출력 예 설명
입출력 예 #1

"r"보다 "l"이 먼저 나왔기 때문에 "l"의 왼쪽에 있는 문자열들을 담은 리스트인 ["u", "u"]를 return합니다.
입출력 예 #2

"l"의 왼쪽에 문자열이 없기 때문에 빈 리스트를 return합니다.
*/

function solution(str_list) {
  const idxL = str_list.indexOf("l");
  const idxR = str_list.indexOf("r");

  if (idxL < 0 && idxR < 0) {
    return [];
  } else {
    if (idxR < 0) {
      if (!idxL) {
        return [];
      } else {
        return str_list.slice(0, idxL);
      }
    } else if (idxR > -1 && idxL > -1) {
      if (idxL < idxR) {
        return str_list.slice(0, idxL);
      } else {
        return str_list.slice(idxR + 1);
      }
    } else {
      return str_list.slice(idxR + 1);
    }
  }
}
