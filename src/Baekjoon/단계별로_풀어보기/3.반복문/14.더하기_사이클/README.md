## 14. 더하기 사이클

> https://www.acmicpc.net/problem/1110

### 문제

```
더하기 사이클

문제
0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 다음 예를 보자.

26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.

위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N이 주어진다. N은 0보다 크거나 같고, 99보다 작거나 같은 정수이다.

출력
첫째 줄에 N의 사이클 길이를 출력한다.

예제 입력 1
26

예제 출력 1
4

예제 입력 2
55

예제 출력 2
3

예제 입력 3
1

예제 출력 3
60

예제 입력 4
0

예제 출력 4
1

예제 입력 5
71

예제 출력 5
12
```

### 해답

```js
const fs = require("fs");

const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

let value = inputData;
let sum;
let cycle = 0;

do {
  cycle++;
  sum = Math.floor(value / 10) + (value % 10);
  value = (value % 10) * 10 + (sum % 10);
} while (inputData !== value);

console.log(cycle);
```

### 풀이

#### inputData (입력값)

```js
const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);
```

##### 파일 읽어오기

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 32 36>
```

###### readFileSync()

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### 작동 시스템 구별

```js
process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt";
```

###### process.platform

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### 숫자 형식으로 변환

```js
const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // 26
```

###### +

`+`를 통해 버퍼 형식이었던 값을 숫자 형식으로 변환해줍니다.

#### value

```js
let value = inputData;

console.log(value); // 26
```

##### value로 inputData 값 선언

###### let

`inputData`의 값을 `value`라는 변수로 [`let`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) 명령문을 활용하여 선언해줍니다.

`let` 명령문으로 `value` 값은 <u>수정 가능한 값</u>이 됩니다.

#### sum

```js
let sum;

console.log(sum); // undefined
```

##### value 값의 일의 자리와 십의 자리의 합

###### let

`sum` 변수는 <u>`value`값의 십의 자리와 일의 자리를 합한 수를 담는 변수</u>입니다.

[`let`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) 명령문을 활용하여 선언해줘 `sum`은 <u>수정 가능한 값</u>이 됩니다.

#### cycle

```js
let cycle = 0;

console.log(cycle); // 0
```

##### 사이클의 길이

###### let

[`let`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) 명령문을 활용하여 <u>사이클의 길이를 의미하는 변수</u> `cycle`을 `0`으로 선언합니다.

초기 사이클의 값은 0이고 `cycle`은 <u>수정 가능한 값</u>이 됩니다.

#### do...while

```js
do {
  cycle++;
  sum = Math.floor(value / 10) + (value % 10);
  value = (value % 10) * 10 + (sum % 10);
} while (inputData !== value);
```

[do...while](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/do...while)을 활용해 사이클의 값을 구합니다.

##### cycle++ (cycle값 1개씩 증가)

```js
do {
  cycle++
} while ();
```

###### ++

[증가(++)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)를 통해 `cycle`은 과정이 한 번 시작되었기 때문에 do...while문이 시작함과 동시에 증가하게 합니다.

##### sum (value의 일의 자리 십의 자리 합)

```js
do {
  cycle++;
  sum = Math.floor(value / 10) + (value % 10);
} while ();

// expected output:
// 2 + 6 = 8
```

###### Math.floor

[`Math.floor`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 함수를 통해 <u>주어진 수 이하의 가장 큰 정수</u>를 반환합니다.

즉 예제값 `26`을 `value / 10`의 과정을 거치면 `2.6`이 됩니다. 여기서 `Math.floor`를 통해 반환한 값은 `2`입니다. 값의 십의 자리를 반환하는 것입니다.

이렇게 반환한 값과 `value % 10` 나머지 즉 일의 자리 값, 예제로 따지면 `6`을 합합니다.

그리하여 `sum`의 값은 `8`이 됩니다.

##### value

```js
do {
  cycle++;
  sum = Math.floor(value / 10) + (value % 10);
  value = (value % 10) * 10 + (sum % 10);
} while ();

// expected output:
// 60 + 8 = 68
```

`value`는 초기값으로 `inputData`를 가지는 값을 가지고 있습니다.

> 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다.

위 블록주석대로 `(value % 10) * 10` 연산을 통해 주어진 수의 가장 오른쪽 자리 수, 즉 `value`를 `10`으로 나눈 나머지를 구하고 10을 곱하고,

`sum % 10` 연산을 통해 합의 가장 오른쪽 자리 수, 즉 `sum`을 `10`으로 나눈 나머지를 구하여 둘을 합합니다.

합한 값을 `value` 값으로 초기화합니다.

##### while 내의 조건식

```js
do {
  cycle++;
  sum = Math.floor(value / 10) + (value % 10);
  value = (value % 10) * 10 + (sum % 10);
} while (inputData !== value);
```

초기값인 `inputData`와 다시 초기화가 된 `value` 값이 일치하지 않으면 즉 `true`면 do...while 문을 빠져나오지 않고 계속 일치할때까지 진행하고, 일치하면 즉 `false`라면 빠져나옵니다.

#### 결과값 출력하기

```js
console.log(cycle); // 4
```

##### cycle 출력

###### console.log()

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `cycle` 값을 출력합니다.
