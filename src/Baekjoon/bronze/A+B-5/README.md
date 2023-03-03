## 12. A+B-5

> https://www.acmicpc.net/problem/10952

### 문제

```
A+B-5

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

입력의 마지막에는 0 두 개가 들어온다.

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
1 1
2 3
3 4
9 8
5 2
0 0

예제 출력 1
2
5
7
17
7
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

const count = inputData.length - 1;

for (let i = 0; i < count; i++) {
  const testCase = inputData[i].split(" ").map((value) => +value);

  console.log(testCase[0] + testCase[1]);
}
```

### 풀이

#### inputData (입력값)

##### 파일 읽어오기

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 31 20 31 0a 32 20 33 0a 33 20 34 0a 39 20 38 0a 35 20 32 0a 30 20 30>
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
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 0 0
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
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 0 0
```

###### trim()

[`trim()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)을 활용하여 문자열 양 끝의 공백을 제거합니다.

##### 배열 생성

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

console.log(inputData); // [ '1 1', '2 3', '3 4', '9 8', '5 2', '0 0' ]
```

###### split()

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### count

```js
const count = inputData.length - 1;

console.log(count); // 5
```

##### 테스트 케이스의 개수

###### length

[`length`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length) 속성을 활용하여 `inputData`의 길이를 구하여 테스트 케이스의 개수를 구합니다.

> 입력의 마지막에는 0 두 개가 들어온다.

입력의 마지막에 `0` 두 개가 들어오므로 `1`을 빼줍니다. 그러므로 예제 입력에 따라서 `count`를 `5`로 만들어줍니다.

#### for (각 테스트 케이스에 대한 반복문)

```js
for (let i = 0; i < count; i++) {
  const testCase = inputData[i].split(" ").map((value) => +value);

  console.log(testCase[0] + testCase[1]);
}
```

```js
for (let i = 0; i < count; i++) {}
```

예제에서 `count`의 값은 `5`입니다. 마지막 입력 0 두 개를 제외하면 테스트 케이스들에 해당하는 인덱스는 0,1,2,3,4 총 5가지입니다.

이것을 활용하여 뒤에 나오는 연산을 진행합니다.

##### testCase

```js
for (let i = 0; i < count; i++) {
  const testCase = inputData[i].split(" ").map((value) => +value);
}
```

각각의 테스트 케이스들을 의미하는 `testCase`라는 변수를 생성하고 이하에 나오는 과정을 `testCase`라는 변수에 정의합니다.

###### split() (각 testCase에 대한 배열 생성)

```js
for (let i = 0; i < count; i++) {
  const testCase = inputData[i].split(" ");

  console.log(testCase);
  // [ '1', '1' ]
  // [ '2', '3' ]
  // [ '3', '4' ]
  // [ '9', '8' ]
  // [ '5', '2' ]
}

// i = 0 의 경우 [ '1', '1' ]
// i = 1 의 경우 [ '2', '3' ]
// i = 2 의 경우 [ '3', '4' ]
// i = 3 의 경우 [ '9', '8' ]
// i = 4 의 경우 [ '5', '2' ]
```

`testCase`라는 변수에 `inputData[i]` 즉 `inputData`의 각 인덱스로부터 `" "` 즉 공백을 매개변수로 가지는 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 통해 <u>각 테스트 케이스에 대한 배열</u>을 생성합니다.

###### map() (각 testCase에 대한 배열의 형식 변환)

```js
for (let i = 0; i < count; i++) {
  const testCase = inputData[i].split(" ").map((value) => +value);

  console.log(testCase);
  //  [ 1, 1 ]
  //  [ 2, 3 ]
  //  [ 3, 4 ]
  //  [ 9, 8 ]
  //  [ 5, 2 ]
}
// i = 0 의 경우 [ 1, 1 ]
// i = 1 의 경우 [ 2, 3 ]
// i = 2 의 경우 [ 3, 4 ]
// i = 3 의 경우 [ 9, 8 ]
// i = 4 의 경우 [ 5, 2 ]
```

생성한 배열을 [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 `callback`함수 `(value) => +value)`를 통해 <u>문자열이였던 형식을 숫자 형식으로</u> 바꿔줍니다.

##### 결과값 출력하기

```js
console.log(testCase[0] + testCase[1]);
// 2
// 5
// 7
// 17
// 7
```

###### console.log()

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `testCase[0] + testCase[1]` 즉 `testCase`의 <u>인덱스 `0`과 `1`의 값을 합한 결과값</u>을 출력합니다.
