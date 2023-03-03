## 4. 나머지

> https://www.acmicpc.net/problem/3052

### 문제

```
나머지

문제
두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.

수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

입력
첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

출력
첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

예제 입력 1
1
2
3
4
5
6
7
8
9
10

예제 출력 1
10

각 수를 42로 나눈 나머지는 1, 2, 3, 4, 5, 6, 7, 8, 9, 10이다.

예제 입력 2
42
84
252
420
840
126
42
84
420
126

예제 출력 2
1

모든 수를 42로 나눈 나머지는 0이다.

예제 입력 3
39
40
41
42
43
44
82
83
84
85

예제 출력 3
6

각 수를 42로 나눈 나머지는 39, 40, 41, 0, 1, 2, 40, 41, 0, 1이다.
```

### 해답

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

const remainder = inputData.map((value) => +value % 42);

const deduplication = remainder.filter(
  (value, index) => remainder.indexOf(value) === index
);

console.log(deduplication.length);
```

### 풀이

#### inputData (입력값)

##### 파일 읽어오기

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 33 39 0a 34 30 0a 34 31 0a 34 32 0a 34 33 0a 34 34 0a 38 32 0a 38 33 0a 38 34 0a 38 35>
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
// 39
// 40
// 41
// 42
// 43
// 44
// 82
// 83
// 84
// 85
```

###### toString()

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### 공백 제거

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .trim();

console.log(inputData);
// 39
// 40
// 41
// 42
// 43
// 44
// 82
// 83
// 84
// 85
```

###### trim()

[`trim()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) 메서드를 활용하여 <u>문자열 양 끝의 공백을 제거</u>합니다.

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
//   '39', '40', '41',
//   '42', '43', '44',
//   '82', '83', '84',
//   '85'
// ]
```

###### split()

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### remainder (나머지)

```js
const remainder = inputData.map((value) => +value % 42);

console.log(remainder);
// [
//   39, 40, 41, 0, 1,
//    2, 40, 41, 0, 1
// ]
```

##### 42로 나눈 나머지로 이루어진 배열

###### map()

각 수를 42로 나눈 나머지를 구하기 위해서 [`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 매개변수 `callback` 함수를 `(value) => +value % 42`로 하여 모든 배열 내부의 요소를 <u>문자열에서 숫자 형식으로 바꾼 후 42로 나눈 나머지를</u> 반환합니다.

#### deduplication (중복 제거)

```js
const deduplication = remainder.filter(
  (value, index) => remainder.indexOf(value) === index
);

console.log(deduplication); // [ 39, 40, 41, 0, 1, 2 ]
```

##### 배열 내 중복 요소 제거

###### filter()

매개변수로 <u>`indexOf(value)`가 `index`와 일치하면 반환하는</u> `(value, index) => reaminder.indexOf(value) === index`인 `callback` 함수를 가지는 [`filter()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 메서드를 활용합니다.

###### indexOf()

| `indexOf(value)` | `index` | `value` |
| :--------------: | :-----: | :-----: |
|       `0`        |   `0`   |  `39`   |
|       `1`        |   `1`   |  `40`   |
|       `2`        |   `2`   |  `41`   |
|       `3`        |   `3`   |   `0`   |
|       `4`        |   `4`   |   `1`   |
|       `5`        |   `5`   |   `2`   |
|       `1`        |   `6`   |  `40`   |
|       `2`        |   `7`   |  `41`   |
|       `0`        |   `8`   |  `39`   |
|       `1`        |   `9`   |  `40`   |

위 표와 같이 [`indexOf`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 메서드를 활용하여 <u>배열에서 지정된 요소를 찾을 수 있는 첫 번째</u>에만 인덱스를 부여합니다.

따라서 `fliter()`의 `callback` 함수인 `(value, index) => reaminder.indexOf(value) === index`에 의한 새로운 배열은 <u>`index(value)`의 값과 `index`의 값이 일치하는 것만 반환</u>하므로 `[ 39, 40, 41, 0, 1, 2 ]`가 됩니다.

#### 중복 제거된 배열의 길이 출력

```js
console.log(deduplication.length); // 6
```

##### console.log(), length

마지막으로 [`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log)와 [`length`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length) 속성을 활용하여 `deduplication.length` 즉 중복을 제거한 배열의 길이를 출력합니다.
