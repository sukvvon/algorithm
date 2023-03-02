/*
숫자 변환하기

문제 설명
자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

x에 n을 더합니다
x에 2를 곱합니다.
x에 3을 곱합니다.
자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.

제한사항
1 ≤ x ≤ y ≤ 1,000,000
1 ≤ n < y

입출력 예
x	y	n	result
10	40	5	2
10	40	30	1
2	5	4	-1

입출력 예 설명
입출력 예 #1
x에 2를 2번 곱하면 40이 되고 이때가 최소 횟수입니다.

입출력 예 #2
x에 n인 30을 1번 더하면 40이 되고 이때가 최소 횟수입니다.

입출력 예 #3
x를 y로 변환할 수 없기 때문에 -1을 return합니다.
*/

// dp
function solution(x, y, n) {
  if (x === y) {
    return 0;
  }

  const dp = {};
  dp[x] = 0;
  let data = [x];

  while (data.length) {
    const newData = [];

    for (const d of data) {
      for (const ele of [d + n, d * 2, d * 3]) {
        if (dp[ele] || ele > y) {
          continue;
        }

        if (ele === y) {
          return dp[d] + 1;
        }

        dp[ele] = dp[d] + 1;
        newData.push(ele);
      }
    }

    data = newData;
  }

  return -1;
}
