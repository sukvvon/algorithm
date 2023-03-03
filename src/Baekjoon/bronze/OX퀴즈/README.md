## 6. OX퀴즈

> https://www.acmicpc.net/problem/8958

### 문제

```
OX퀴즈

문제
"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.

출력
각 테스트 케이스마다 점수를 출력한다.

예제 입력 1
5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX

예제 출력 1
10
9
7
55
30
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

const count = inputData[0];

for (let i = 1; i <= count; i++) {
  let value = 0;
  let sum = 0;

  const quizs = inputData[i].split("");
  const newQuizs = quizs.map((quiz) => {
    if (quiz === "O") {
      value += 1;
      return value;
    }
    if (quiz === "X") {
      value = 0;
      return value;
    }
    return quiz;
  });

  for (y = 0; y < newQuizs.length; y++) {
    sum += newQuizs[y];
  }

  console.log(sum);
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

console.log(inputData); // <Buffer 35 0a 4f 4f 58 58 4f 58 58 4f 4f 4f 0a 4f 4f 58 58 4f 4f 58 58 4f 4f 0a 4f 58 4f 58 4f 58 4f 58 4f 58 4f 58 4f 58 0a 4f 4f 4f 4f 4f 4f 4f 4f 4f 4f 0a ... 15 more bytes>
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
// OOXXOXXOOO
// OOXXOOXXOO
// OXOXOXOXOXOXOX
// OOOOOOOOOO
// OOOOXOOOOXOOOOX
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
// 5
// OOXXOXXOOO
// OOXXOOXXOO
// OXOXOXOXOXOXOX
// OOOOOOOOOO
// OOOOXOOOOXOOOOX
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
//   '5',
//   'OOXXOXXOOO',
//   'OOXXOOXXOO',
//   'OXOXOXOXOXOXOX',
//   'OOOOOOOOOO',
//   'OOOOXOOOOXOOOOX'
// ]
```

###### split()

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### count

```js
const count = inputData[0];

console.log(count); // 5
```

##### 테스트 케이스의 개수

테스트 케이스의 개수를 뜻하는 `inputData[0]`을 변수 `count`에 할당합니다.

#### for (각 퀴즈 결과에 대한 반복문)

```js
for (let i = 1; i <= count; i++) {
  let value = 0;
  let sum = 0;

  const quizs = inputData[i].split("");
  const newQuizs = quizs.map((quiz) => {
    if (quiz === "O") {
      value += 1;
      return value;
    }
    if (quiz === "X") {
      value = 0;
      return value;
    }
    return quiz;
  });

  for (y = 0; y < newQuizs.length; y++) {
    sum += newQuizs[y];
  }

  console.log(sum);
}
```

```js
for (let i = 1; i <= count; i++) {}
```

[for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문으로 `inputData[i]`에 대한 반복문을 실행할 것이기 때문에 `i`의 범위를 테스트 케이스의 개수를 의미하는 `0`이 아닌 `1`부터 `count`까지로 합니다.

##### value (O, X에 대한 점수)

```js
let value = 0;
```

`O`과 `X`에 대한 점수를 의미하는 변수 `value`를 선언하고 `0`으로 초기화합니다.

##### sum (점수들의 합)

```js
let sum = 0;
```

점수들의 합산을 의미하는 변수 `sum`을 선언하고 `0`으로 초기화합니다.

##### quizs (각 OX퀴즈의 결과 배열화하기)

```js
for (let i = 1; i <= count; i++) {
  let value = 0;
  let sum = 0;

  const quizs = inputData[i].split("");

  console.log(quizs);
}
// expected output:
// [
//   'O', 'O', 'X', 'X',
//   'O', 'X', 'X', 'O',
//   'O', 'O'
// ]
// [
//   'O', 'O', 'X', 'X',
//   'O', 'O', 'X', 'X',
//   'O', 'O'
// ]
// [
//   'O', 'X', 'O', 'X',
//   'O', 'X', 'O', 'X',
//   'O', 'X', 'O', 'X',
//   'O', 'X'
// ]
// [
//   'O', 'O', 'O', 'O',
//   'O', 'O', 'O', 'O',
//   'O', 'O'
// ]
// [
//   'O', 'O', 'O', 'O',
//   'X', 'O', 'O', 'O',
//   'O', 'X', 'O', 'O',
//   'O', 'O', 'X'
// ]
```

###### split()

매개변수 `""`를 가지는 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 활용하여 <u>문자열에 있는 각 문자들을 요소로 가지는 배열</u>로 배열화한 후 `quizs` 변수에 할당합니다.

##### newQuizs (점수를 매긴 각 OX퀴즈들의 배열)

```js
for (let i = 1; i <= count; i++) {
  let value = 0;
  let sum = 0;

  const quizs = inputData[i].split("");
  const newQuizs = quizs.map((quiz) => {
    if (quiz === "O") {
      value += 1;
      return value;
    }
    if (quiz === "X") {
      value = 0;
      return value;
    }
    return quiz;
  });

  console.log(newQuizs);
}
// expected output:
// [
//   1, 2, 0, 0, 1,
//   0, 0, 1, 2, 3
// ]
// [
//   1, 2, 0, 0, 1,
//   2, 0, 0, 1, 2
// ]
// [
//   1, 0, 1, 0, 1, 0,
//   1, 0, 1, 0, 1, 0,
//   1, 0
// ]
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
// [
//   1, 2, 3, 4, 0, 1,
//   2, 3, 4, 0, 1, 2,
//   3, 4, 0
// ]
```

###### map()

```js
const newQuizs = quizs.map((quiz) => {
  if (quiz === "O") {
    value += 1;
    return value;
  }
  if (quiz === "X") {
    value = 0;
    return value;
  }
  return quiz;
});
```

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드를 활용하여 매개변수 `callback` 함수 내의 if...else문으로 `O`와 `X`별로 점수를 매깁니다. 그 후 과정이 끝나면 값을 `newQuizs` 변수에 할당합니다.

###### if...else

```js
if (quiz === "O") {
  value += 1;
  return value;
}
if (quiz === "X") {
  value = 0;
  return value;
}
return quiz;
```

> O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

> "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

퀴즈의 값이 `O`인 경우

점수는 연속된 `O`의 개수가 되기 때문에 `X`가 나오기 전까진 `1`씩 증가해야합니다. 따라서 더하기 할당을 통해 `value += 1` 즉 `value` 값이 `0`, `1`, `2` 이런식으로 할당시키고, 할당된 `value` 값을 배열 내 요소에 반환합니다.

퀴즈의 값이 `X`인 경우

배열의 요소가 `X`가 나오는 순간 점수는 `0`점이 됩니다. 그러므로 `value = 0` 즉 `value` 값을 `0`으로 초기화시킵니다. 그리고 그 값을 `X`인 배열의 요소에 반환합니다.

`O`, `X` 둘 다 아닌 경우

둘 다 아닌 경우는 문제상 존재하진 않지만 `quiz` 즉 배열의 요소 그대로 반환합니다.

##### for (점수 합하기)

```js
for (y = 0; y < newQuizs.length; y++) {
  sum += newQuizs[y];
}
```

```js
for (y = 0; y < newQuizs.length; y++) {}
```

배열 내의 모든 점수를 합해야하기 때문에 변수 `y`의 범위를 시작인 `0`부터 `newQuizs` 배열의 전체 길이를 의미하는 `newQuizs.length` 전까지 반복문을 수행하게 합니다.

###### 더하기 할당

```js
for (y = 0; y < newQuizs.length; y++) {
  sum += newQuizs[y];
}
```

[더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment)을 통해 `newQuize` 배열 내의 모든 요소들을 합하여 `sum`에 할당합니다.

##### console.log()

```js
console.log(sum);
// 10
// 9
// 7
// 55
// 30
```

마지막으로 [`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log)을 활용하여 `sum`을 출력합니다.
