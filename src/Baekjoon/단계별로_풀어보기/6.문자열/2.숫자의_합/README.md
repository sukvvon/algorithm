## 1. 아스키 코드

> https://www.acmicpc.net/problem/11720

### 문제

```
N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

출력
입력으로 주어진 숫자 N개의 합을 출력한다.

예제 입력 1
1
1

예제 출력 1
1

예제 입력 2
5
54321

예제 출력 2
15

예제 입력 3
25
7000000000000000000000000

예제 출력 3
7

예제 입력 4
11
10987654321

예제 출력 4
46
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

const [N, data] = inputData;

let sum = 0;

for (let i = 0; i < +N; i++) {
  sum += +data[i];
}

console.log(sum);
```

### 풀이

#### inputData (입력값)

##### readFileSync() (파일 읽어오기)

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 31 31 0a 31 30 39 38 37 36 35 34 33 32 31>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### process.platform (작동 시스템 구별)

```js
process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt";
```

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### toString() (문자열 표현으로 변환)

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData);
// 11
// 10987654321
```

Buffer 형식으로 출력된 `inputData`값을 [`toString`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toString) 메서드로 문자열 표현으로 바꿉니다.

##### split() (배열 생성)

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n");

console.log(inputData); // [ '11', '10987654321' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### N, data (숫자의 개수, 숫자)

```js
const [N, data] = inputData;

console.log(N, data); // 11 10987654321
```

##### 배열 구조 분해

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)를 활용해 배열 `inputData`로부터 `N`과 `data`에 각각 숫자의 개수와 숫자들로 할당합니다.

#### sum (숫자들의 합)

```js
let sum = 0;
```

숫자들의 합을 의미하는 변수 `sum`을 선언하고 `0`으로 초기화합니다.

#### for (숫자들의 합을 구하는 반복문)

```js
for (let i = 0; i < +N; i++) {
  sum += +data[i];
}
```

숫자들의 합을 구하기 위하여 [for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문을 활용하여 `i`의 값을 `0`부터 숫자의 개수를 의미하는 변수 `N`의 형식을 `string`에서 `number`로 바꾼 `+N` 전까지 반복합니다.

##### 더하기 할당 (sum에 +data[i] 더하기)

```js
sum += +data[i];
```

[더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment) 연산자를 활용해서 `+`를 통해 `string`에서 `number`형식으로 바꾼 오른쪽 피연산자의 값인 `+data[i]`을 변수에 더한 결과를 다시 변수에 할당합니다.

반복문 과정이 끝날때까지 반복합니다.

#### console.log() (숫자들의 합 sum 출력하기)

```js
console.log(sum); // 46
```

[`console.log`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `sum`을 출력합니다.
