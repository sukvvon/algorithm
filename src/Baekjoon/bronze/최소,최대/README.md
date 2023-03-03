## 1. 최소,최대

> https://www.acmicpc.net/problem/10818

### 문제

```
최소, 최대

문제
N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

출력
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

예제 입력 1
5
20 10 35 30 7

예제 출력 1
7 35
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

const data = inputData[1].split(" ").map((value) => +value);
const maximum = Math.max(...data);
const minimum = Math.min(...data);

console.log(minimum, maximum);
```

### 풀이

#### inputData (입력값)

##### 파일 읽어오기

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 35 0a 32 30 20 31 30 20 33 35 20 33 30 20 37>
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
// 20 10 35 30 7
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
  .trim()
  .split("\n");

console.log(inputData); // [ '5', '20 10 35 30 7' ]
```

###### split()

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### data (N개의 정수에 대한 배열)

```js
const data = inputData[1].split(" ").map((value) => +value);
```

##### N개의 정수에 대한 배열 생성

```js
const data = inputData[1].split(" ");

console.log(data); // [ '20', '10', '35', '30', '7' ]
```

###### split()

`N`개의 정수에 해당하는 요소인 `inputData[1]`에 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)에 공백을 의미하는 `" "`을 매개변수로 넣어 `N`개의 정수에 대한 배열을 생성합니다.

##### 배열 형식 숫자로 변환

```js
const data = inputData[1].split(" ").map((value) => +value);

console.log(data); // [ 20, 10, 35, 30, 7 ]
```

###### map()

생성된 배열의 형식은 문자열입니다. 배열의 형식을 숫자 형식으로 변환하기 위해 [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 매개변수 `callback` 함수를 `(value) => +value`로 하여 모든 배열내의 요소가 <u>숫자 형식으로 변환</u>되게 합니다.

#### maximun (최댓값)

```js
const maximum = Math.max(...data);

console.log(maximun); // 35
```

##### 최댓값 반환

###### Math.max()

[`Math.max()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max) 함수를 통해 최댓값을 반환합니다.

###### 전개 구문

```js
const maximum1 = Math.max(...data);
console.log(maximum1); // 35

const maximum2 = Math.max(20, 10, 35, 30, 7);
console.log(maximum2); // 35

// maximum1과 maximum2 모두 같다.
```

`Math.max()` 함수 내에 매개변수로 [전개 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 활용해 <u>배열 내 요소</u>를 `...data`로 넣습니다.

#### minimum (최솟값)

```js
const minimum = Math.min(...data);

console.log(minimum); // 7
```

##### 최솟값 반환

###### Math.min()

[`Math.min()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min) 함수를 통해 최솟값을 반환합니다.

###### 전개 구문

```js
const minimum1 = Math.min(...data);
console.log(minimum1); // 7

const minimum2 = Math.max(20, 10, 35, 30, 7);
console.log(minimum2); // 7

// minimum1과 minimum2 모두 같다.
```

`Math.min()` 함수 내에 매개변수로 [전개 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 활용해 <u>배열 내 요소</u>를 `...data`로 넣습니다.

#### 결과값 출력하기

```js
console.log(minimum, maximum); // 7 35
```

##### console.log()

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `minimum`과 `maximum`을 출력합니다.
