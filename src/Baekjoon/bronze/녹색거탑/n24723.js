/*
녹색거탑

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2.022 초 (추가 시간 없음)	319 MB (추가 메모리 없음)	4691	3120	2935	67.830%
문제


Naver D2를 아시나요? D2는 For Developers, By Developers의 약자로, 개발자들을 위해 개발자들이 직접 만들어 가고 있는 네이버 개발자 지원 프로그램입니다. 네이버가 축적한 기술과 지식을 공유하고, 외부 개발자들을 지원해 대한민국 개발자 역량 강화를 이끌고, 이를 통해 업계 전체와 네이버가 함께 성장하는 선순환 구조를 만들고자 합니다.

사실 네이버의 개발자 지원은 오랜 기간 꾸준히 이어져 왔습니다. 개발자 컨퍼런스 DEVIEW를 비롯, 오픈 소스와 개발 도구 공개, 학회 및 커뮤니티 지원 등 여러 지원 프로그램이 있었습니다. 이런 다양한 프로그램을 하나로 통합한 것이 바로 Naver D2입니다.

2022년 봄 어느 날.

전 세계에 코딩괴물이 나타났다.

그리고 코딩괴물과 함께 갑작스레 등장한 '그것'...

바로 녹색거탑이다.

녹색거탑의 정상에서는 매년 NAVER가 개최하는 개발자 컨퍼런스 DEVIEW가 열린다. 이 DEVIEW에 참여하면, 코딩에 깊은 깨달음을 얻어 코딩괴물이 될 수 있다고 전해진다. 그리고 코딩괴물은 녹색거탑의 정상에서 내려온다. 예전부터 전해 내려오는 D2 비전서에 의하면, 코딩괴물이 녹색거탑의 정상에서 내려오는 경우의 수를 파악한 사람은, 개발자 컨퍼런스 DEVIEW에 참여할 수 있다 한다. 그리고 DEVIEW에 참여해 본인도 코딩괴물이 될 수 있다!



녹색거탑은 위 그림과 같이 규칙적으로 쌓여있다.

그림의 시야에 보이지 않는 블록은 없다.
그림의 시야에 보이는 블록의 윗면만 이용해 녹색거탑을 내려올 수 있다.
녹색거탑이 
$N$층이면, 총 
$N$개의 블록을 이용한 최단 경로로만 내려온다.
녹색거탑을 내려올 때는 정상에서 시작해 노란색 바닥까지, 항상 인접한 아래층의 블록으로만 내려온다.
녹색거탑을 정복하고 DEVIEW에 참여하자.

입력
녹색거탑의 높이를 나타내는 정수 
$N$이 주어진다. (
$1 \leq N \leq 5$)

출력
녹색거탑의 정상에서 바닥으로 내려오는 경우의 수를 출력한다.

예제 입력 1 
1

예제 출력 1 
2


 
$1$층짜리 녹색거탑을 내려오는 경우의 수는 위와 같이 
$2$가지다.

예제 입력 2 
2
예제 출력 2 
4


 
$2$층짜리 녹색거탑을 내려오는 경우의 수는 위와 같이 
$4$가지다.

노트
살면서 녹색거탑을 만난다면, 탑을 정복하고 DEVIEW에 참여해 코딩괴물이 되어보자.

출처
University > 연세대학교 > 2022 연세대학교 신학기맞이 프로그래밍 경진대회 A번

문제를 검수한 사람: chogahui05, clifter0122, gumgood, Juno, klm03025, lky7674, pom0319, standingbell, tony9402, ystaeyoon113
문제를 만든 사람: QuqqU

알고리즘 분류
수학
사칙연산gg
*/

const fs = require("fs");

const n = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

function solution(n) {
  return 2 ** n;
}

console.log(solution(n));
