## 13. 곱셈

> https://www.acmicpc.net/problem/2588

### 문제

<p align="center">
  <img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/upload/images/f5NhGHVLM4Ix74DtJrwfC97KepPl27s%20(1).png">
</p>

```
곱셈

문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

예제 입력 1
472
385

예제 출력 1
2360
3776
1416
181720
```

### 해답

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n")
  .map((value) => +value);

const [a, b] = inputData;

const [hundredsB, tensB, unitsB] = String(b)
  .split("")
  .map((value) => +value);

console.log(`${a * unitsB}
${a * tensB}
${a * hundredsB}
${a * b}`);
```

### 풀이

#### inputData

##### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 34 37 32 0a 33 38 35>
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

console.log(inputData);
// 472
// 385
```

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### split()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n");

console.log(inputData); // [ '472', '385' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)를 활용하여 매개변수에 <u>줄바꿈을 의미</u>하는 `"\n"`를 넣어 배열을 만듭니다.

##### map()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n")
  .map((value) => +value);

console.log(inputData); // [ 472, 385 ]
```

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드의 callback 함수를 활용하여 `string` 형식이었던 배열의 각 값을 `number` 형식으로 바꿉니다.

##### 배열 구조 분해

```js
const [a, b] = inputData;
console.log(a); // 472
console.log(b); // 385
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 배열 속의 `a`, `b`에 값을 할당합니다.

#### hundredsB, tensB, unitsB

(3), (4), (5)의 값을 구하기 위해서는 `b`값의 백의 자리 수, 십의 자리 수, 일의 자리 수를 구하여 `a`값에 각각 곱해줘야 합니다.

##### String()

```js
const B = String(b);
console.log(B); // 385
```

`number` 형식인 `b` 값을 [`String()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)을 통해 <u>문자열로 변환</u>해줍니다.

##### split()

```js
const B = String(b).split("");
console.log(B); // [ '3', '8', '5' ]
```

그 후 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 통해 매개변수 `""`를 통하여 <u>각 자리 수를 나라태는 배열(백의 자리, 십의 자리, 일의 자리)</u>를 생성합니다.

##### map()

```js
const B = String(b)
  .split("")
  .map((value) => +value);
console.log(B); // [ 3, 8, 5 ]
```

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드의 callback 함수를 활용하여 `string` 형식이었던 배열의 각 값을 `number` 형식으로 바꿔 <u>연산이 가능하도록 합니다.</u>

##### 배열 구조 분해

```js
const [hundredsOfB, tensOfB, unitsOfB] = String(b)
  .split("")
  .map((value) => +value);
console.log(hundredsOfB); // 3
console.log(tensOfB); // 8
console.log(unitsOfB); // 5
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 `b`로부터 각 자리 수를 의미하는 숫자를 배열 속의 `hundredsB`, `tensB`, `unitsB`에 값을 할당합니다.

#### Template literals

```js
console.log(`${a * unitsOfB}
${a * tensOfB}
${a * hundredsOfB}
${a * b}`);
// 2360
// 3776
// 1416
// 181720
```

[Template literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)의 [Multi-line strings](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals#multi-line_strings)와 [Expression interpolation(표현식 삽입법)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals#expression_interpolation%ED%91%9C%ED%98%84%EC%8B%9D_%EC%82%BD%EC%9E%85%EB%B2%95)으로 문제에서 요구한 사칙연산을 간편하게 표현합니다.

문제에서 요구하는 값이 정상적으로 출력되는 것을 볼 수 있습니다.
