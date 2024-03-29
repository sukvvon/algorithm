/*
공유기 설치 

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	128 MB	56285	19173	13461	36.132%

문제
도현이의 집 N개가 수직선 위에 있다. 각각의 집의 좌표는 x1, ..., xN이고, 집 여러개가 같은 좌표를 가지는 일은 없다.

도현이는 언제 어디서나 와이파이를 즐기기 위해서 집에 공유기 C개를 설치하려고 한다. 최대한 많은 곳에서 와이파이를 사용하려고 하기 때문에, 한 집에는 공유기를 하나만 설치할 수 있고, 가장 인접한 두 공유기 사이의 거리를 가능한 크게 하여 설치하려고 한다.

C개의 공유기를 N개의 집에 적당히 설치해서, 가장 인접한 두 공유기 사이의 거리를 최대로 하는 프로그램을 작성하시오.

입력
첫째 줄에 집의 개수 N (2 ≤ N ≤ 200,000)과 공유기의 개수 C (2 ≤ C ≤ N)이 하나 이상의 빈 칸을 사이에 두고 주어진다. 둘째 줄부터 N개의 줄에는 집의 좌표를 나타내는 xi (0 ≤ xi ≤ 1,000,000,000)가 한 줄에 하나씩 주어진다.

출력
첫째 줄에 가장 인접한 두 공유기 사이의 최대 거리를 출력한다.

예제 입력 1 
5 3
1
2
8
4
9

예제 출력 1 
3

힌트
공유기를 1, 4, 8 또는 1, 4, 9에 설치하면 가장 인접한 두 공유기 사이의 거리는 3이고, 이 거리보다 크게 공유기를 3개 설치할 수 없다.

출처
Olympiad > USA Computing Olympiad > 2004-2005 Season > USACO February 2005 Contest > Gold 3번

데이터를 추가한 사람: ahmg1216, djm03178, hwangyj9
잘못된 데이터를 찾은 사람: fler9617

알고리즘 분류
이분 탐색
매개 변수 탐색
*/

const fs = require("fs");

const [nc, ...houses] = fs
  .readFileSync(
    process.platform === "linux" ? "dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

function solution(nc, houses) {
  const [n, c] = nc.split(" ").map(Number);
  houses = houses.map(Number).sort((a, b) => a - b);
  let min = 1;
  let max = houses.at(-1);

  function isPossible(distance) {
    let cnt = c - 1;
    let prevHouse = houses[0];

    for (let i = 1; i < n; i++) {
      if (houses[i] - prevHouse >= distance) {
        cnt--;
        prevHouse = houses[i];
      }
    }

    return cnt <= 0;
  }

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (isPossible(mid)) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return max;
}

console.log(solution(nc, houses));
