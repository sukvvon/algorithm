## 3. 숫자의 개수

> https://www.acmicpc.net/problem/2577

### 문제

```
숫자의 개수

문제
세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.

입력
첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다. A, B, C는 모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.

출력
첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다. 마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에 1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.

예제 입력 1
150
266
427

예제 출력 1
3
1
0
2
0
0
0
2
0
0
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

const [A, B, C] = inputData;
const multiplied = A * B * C;

for (let i = 0; i < 10; i++) {
  const countOfEachDigit = String(multiplied)
    .split("")
    .filter((value) => +value === i).length;

  console.log(countOfEachDigit);
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

console.log(inputData); // <Buffer 31 35 30 0a 32 36 36 0a 34 32 37>
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
// 150
// 266
// 427
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

console.log(inputData); // [ '150', '266', '427' ]
```

###### split()

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

##### 배열 형식 변환

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n")
  .map((value) => +value);

console.log(inputData); // [ 150, 266, 427 ]
```

###### map()

생성된 배열의 형식은 문자열입니다. 배열의 형식을 숫자 형식으로 변환하기 위해 [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 매개변수 `callback` 함수를 `(value) => +value`로 하여 모든 배열 내부의 요소가 <u>숫자 형식으로 변환</u>되게 합니다.

#### A, B, C (세 개의 자연수)

```js
const [A, B, C] = inputData;

console.log(A, B, C); // 160 266 427
```

##### 배열 구조 분해

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)를 통해 배열 `inputData`의 세 가지 요소를 각각 `A`, `B`, `C`에 할당합니다.

#### multiplied (A, B, C를 곱한 값)

```js
const multiplied = A * B * C;

console.log(multiplied); // 17037300
```

`A`, `B`, `C`를 곱한 값을 `multiplied`라는 변수로 할당합니다.

#### for

```js
for (let i = 0; i < 10; i++) {
  const countOfEachDigit = String(multiplied)
    .split("")
    .filter((value) => +value === i).length;

  console.log(countOfEachDigit);
}
```

```js
for (let i = 0; i < 10; i++) {}
```

[for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문을 활용하여 `i`의 범위를 0부터 9까지 하여 `multiplied`의 각 자리의 숫자가 몇 번씩 쓰였는지 구합니다.

##### countOfEachDigit (각각의 숫자가 쓰인 횟수)

```js
for (let i = 0; i < 10; i++) {
  const countOfEachDigit = String(multiplied)
    .split("")
    .filter((value) => +value === i).length;
}
```

###### String() (문자열 형식으로 변환)

```js
const countOfEachDigit = String(multiplied);

console.log(countOfEachDigit); // 17037300
```

[`String()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)을 활용하여 숫자 형식으로 된 `multiplied`를 문자열 형식으로 변환합니다.

###### split() (각 자리의 숫자로 이루어진 요소로 배열화)

```js
const countOfEachDigit = String(multiplied).split("");

console.log(countOfEachDigit);
// [
//   '1', '7', '0',
//   '3', '7', '3',
//   '0', '0'
// ]
```

매개변수가 `""`가 포함된 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 활용해 문자열 형식으로 변환된 `multiplied`를 <u>각 문자를 요소로 가지는</u> 문자열 형식의 배열로 만듭니다.

###### filter() (일치하는 값이 포함된 새로운 배열)

```js
for (let i = 0; i < 10; i++) {
  const countOfEachDigit = String(multiplied)
    .split("")
    .filter((value) => +value === i);

  console.log(countOfEachDigit);
  // [ '0', '0', '0' ]
  // [ '1' ]
  // []
  // [ '3', '3' ]
  // []
  // []
  // []
  // [ '7', '7' ]
  // []
  // []
}
```

매개변수로 <u>각 배열의 요소가 `i`와 일치하면 반환하는</u> `(value) => +value === i`인 `callback` 함수를 가지는 [`filter()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 메서드를 활용해 `i`와 일치하는 값이 반환된 새로운 배열을 반환합니다.

###### length (배열의 길이)

```js
for (let i = 0; i < 10; i++) {
  const countOfEachDigit = String(multiplied)
    .split("")
    .filter((value) => +value === i).length;

  console.log(countOfEachDigit);
  // 3
  // 1
  // 0
  // 2
  // 0
  // 0
  // 0
  // 2
  // 0
  // 0
}
```

그 후 [`length`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length) 속성으로 배열마다의 길이를 구합니다.

###### console.log (개수 출력)

마지막으로 [`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log)을 활용하여 출력하면 각각의 숫자가 몇 번씩 쓰였는지 개수를 알 수 있습니다.
