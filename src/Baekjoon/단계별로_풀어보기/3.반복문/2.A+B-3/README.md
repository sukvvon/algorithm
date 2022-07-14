## 2. A+B-3

> https://www.acmicpc.net/problem/10950

### 문제

```
A+B-3

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 28

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
  .split("\n");

const [count] = inputData;

for (let i = 1; i <= +count; i++) {
  const arrayOfValue = inputData[i].split(" ").map((value) => +value);
  const [a, b] = arrayOfValue;
  console.log(a + b);
}
```

### 풀이

#### inputData

##### 파일 읽어오기

###### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 35 0a 31 20 31 0a 32 20 33 0a 33 20 34 0a 39 20 38 0a 35 20 32>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### 작동 시스템 구별

###### process.platform

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### 문자열 형식으로 변환

###### toString()

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

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### 배열 생성

###### split()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n");

console.log(inputData); // [ '5', '1 1', '2 3', '3 4', '9 8', '5 2' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)를 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### count

##### 테스트 케이스의 개수

###### 배열 구조 분해

```js
const [count] = inputData;

console.log(count); // 5
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 `inputData`로부터 `count`라는 이름의 변수로 <u>테스트 케이스의 개수</u>를 구합니다.

#### A + B 구하기

```js
for (let i = 1; i <= +count; i++) {
  const arrayOfValue = inputData[i].split(" ").map((value) => +value);
  const [a, b] = arrayOfValue;
  console.log(a + b);
}
```

##### for

```js
for (let i = 1; i <= +count; i++) {}
```

[for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for) 문을 활용합니다.

처음 <u>테스트 케이스의 개수를 의미하는 값을 제외</u>해야 하기 때문에 `i`값을 `0`이 아닌 `1`로 초기화합니다.

문자열 형식의 `count`를 `+`를 통해 실수 형식으로 바꿔 for문이 동작하도록 합니다.

##### 값의 배열

###### arrayOfValue

```js
for (let i = 1; i <= +count; i++) {
  const arrayOfValue = inputData[i].split(" ").map((value) => +value);
  // expexted output: [ 1, 1 ], ..., [ 5, 2 ]
}
```

값의 배열을 의미하는 `arrayOfValue`라는 변수를 만듭니다.

[split()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 통해 매개변수 `" "` 즉 공백에 의한 배열을 생성합니다.

그 후 [map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 통해 <u>문자열 형식인 배열 값들을 실수 형식</u>으로 변환합니다.

##### 배열 구조 분해

###### [a, b]

```js
for (let i = 1; i <= +count; i++) {
  const arrayOfValue = inputData[i].split(" ").map((value) => +value);
  const [a, b] = arrayOfValue;

  console.log(a, b);
  // 1 1
  // 2 3
  // 3 4
  // 9 8
  // 5 2
}
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 `arrayOfValue`를 `a`, `b`에 할당합니다.

##### a + b 출력

###### console.log()

```js
for (let i = 1; i <= +count; i++) {
  const arrayOfValue = inputData[i].split(" ").map((value) => +value);
  const [a, b] = arrayOfValue;
  console.log(a + b);
  // 2
  // 5
  // 7
  // 17
  // 7
}
```

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 활용하여 `a + b`값을 `i`값마다 출력합니다.
