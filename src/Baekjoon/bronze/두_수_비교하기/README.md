## 1. 두 수 비교하기

> https://www.acmicpc.net/problem/1330

### 문제

```
두 수 비교하기

문제
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

출력
첫째 줄에 다음 세 가지 중 하나를 출력한다.

A가 B보다 큰 경우에는 '>'를 출력한다.
A가 B보다 작은 경우에는 '<'를 출력한다.
A와 B가 같은 경우에는 '=='를 출력한다.

제한
-10,000 ≤ A, B ≤ 10,000

예제 입력 1
1 2

예제 출력 1
<

예제 입력 2
10 2

예제 출력 2
>

예제 입력 3
5 5

예제 출력 3
==
```

### 해답

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ")
  .map((value) => +value);

const [a, b] = inputData;

function compare(a, b) {
  if (a > b) {
    return ">";
  } else if (a < b) {
    return "<";
  } else if (a == b) {
    return "==";
  }
}

console.log(compare(a, b));
```

### 풀이

#### inputData

##### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 31 20 32>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

###### process.platform

백준의 파일 경로는 `"/dev/stdin"`입니다.

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### toString()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData); // 1 2
```

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### split()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ");

console.log(inputData); // [ '1', '2' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)를 활용하여 매개변수에 <u>공백을 의미</u>하는 `" "`를 넣어 배열을 만듭니다.

##### map()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ")
  .map((value) => +value);

console.log(inputData); // [ 1, 2 ]
```

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드의 callback 함수를 활용하여 `string` 형식이었던 배열의 각 값을 `number` 형식으로 바꿉니다.

##### 배열 구조 분해

```js
const [a, b] = inputData;
console.log(a); // 1
console.log(b); // 2
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 배열 속의 `a`, `b`에 값을 할당합니다.

#### compare()

```js
function compare(a, b) {
  if (a > b) {
    return ">";
  } else if (a < b) {
    return "<";
  } else if (a == b) {
    return "==";
  }
}
```

##### if...else

매개변수 `a`,`b`를 받는 함수 `compare()`을 생성하여 [if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)를 활용하여

`a`가 `b`보다 큰 경우 `">"`을,  
`a`가 `b`보다 작은 경우 `"<"`을,  
`a`와 `b`가 같은 경우 `"=="`을

[`return`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return) 명령문을 통해 반환하게 합니다.

#### console.log()

```js
console.log(compare(a, b)); // <
```

`1`과 `2`를 대입하였을 경우 `<` 가 출력되고,  
`10`, `2`를 대입하였을 경우 `>`가 출력되고,  
`5`, `5`를 대입하였을 경우 `==`가 출력되는 것을 알 수 있습니다.
