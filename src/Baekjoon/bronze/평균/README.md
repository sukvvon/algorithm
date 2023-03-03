## 5. 평균

> https://www.acmicpc.net/problem/1546

### 문제

```
평균

문제
세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.

예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.

세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다. 둘째 줄에 세준이의 현재 성적이 주어진다. 이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.

출력
첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-2 이하이면 정답이다.

예제 입력 1
3
40 80 60

예제 출력 1
75.0

예제 입력 2
3
10 20 30

예제 출력 2
66.666667
10-2 이하의 오차를 허용한다는 말은 정확히 소수 2번째 자리까지 출력하라는 뜻이 아니다.

예제 입력 3
4
1 100 100 100

예제 출력 3
75.25

예제 입력 4
5
1 2 4 8 16

예제 출력 4
38.75

예제 입력 5
2
3 10

예제 출력 5
65.0

예제 입력 6
4
10 20 0 100

예제 출력 6
32.5

예제 입력 7
1
50

예제 출력 7
100.0

예제 입력 8
9
10 20 30 40 50 60 70 80 90

예제 출력 8
55.55555555555556
```

### 해답

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, inputDataScores] = inputData;
const scores = inputDataScores.split(" ");
const M = Math.max(...scores);
const newScores = scores.map((score) => (score / M) * 100);

let sum = 0;

for (let i = 0; i < N; i++) {
  sum += newScores[i];
}

console.log(sum / N);
```

### 풀이

#### inputData (입력값)

##### 파일 읽어오기

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 33 0a 31 30 20 32 30 20 33 30>
```

###### readFileSync()

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### 작동 시스템 구별

```js
process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt";
```

###### process.platform

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### 문자열 형식으로 변환

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData);
// 3
// 10 20 30
```

###### toString()

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### 공백 제거

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .trim();

console.log(inputData);
// 3
// 10 20 30
```

###### trim()

[`trim()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) 메서드를 활용하여 <u>문자열 양 끝의 공백을 제거</u>합니다.

##### 배열 생성

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n");

console.log(inputData); // [ '3', '10 20 30' ]
```

###### split()

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### N, inputDataScores

```js
const [N, inputDataScores] = inputData;

console.log(N, inputDataScores); // 3 10 20 30
```

##### 시험 본 과목의 개수, 현재 성적

###### 배열 구조 분해

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)를 통해 배열 `inputData`의 두 가지 요소들을 각각 시험 본 과목의 개수를 의미하는 `N`, 현재 성적을 의미하는 `inputDataScores`에 할당합니다.

#### scores

```js
const scores = inputDataScores.split(" ");

console.log(scores); // [ '10', '20', '30' ]
```

##### 성적에 대한 배열 생성

###### split()

성적에 대한 변수인 `inputDataScores`를 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 공백을 의미하는 `" "`를 넣어 배열을 만듭니다.

#### M

```js
const M = Math.max(...scores);

console.log(M); // 30
```

##### 성적 중 최댓값

###### Math.max()

[`Math.max()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max) 함수를 통해 성적 중 최댓값을 반환하여 `M` 변수에 할당합니다.

###### 전개 구문

`Math.max()` 함수 내에 매개변수로 [전개 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 활용해 배열 `scores`의 요소들을 넣습니다.

#### newScores

```js
const newScores = scores.map((score) => (score / M) * 100);

console.log(newScores); // [ 33.33333333333333, 66.66666666666666, 100 ]
```

##### 성적을 고친 값

> 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M\*100으로 고쳤다.

###### map()

기존의 점수인 `scores`에 [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 매개변수 `callback` 함수를 위 주석대로 `(score) => (score / M) * 100`로 하여 <u>각 점수들을 최댓값으로 나눈 후 `100`을 곱하여 조작한 값들에 대한</u> 새로운 배열을 반환하고 `newScores` 변수에 할당합니다.

#### sum

```js
let sum = 0;
```

##### 조작된 점수들의 합

<u>조작된 점수들의 합을 위한 변수</u>인 `sum`에 `0`으로 초기화합니다.

#### for

```js
for (let i = 0; i < N; i++) {
  sum += newScores[i];
}
```

```js
for (let i = 0; i < N; i++) {}
```

[for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문으로 조작된 점수들의 합을 구하기 위하여 `i`를 `0`부터 `N`이전까지로 반복문의 범위를 정합니다.

##### 조작된 점수들 합하기

```js
for (let i = 0; i < N; i++) {
  sum += newScores[i];

  console.log(sum);
  // 33.33333333333333
  // 99.99999999999999
  // 200
}
```

###### 더하기 할당

`newScore[0]`부터 `newScore[N-1]`까지 `sum`에 [더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment)합니다.

#### 조작된 점수들의 합에 과목 개수 나누기

```js
console.log(sum / N); // 66.66666666666667
```

##### console.log()

마지막으로 [`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log)을 활용하여 `sum / N` 즉 <u>조작된 과목들에 과목의 개수를 나눈 값</u>을 출력합니다.
