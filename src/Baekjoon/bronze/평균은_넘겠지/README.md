## 7. 평균은 넘겠지

> https://www.acmicpc.net/problem/4344

### 문제

```
평균은 넘겠지

문제
대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

입력
첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

예제 입력 1
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91

예제 출력 1
40.000%
57.143%
33.333%
66.667%
55.556%
```

### 해답

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n");

const C = +inputData[0];

for (let i = 1; i <= C; i++) {
  let sum = 0;

  const testCase = inputData[i].split(" ").map((value) => +value);
  const N = testCase[0];

  for (let y = 1; y <= N; y++) {
    sum += testCase[y];
  }
  const avg = sum / N;

  let overStudent = 0;
  for (let z = 1; z <= N; z++) {
    if (testCase[z] > avg) {
      overStudent++;
    }
  }
  const overAvg = ((overStudent / N) * 100).toFixed(3);

  console.log(overAvg + "%");
}
```

### 풀이

#### inputData (입력값)

##### readFileSync() (파일 읽어오기)

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 35 0a 35 20 35 30 20 35 30 20 37 30 20 38 30 20 31 30 30 0a 37 20 31 30 30 20 39 35 20 39 30 20 38 30 20 37 30 20 36 30 20 35 30 0a 33 20 37 30 20 39 ... 45 more bytes>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### process.platform (작동 시스템 구별)

```js
process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt";
```

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### toString() (문자열 형식으로 변환)

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData);
// 5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91
```

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### split() (배열 생성)

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n");

console.log(inputData);
// [
//   '5',
//   '5 50 50 70 80 100',
//   '7 100 95 90 80 70 60 50',
//   '3 70 90 80',
//   '3 70 90 81',
//   '9 100 99 98 97 96 95 94 93 91'
// ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### C (테스트 케이스의 개수)

```js
const C = +inputData[0];

console.log(C); // 5
```

##### + (숫자 형식으로 변환)

`inputData`의 테스트 케이스의 개수를 뜻하는 요소 `inputData[0]`에 숫자 형식으로 변환을 하여 `+inputData[0]`을 변수 `C`에 할당합니다.

#### for (각 테스트 케이스를 위한 반복문)

```js
for (let i = 1; i <= C; i++) {
  let sum = 0;

  const testCase = inputData[i].split(" ").map((value) => +value);
  const N = testCase[0];

  for (let y = 1; y <= N; y++) {
    sum += testCase[y];
  }
  const avg = sum / N;

  let overStudent = 0;
  for (let z = 1; z <= N; z++) {
    if (testCase[z] > avg) {
      overStudent++;
    }
  }
  const overAvg = ((overStudent / N) * 100).toFixed(3);

  console.log(overAvg + "%");
}
```

```js
for (let i = 1; i <= C; i++) {}
```

[for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문으로 각 테스트 케이스를 위한 즉 `inputData[i]`에 대한 반복문을 실행할 것이기 때문에 `i`의 범위를 테스트 케이스의 개수를 의미하는 `0`이 아닌 `1`부터 `C`까지로 합니다.

##### sum (점수들의 합)

```js
let sum = 0;
```

점수들의 합산을 의미하는 변수 `sum`을 선언하고 `0`으로 초기화합니다.

##### testCase (각 테스트 케이스 내의 점수들의 배열)

```js
for (let i = 1; i <= C; i++) {
  let sum = 0;

  const testCase = inputData[i].split(" ").map((value) => +value);

  console.log(testCase);
}
// expected output:
// [ 5, 50, 50, 70, 80, 100 ]
// [
//    7, 100, 95, 90,
//   80,  70, 60, 50
// ]
// [ 3, 70, 90, 80 ]
// [ 3, 70, 90, 81 ]
// [
//    9, 100, 99, 98, 97,
//   96,  95, 94, 93, 91
// ]
```

###### split() (배열 형식으로 변환)

학생의 수와 점수들을 의미하는 `inputData[i]`로부터 공백을 의미하는 매개변수 `" "`를 가지는 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 활용하여 <u>공백을 기준으로 새로운 배열을 생성</u>합니다.

###### map() (배열 내 요소 숫자 형식으로 변환)

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 매개변수 `callback` 함수 `(value) => +value)`로 <u>문자열 형식의 배열을 숫자 형식으로</u> 변환한 후 `testCase`에 할당합니다.

##### N (학생들의 점수의 개수)

```js
for (let i = 1; i <= C; i++) {
  let sum = 0;

  const testCase = inputData[i].split(" ").map((value) => +value);
  const N = testCase[0];

  cossole.log(N);
}
// expected output:
// 5
// 7
// 3
// 3
// 9
```

`testCase`의 첫 번째 인덱스인 `testCase[0]`에서 학생들의 점수의 수를 변수 `N`에 할당합니다.

##### for (testCase 내의 점수들에 대한 반복문)

```js
for (let i = 1; i <= C; i++) {
  let sum = 0;

  const testCase = inputData[i].split(" ").map((value) => +value);
  const N = testCase[0];

  for (let y = 1; y <= N; y++) {
    sum += testCase[y];
  }
}
```

```js
for (let y = 1; y <= N; y++) {}
```

`testCase` 내부 점수들에 관한 for문이기에 `y`의 범위를 점수의 개수를 의미하는 배열 인덱스인 `0`이 아닌 `1`부터 `N`까지로 합니다.

###### 더하기 할당

```js
for (let i = 1; i <= C; i++) {
  let sum = 0;

  const testCase = inputData[i].split(" ").map((value) => +value);
  const N = testCase[0];

  for (let y = 1; y <= N; y++) {
    sum += testCase[y];
  }
}

console.log(sum);
// 350
// 545
// 240
// 241
// 863
```

[더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 연산자를 활용하여 `testCase` 배열 내의 모든 요소들을 합하여 `sum`에 할당합니다.

##### avg (점수들의 평균)

```js
for (let i = 1; i <= C; i++) {
  let sum = 0;

  const testCase = inputData[i].split(" ").map((value) => +value);
  const N = testCase[0];

  for (let y = 1; y <= N; y++) {
    sum += testCase[y];
  }
  const avg = sum / N;

  console.log(avg);
}
// expected output:
// 70
// 77.85714285714286
// 80
// 80.33333333333333
// 95.88888888888889
```

`sum`에 점수의 개수를 의미하는 `N`을 나눠줘 평균을 구한 후 변수 `avg`에 할당합니다.

##### overStudent (평균을 넘긴 학생의 수)

```js
let overStudent = 0;
```

평균을 넘은 학생들의 수를 뜻하는 변수 `overStudent`을 선언하고 `0`으로 초기화합니다.

##### for (평균을 넘은 학생들을 추려내는 반복문)

```js
for (let z = 1; z <= N; z++) {
  if (testCase[z] > avg) {
    overStudent++;
  }
}
```

```js
for (let z = 1; z <= N; z++) {}
```

`y`와 같이 `testCase` 내부 점수들에 관한 for문이기에 `z`의 범위를 개수를 의미하는 배열 인덱스인 `0`이 아닌 `1`부터 `N`까지로 합니다.

###### if...else

```js
for (let i = 1; i <= C; i++) {
  let sum = 0;

  const testCase = inputData[i].split(" ").map((value) => +value);
  const N = testCase[0];

  for (let y = 1; y <= N; y++) {
    sum += testCase[y];
  }
  const avg = sum / N;

  let overStudent = 0;
  for (let z = 1; z <= N; z++) {
    if (testCase[z] > avg) {
      overStudent++;
    }
  }
}

console.log(overStudent);
// 2
// 4
// 1
// 2
// 5
```

[if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문을 통해 `testCase` 배열의 요소들 중 `avg`즉 평균보다 큰 요소일 경우 [`Increment (++)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)을 통해 `overStudent++` 즉 `overStudent`를 하나씩 증가시켜줍니다.

##### overAvg (평균이 넘는 학생들의 비율)

```js
const overAvg = ((overStudent / N) * 100).toFixed(3);

console.log(overAvg);
// 40.000
// 57.143
// 33.333
// 66.667
// 55.556
```

평균 점수를 넘는 학생들의 수인 변수 `overStudent`에 학생들의 점수의 수인 변수 `N`을 나눈 후 비율을 위해 `100`을 곱해줍니다.

###### toFixed() (숫자를 고정 소수점 표기법으로)

그 후 매개변수로 `3`을 가지는 [`toFixed()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 메서드를 통해 <u>소수점 셋째 자리까지 출력</u>하도록 합니다.

##### 결과값 출력하기

```js
console.log(overAvg + "%");
// 40.000%
// 57.143%
// 33.333%
// 66.667%
// 55.556%
```

###### console.log()

마지막으로 [`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log)을 활용하여 `overAvg`에 `%` 기호가 필요하기 때문에 `overAvg + "%`을 출력합니다.
