## 9. 별 찍기 - 1

> https://www.acmicpc.net/problem/2438

### 문제

```
별 찍기 - 1

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
5

예제 출력 1
*
**
***
****
*****
```

### 해답

```js
const fs = require("fs");

const inputData = +fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

for (let i = 1; i <= inputData; i++) {
  let stars = "";

  for (let y = 1; y <= i; y++) {
    stars += "*";
  }

  console.log(stars);
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

console.log(inputData); // <Buffer 35>
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

console.log(inputData); // 5
```

###### toString()

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### 숫자 형식으로 변환

```js
const inputData = +fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData); // 5
```

###### +

문자열 형식이었던 `inputData`에 `+`를 붙혀 숫자 형식으로 변환합니다.

#### for (별이 출력되는 줄의 개수)

```js
for (let i = 1; i <= inputData; i++) {
  let stars = "";

  for (let y = 1; y <= i; y++) {
    stars += "*";
  }

  console.log(stars);
  // *
  // **
  // ***
  // ****
  // *****
}
```

```js
for (let i = 1; i <= inputData; i++) {}
```

<u>별이 출력되는 줄의 수</u>와 관련된 for문입니다.

> `inputData` 값이 예제에서 `5`이므로 `1`의 경우부터 `5`의 경우까지 반복합니다.

별을 출력되는 줄이 총 5줄이기 때문에

`i`값을 `1`로 선언하고 `1`부터 `inputData`까지 [for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문을 반복하게 합니다.

##### stars (별이 담기는 변수)

```js
for (let i = 1; i <= inputData; i++) {
  let stars = "";
}
```

별이 담기는 변수 `stars`를 빈 값으로 선언합니다.

for문이 반복되어 `stars`값에 추후에 어떤 값이 들어와 새로운 값이 되어도 `i`값이 증가하면서 `""` 빈 값으로 초기화됩니다.

##### for (각 줄에 담기는 별의 개수)

```js
for (let i = 1; i <= inputData; i++) {
  let stars = "";

  for (let y = 1; y <= i; y++) {
    stars += "*";
  }
}
```

```js
for (let y = 1; y <= i; y++) {}
```

두번째 for문입니다.

<u>각 줄에 출력되는 별의 개수</u>에 대한 for문입니다.

###### 더하기 할당

```js
for (let y = 1; y <= i; y++) {
  stars += "*";
}

// expected output:
// y가 1일 경우 *
// y가 2일 경우 **
// y가 3일 경우 ***
// y가 4일 경우 ****
// y가 5일 경우 *****
```

[더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment)을 활용합니다.

반복문 for문에 의하여 `i`값이 `1`이라면 `*`가 출력될 것이고 `2`라면 `**`가 출력될 것입니다.

##### 출력하기

```js
for (let i = 1; i <= inputData; i++) {
  let stars = "";

  for (let y = 1; y <= i; y++) {
    stars += "*";
  }

  console.log(stars);
  // *
  // **
  // ***
  // ****
  // *****
}
```

###### console.log()

```js
console.log(stars);
// *
// **
// ***
// ****
// *****
```

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `stars` 변수를 출력합니다.
