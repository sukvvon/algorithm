## 5. 알람 시계

> https://www.acmicpc.net/problem/2884

### 문제

```
알람 시계

문제
상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.

상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.

이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다.

바로 "45분 일찍 알람 설정하기"이다.

이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.

현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.

입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

출력
첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)

예제 입력 1
10 10

예제 출력 1
9 25

예제 입력 2
0 30

예제 출력 2
23 45

예제 입력 3
23 40

예제 출력 3
22 55
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

const [hour, minute] = inputData;

function alarm(hour, minute) {
  minute -= 45;
  if (minute < 0) {
    minute += 60;
    hour -= 1;
    if (hour < 0) {
      hour = 23;
    }
  }
  return [hour, minute];
}

const [newHour, newMinute] = alarm(hour, minute);

console.log(newHour, newMinute);
```

### 풀이

#### inputData

##### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 30 20 33 30>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

###### process.platform

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### toString()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData); // 0 30
```

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### split()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ");

console.log(inputData); // [ '0', '30' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)를 활용하여 매개변수에 공백을 의미하는 `" "`를 넣어 배열을 만듭니다.

##### map()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ")
  .map((value) => +value);

console.log(inputData); // [ 0, 30 ]
```

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드의 callback 함수를 활용하여 `string` 형식이었던 배열의 각 값을 `number` 형식으로 바꿉니다.

##### 배열 구조 분해

```js
const [hours, minutes] = inputData;
console.log(a); // 0
console.log(b); // 30
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 배열 속의 `a`, `b`에 값을 할당합니다.

#### alarm()

```js
function alarm(hour, minute) {
  minute -= 45;
  if (minute < 0) {
    minute += 60;
    hour -= 1;
    if (hour < 0) {
      hour = 23;
    }
  }
  return [hour, minute];
}
```

사분면을 구별할 수 있는 매개변수 `a`, `b`를 요구하는 `alarm()` 함수를 만듭니다.

##### if...else

[if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문과 [할당연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%ED%95%A0%EB%8B%B9_%EC%97%B0%EC%82%B0%EC%9E%90)를 활용하여

```js
function alarm(hour, minute) {
  minute -= 45; // expected output: 0 -15
}
```

45분 일찍 알람 설정하기로 인해 `minute -= 45`의 과정을 거치면 결과는 `0 -15`가 됩니다.

```js
function alarm(hour, minute) {
  minute -= 45;
  if (minute < 0) {
    minute += 60; // expected output: 0 45
    hour -= 1; // expected output: -1 45
  }
}
```

음수인 분단위는 존재하지가 않으므로 `0 -15`에서 `minute += 60`을 해줍니다. 결과값은 `0 45` 이 되고,

60분을 시간에서 빼서 더하였기 때문에 시간을 1만큼 빼줘 `hour -= 1` 를 거쳐 `-1 45`가 되게 합니다.

```js
function alarm(hour, minute) {
  minute -= 45;
  if (minute < 0) {
    minute += 60;
    hour -= 1;
    if (hour < 0) {
      hour = 23; // expected output: 23 45
    }
  }
}
```

시간에서 0은 자정을 의미하기 때문에 만약 시간을 의미하는 매개변수 `hour`이 `0`보다 작으면 `hour`은 `23`이라고 설정해줍니다.

##### return

```js
function alarm(hour, minute) {
  minute -= 45;
  if (minute < 0) {
    minute += 60;
    hour -= 1;
    if (hour < 0) {
      hour = 23;
    }
  }
  return [hour, minute];
}
```

if...else문을 통해서 계산된 `hour`과 `minute`를 [return](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return) 명령문을 통해 배열로 반환해줍니다.

##### 배열 구조 분해

```js
const [newHour, nweMinute] = alarm(hour, minute);
console.log(newHour); // 23
console.log(newMinute); // 45
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 `alarm(hour, minute)`을 통해 반환된 배열 `[hour, minute]`로부터 `newHour`, `newMinute`에 값을 할당합니다.

#### console.log()

```js
console.log(newHour, newMinute); // 23 45
```

[console.log()](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `newHour`, `newMinute`을 출력하면 `10 10`인 경우 `9 25`가 출력되고 `0, 30`일 경우 `23 45`가 출력되고 `23 40`은 `22 55`가 출력되는 것을 알 수 있습니다.
