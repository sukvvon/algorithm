## 9. 사칙연산

> https://www.acmicpc.net/problem/10869

### 문제

```
사칙연산

문제
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

입력
두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

출력
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

예제 입력 1
7 3

예제 출력 1
10
4
21
2
1
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

console.log(`${a + b}
${a - b}
${a * b}
${parseInt(a / b)}
${a % b}`);
```

### 풀이

#### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 37 20 33>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### process.platform

백준의 파일 경로는 `"/dev/stdin"`입니다.

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

#### toString()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData); // 7 3
```

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

#### split()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ");

console.log(inputData); // [ '7', '3' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)를 활용하여 매개변수에 공백을 의미하는 `" "`를 넣어 배열을 만듭니다.

#### map()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ")
  .map((value) => +value);

console.log(inputData); // [ 7, 3 ]
```

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드의 callback 함수를 활용하여 `string` 형식이었던 배열의 각 값을 `number` 형식으로 바꿉니다.

#### 배열 구조 분해

```js
const [a, b] = inputData;
console.log(a); // 7
console.log(b); // 3
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 배열 속의 `a`, `b`에 값을 할당합니다.

#### Template literals

```js
console.log(`${a + b}
${a - b}
${a * b}
${parseInt(a / b)}
${a % b}`);
// 10
// 4
// 21
// 2
// 1
```

[Template literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)의 [Multi-line strings](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals#multi-line_strings)와 [Expression interpolation(표현식 삽입법)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals#expression_interpolation%ED%91%9C%ED%98%84%EC%8B%9D_%EC%82%BD%EC%9E%85%EB%B2%95)으로 문제에서 요구한 사칙연산을 간편하게 표현합니다.

##### parseInt()

`a/b`에는 [`parseInt()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 함수를 사용하여 <u>실수인 값을 정수로 반환</u>합니다.

최종적으로 출력값이 요구하는대로 나오는 것을 알 수 있습니다.
