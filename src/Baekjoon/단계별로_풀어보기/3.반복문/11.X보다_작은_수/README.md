## 11. X보다 작은 수

> https://www.acmicpc.net/problem/10871

### 문제

```
X보다 작은 수

문제
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

출력
X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

예제 입력 1
10 5
1 10 4 9 2 3 8 5 7 6

예제 출력 1
1 4 2 3
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

const nx = inputData[0].split(" ").map((value) => +value);
const [n, x] = nx;

const a = inputData[1].split(" ").map((value) => +value);

let result = "";

for (let i = 0; i < n; i++) {
  if (a[i] < x) {
    result += `${a[i]} `;
  }
}

console.log(result);
```

### 풀이

#### inputData (입력값)

##### 파일 읽어오기

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 31 30 20 35 0a 31 20 31 30 20 34 20 39 20 32 20 33 20 38 20 35 20 37 20 36 35>
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
// 10 5
// 1 10 4 9 2 3 8 5 7 65
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

console.log(inputData); // [ '10 5', '1 10 4 9 2 3 8 5 7 65' ]
```

###### split()

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### nx (정수 n개, 조건 x를 가지는 배열)

```js
const nx = inputData[0].split(" ").map((value) => +value);
```

##### nx에 대한 배열 생성

```js
const nx = inputData[0].split(" ");

console.log(nx); // [ 10, 5 ]
```

###### split()

`inputData[0]` 즉 `inputData`의 첫 번째 배열로부터 `" "` 공백을 매개변수로 가지는 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 통해 배열을 생성합니다.

##### nx에 대한 배열 형식 변환

```js
const nx = inputData[0].split(" ").map((value) => +value);

console.log(nx); // [ 10, 5 ]
```

###### map()

생성한 배열을 [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 `callback`함수 `(value) => +value)`를 통해 <u>문자열이였던 형식을 숫자 형식으로</u> 바꿔줍니다.

#### n, x (정수 n개, 조건 x)

```js
const nx = inputData[0].split(" ").map((value) => +value);
const [n, x] = nx;
```

##### 배열 nx를 n, x에 할당

```js
const [n, x] = nx;

console.log(n, x); // 10, 5
```

###### 배열 구조 분해

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)에서 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)를 통해 `nx`로부터 `n`, `x`에 값을 할당합니다.

#### a (n개로 이루어진 수열 a)

```js
const a = inputData[1].split(" ").map((value) => +value);
```

##### 수열 a에 대한 배열 생성

```js
const a = inputData[1].split(" ");

console.log(a);
// [
//   1, 10, 4, 9,  2,
//   3,  8, 5, 7, 65
// ]
```

###### split()

`inputData[1]` 즉 `inputData`의 두 번째 배열로부터 매개변수 `" "`을 포함한 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 통해 배열을 생성합니다.

##### a에 대한 배열 형식 변환

```js
const a = inputData[1].split(" ").map((value) => +value);

console.log(a);
// [
//   1, 10, 4, 9,  2,
//   3,  8, 5, 7, 65
// ]
```

###### map()

생성한 배열을 [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 `callback`함수 `(value) => +value)`를 통해 <u>문자열이였던 형식을 숫자 형식으로</u> 바꿔줍니다.

#### result (x보다 작은 수를 담는 변수)

```js
let result = "";
```

x보다 작은 수를 담는 변수 `result`를 [`let`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) 명령문으로 선언하여 초기화가 가능하게끔 합니다.

#### for (a 수열 내 배열 각각에 대한 반복문)

```js
for (let i = 0; i < n; i++) {
  if (a[i] < x) {
    result += `${a[i]} `;
  }
}
```

> `n` 값이 예제에서 `10`이므로 `0`의 경우부터 `9`의 경우까지 반복합니다.

`i`값을 `0`으로 선언하고 `0`부터 `9`인 `n`까지 [for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문을 반복하게 합니다.

##### a[i]가 x 보다 작은 경우 선별

```js
if (a[i] < x) {
  result += `${a[i]} `;
}
```

###### if...else

```js
if (a[i] < x) {
}
```

수열 `a[i]`의 값이 `x`보다 작은 값들을 선별해야합니다.

[if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문을 활용해서 `a[i] < x`인 조건을 만족하는 값들만 다음 내부에 오는 연산을 수행하도록 합니다.

###### 더하기 할당

```js
if (a[i] < x) {
  result += `${a[i]} `;
}
//expected output: 1 4 2 3
```

[더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment)을 활용해 if...else문을 통과한 수들을 `` result += `${a[i]} ` ``를 통해 `result`값에 할당하도록 합니다.

#### 결과값 출력하기

```js
console.log(result); // 1 4 2 3
```

##### console.log()

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 결과값을 출력합니다.
