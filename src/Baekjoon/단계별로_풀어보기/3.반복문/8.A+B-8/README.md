## 8. A+B-8

> https://www.acmicpc.net/problem/11022

### 문제

```
A+B-8

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 2

예제 출력 1
Case #1: 1 + 1 = 2
Case #2: 2 + 3 = 5
Case #3: 3 + 4 = 7
Case #4: 9 + 8 = 17
Case #5: 5 + 2 = 7
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

const [count] = inputData;

for (let i = 1; i <= +count; i++) {
  const testCase = inputData[i].split(" ").map((value) => +value);
  const [a, b] = testCase;

  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
```

### 풀이

#### inputData

##### 파일 읽어오기

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 35 0a 31 20 31 0a 32 20 33 0a 33 20 34 0a 39 20 38 0a 35 20 32 0a>
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
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
```

###### toString()

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### 배열 생성

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n");

console.log(inputData); // [ '5', '1 1', '2 3', '3 4', '9 8', '5 2' ]
```

###### split()

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### count

##### 테스트 케이스 개수

```js
const [count] = inputData;

console.log(count); // 5
```

###### 배열 구조 분해

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 활용해 `inputData`배열의 첫 번째 인덱스에 해당하는 값 즉 `inputData[0]`을 변수 `count`에 할당합니다.

#### for

```js
for (let i = 1; i <= +count; i++) {
  const testCase = inputData[i].split(" ").map((value) => +value);
  const [a, b] = testCase;

  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
```

```js
for (let i = 1; i <= +count; i++) {}
```

> `count` 값이 예제에서 `5`이므로 `1`의 경우부터 `5`의 경우까지 반복합니다.

`1`부터 `count` 까지의 값을 출력해야하기 때문에

`i`값을 `1`로 선언하고 `1`부터 `count`까지 [for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문을 반복하게 합니다.

##### +count

`count` 값은 문자열 형식이기 때문에 `+`를 통해 숫자로 형식을 바꿔줍니다.

##### testCase

```js
for (let i = 1; i <= +count; i++) {
  const testCase = inputData[i].split(" ").map((value) => +value);

  console.log(testCase);
  // [ 1, 1 ]
  // [ 2, 3 ]
  // [ 3, 4 ]
  // [ 9, 8 ]
  // [ 5, 2 ]
}
```

###### split()

```js
const testCase = inputData[i].split(" ");
```

`testCase`내에 있는 변수들을 모두 더하는 연산을 하기 위해서 `testCase` 내에 있는 변수들을 모두 각각의 배열로 분해해야합니다.

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 공백을 의미하는 `" "`를 넣어 배열을 만듭니다.

###### map()

```js
const testCase = inputData[i].split(" ").map((value) => +value);
```

그 후 `(value) => +value`가 포함된 `callback` 함수를 가지는 [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 통해 문자열 형식을 실수 형식으로 바꾸게 하여 연산이 가능하도록 합니다.

##### [a, b]

```js
for (let i = 1; i <= +count; i++) {
  const testCase = inputData[i].split(" ").map((value) => +value);
  const [a, b] = testCase;

  console.log(a, b);
  // 1 1
  // 2 3
  // 3 4
  // 9 8
  // 5 2
}
```

###### 배열 구조 분해

```js
const [a, b] = testCase;
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 활용해 `testCase`배열의 변수들을 각각 `a`, `b`에 할당합니다.

##### 출력하기

```js
for (let i = 1; i <= +count; i++) {
  const testCase = inputData[i].split(" ").map((value) => +value);
  const [a, b] = testCase;

  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
  // Case #1: 1 + 1 = 2
  // Case #2: 2 + 3 = 5
  // Case #3: 3 + 4 = 7
  // Case #4: 9 + 8 = 17
  // Case #5: 5 + 2 = 7
}
```

###### Templete literals

```js
`Case #${i}: ${a} + ${b} = ${a + b}`;
```

[Templete literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)을 활용해

`${i}`로 하여금 `i`값을 반복문이 실행되는 경우마다 넣도록 합니다.

그리고 `${a}`, `${b}`를 통해 `a`, `b`의 값을 나타내게 하고 `${a + b}`를 통해 연산된 값을 나타내도록 합니다.

###### console.log()

```js
console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
// Case #1: 1 + 1 = 2
// Case #2: 2 + 3 = 5
// Case #3: 3 + 4 = 7
// Case #4: 9 + 8 = 17
// Case #5: 5 + 2 = 7
```

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 테스트 케이스마다 Templete literals 로 이루어진 값을 출력합니다.
