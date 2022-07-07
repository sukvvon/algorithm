## 6. 오븐 시계

> https://www.acmicpc.net/problem/2525

### 문제

```
오븐 시계

문제
KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다.

또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다.

훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

입력
첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다.

출력
첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)

예제 입력 1
14 30
20

예제 출력 1
14 50

예제 입력 2
17 40
80

예제 출력 2
19 0

예제 입력 3
23 48
25

예제 출력 3
0 13
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

const [timeData, plusMinuteData] = inputData;

const plusMinute = +plusMinuteData;

const time = timeData.split(" ").map((value) => +value);
const [hour, minute] = time;

function ovenClock(hour, minute, plusMinute) {
  minute += plusMinute;
  while (minute >= 60) {
    minute -= 60;
    hour += 1;
  }
  if (hour >= 24) {
    hour -= 24;
  }
  return [hour, minute];
}

[resultHour, resultMinute] = ovenClock(hour, minute, plusMinute);

console.log(resultHour, resultMinute);
```

### 풀이

#### inputData

##### 파일 부르기

###### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 31 37 20 34 30 0a 38 30>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### 작동 시스템 구별

###### process.platform

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### 문자열 형식으로 변환

###### toString()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData);
// 17 40
// 80
```

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### 배열 생성

###### split()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n");

console.log(inputData); // [ '17 40', '80' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)를 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

##### 배열 구조 분해

```js
const [timeData, plusMinuteData] = inputData;
console.log(timeData, plusMinuteData); // 17 40 80
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 `inputData`를 배열 속의 현재 시간을 의미하는 `timeData`, 추가되는 시간을 의미하는 `plusMinuteData`에 값을 할당합니다.

#### plusMinute

##### 문자열을 실수로 변한

###### +

```js
const plusMinute = +plusMinuteData;
console.log(plusMinute); // 80
```

문자열 형식인 추가되는 시간을 의미하는 `plusMinuteData`를 <u>연산을 하기 위해</u> 실수 형태로 변환시켜줍니다.

#### time

```js
const time = timeData.split(" ").map((value) => +value);
const [hour, minute] = time;
```

##### 배열 생성

###### split()

```js
const time = timeData.split(" ");
console.log(time); // [ '17', '40' ]
```

현재 시간을 의미하는 `timeData`에서 [`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) 메서드를 활용하여 공백을 의미하는 `" "`을 매개변수로 하여 배열을 생성합니다.

##### 문자열 배열에서 실수 배열로 변환

###### map()

```js
const time = timeData.split(" ").map((value) => +value);
console.log(time); // [ 17, 40 ]
```

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드의 callback 함수를 활용하여 `string` 형식이었던 배열의 각 값을 `number` 형식으로 바꿉니다.

##### 배열 구조 분해

```js
const [hour, minute] = time;
console.log(hour, minute); // 17 40
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 `time`을 배열 속의 현재 시간의 `시`를 의미하는 `hour`, 현재 시간을 `분` 의미하는 `minute`에 값을 할당합니다.

#### ovenClock()

```js
function ovenClock(hour, minute, plusMinute) {
  minute += plusMinute;
  while (minute >= 60) {
    minute -= 60;
    hour += 1;
  }
  if (hour >= 24) {
    hour -= 24;
  }
  return [hour, minute];
}
```

오븐 시간을 계산하며 매개변수 `hour`, `minute`, `plusMinute`을 요구하는 `ovenClock()` 함수를 만듭니다.

[if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문과, [while](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while)문과 [할당연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%ED%95%A0%EB%8B%B9_%EC%97%B0%EC%82%B0%EC%9E%90)를 활용하여

##### 현재 시간에 추가할 시간 더하기

###### +=

```js
function ovenClock(hour, minute, plusMinute) {
  minute += plusMinute; // expected output: 17 120
}
```

우선 현재 시간에서 추가할 시간을 더해야 하므로 `minute += plusMinute`의 과정을 거치면 결과는 `17 120`이 됩니다.

##### 60분을 초과한 경우

###### while

```js
function ovenClock(hour, minute, plusMinute) {
  minute += plusMinute;
  while (minute >= 60) {
    minute -= 60; // expected output: 60 => 0
    hour += 1; // expected output: 18 => 19
  }
}
```

`17 120`에서 `while`문을 만나 조건인 `minute >= 60`에 만족하지 않을 때까지 `minute -= 60`과 `hour += 1`을 수행합니다.

첫번째 사이클의 결과는 `18 60`입니다. 조건 `minute >= 60`에 만족하므로 한 번 더 진행합니다.

두번째 사이클의 결과는 `19 0`입니다. 조건 `minute >= 60`에 만족하지 않으므로 `while`문을 빠져나옵니다.

##### 24시를 초과한 경우

###### if...else

```js
function ovenClock(hour, minute, plusMinute) {
  minute += plusMinute;
  while (minute >= 60) {
    minute -= 60;
    hour += 1;
  }
  if (hour >= 24) {
    hour -= 24; // expected output: 19
  }
}
```

만약 시가 24를 초과하여 25, 26과 같이 될 경우를 대비하여

`hour >= 24` 조건을 만족시킨다면 `hour -= 24`를 통해 24시간을 빼줍니다.

##### return

```js
function ovenClock(hour, minute, plusMinute) {
  minute += plusMinute;
  while (minute >= 60) {
    minute -= 60;
    hour += 1;
  }
  if (hour >= 24) {
    hour -= 24;
  }
  return [hour, minute];
}
```

위의 과정들을 통해 계산된 `hour`과 `minute`를 [return](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return) 명령문을 통해 배열로 반환해줍니다.

##### 배열 구조 분해

```js
[resultHour, resultMinute] = ovenClock(hour, minute, plusMinute);
console.log(resultHour); // 19
console.log(resultMinute); // 0
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 `ovenClock(hour, minute, plusMinute)`을 통해 반환된 배열 `[hour, minute]`로부터 `resultHour`, `resultMinute`에 값을 할당합니다.

#### 결과 출력

##### console.log()

```js
console.log(resultHour, resultMinute); // 19 0
```

[console.log()](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `resultHour`, `resultMinute`을 출력하면 `14 30` 그리고 `20`인 경우 `14 50`이 출력되고 `17 40` 그리고 `80`인 경우 `19 0`이 출력되고 `23 48` 그리고 `25`인 경우 `0 13`이 출력되는 것을 알 수 있습니다.
