## 2. 최댓값

> https://www.acmicpc.net/problem/2562

### 문제

```
최댓값

문제
9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

예를 들어, 서로 다른 9개의 자연수

3, 29, 38, 12, 57, 74, 40, 85, 61

이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

입력
첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

출력
첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

예제 입력 1
3
29
38
12
57
74
40
85
61

예제 출력 1
85
8
```

### 해답

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "src/index.txt")
  .toString()
  .split("\n")
  .map((value) => +value);

const maximum = Math.max(...inputData);
const index = inputData.findIndex((value) => value === maximum) + 1;

console.log(`${maximum}
${index}`);
```

### 풀이

#### inputData (입력값)

##### 파일 읽어오기

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 33 0a 32 39 0a 33 38 0a 31 32 0a 35 37 0a 37 34 0a 34 30 0a 38 35 0a 36 31>
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
// 3
// 29
// 38
// 12
// 57
// 74
// 40
// 85
// 61
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

console.log(inputData);
// [
//   '3',  '29', '38',
//   '12', '57', '74',
//   '40', '85', '61'
// ]
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

console.log(inputData);
// [
//    3, 29, 38, 12, 57,
//   74, 40, 85, 61
// ]
```

###### map()

생성된 배열의 형식은 문자열입니다. 배열의 형식을 숫자 형식으로 변환하기 위해 [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 매개변수 `callback` 함수를 `(value) => +value`로 하여 모든 배열 내부의 요소가 <u>숫자 형식으로 변환</u>되게 합니다.

#### maximun (최댓값)

```js
const maximum = Math.max(...inputData);

console.log(maximun); // 85
```

##### 최댓값 반환

###### Math.max()

[`Math.max()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max) 함수를 통해 최댓값을 반환합니다.

###### 전개 구문

```js
const maximum1 = Math.max(...inputData);
console.log(maximum1); // 85

const maximum2 = Math.max(3, 29, 38, 12, 57, 74, 40, 85, 61);
console.log(maximum2); // 85

// maximum1과 maximum2 모두 같다.
```

`Math.max()` 함수 내에 매개변수로 [전개 구문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 활용해 <u>배열 내 요소</u>를 `inputData`로 넣습니다.

#### index (최댓값 배열의 위치)

```js
const index = inputData.findIndex((value) => value === maximum) + 1;

console.log(index); // 8
```

##### 배열에서 최댓값 index 위치 찾기

###### findIndex

`inputData` 배열에서 매개변수로 `(value) => value === maximum` 즉 <u>배열의 각 요소를 순환하며 최댓값과 일치하는 요소</u>를 찾는 `callback` 함수를 가지는 [`findIndex`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 메서드를 통해 <u>최댓값에 해당하는 `index`</u>를 찾습니다.

배열의 요소들은 처음 시작할 떄 `index`를 `0`을 가집니다. 시작하는 배열의 `index`가 `1` 이어야함으로 `1`을 더해줍니다.

#### 결과값 출력하기

```js
console.log(`${maximum}
${index}`);
// 85
// 8
```

##### console.log()

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 [Templete literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)을 활용하여 `maximum`과 `index`를 줄바꿈을 하여 출력합니다.
