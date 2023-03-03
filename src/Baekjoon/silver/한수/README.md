## 3. 한수

> https://www.acmicpc.net/problem/1065

### 문제

```
한수

문제
어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

출력
첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

예제 입력 1
110

예제 출력 1
99

예제 입력 2
1

예제 출력 2
1

예제 입력 3
210

예제 출력 3
105

예제 입력 4
1000

예제 출력 4
144

예제 입력 5
500

예제 출력 5
119
```

### 해답

```js
const fs = require("fs");

const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

function arithmeticalSequence(n) {
  if (n < 100) {
    return true;
  } else if (n < 1000) {
    const number = n % 10;
    const tens = Math.floor(n / 10) % 10;
    const hundreds = Math.floor(n / 100);
    if (number - tens === tens - hundreds) {
      return true;
    } else {
      return false;
    }
  }
}

let count = 0;

for (let i = 1; i <= inputData; i++) {
  if (arithmeticalSequence(i)) {
    count++;
  }
}

console.log(count);
```

### 풀이

#### inputData (입력값)

##### readFileSync() (파일 읽어오기)

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 31 30 30 30>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### process.platform (작동 시스템 구별)

```js
process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt";
```

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### + (숫자형으로 변환)

```js
const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // 1000
```

Buffer 형식으로 출력된 `inputData`값을 숫자형으로 변환시킵니다.

#### arithmeticalSequence(n) (한수를 구하는 함수)

```js
function arithmeticalSequence(n) {
  if (n < 100) {
    return true;
  } else if (n < 1000) {
    const number = n % 10;
    const tens = Math.floor(n / 10) % 10;
    const hundreds = Math.floor(n / 100);
    if (number - tens === tens - hundreds) {
      return true;
    } else {
      return false;
    }
  }
}
```

일정한 범위 내에서 한수의 개수를 출력을 해야합니다. 우선 특정한 수가 한수 즉 등차수열인지 아닌지를 가려내는 함수를 생성합니다.

##### if...else (범위마다 한수 추려내기)

```js
if (n < 100) {
  return true;
} else if (n < 1000) {
  const number = n % 10;
  const tens = Math.floor(n / 10) % 10;
  const hundreds = Math.floor(n / 100);
  if (number - tens === tens - hundreds) {
    return true;
  } else {
    return false;
  }
}
```

`1000` 보다 작거나 같은 자연수에 중에 한수를 찾아내는 것이기 때문에 [if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문을 활용하여 범위마다 구분합니다.

###### n < 100 (n이 100보다 작을 때)

```js
if (n < 100) {
  return true;
}
```

`n` 값이 `100`보다 작을 경우 <u>각 자리의 수가 모두 등차수열을 이루기</u> 때문에 `true` 값을 반환합니다.

###### n < 1000 (n 100 이상이면서 1000보다 작을 경우)

```js
if (n < 100) {
  return true;
} else if (n < 1000) {
  const number = n % 10;
  const tens = Math.floor(n / 10) % 10;
  const hundreds = Math.floor(n / 100);
  if (number - tens === tens - hundreds) {
    return true;
  } else {
    return false;
  }
}
```

> 등차수열: 연속하는 두 항의 차이가 모두 일정한 수열

모두 `true`인 `100`미만의 경우를 제외하고 `100`이상 `1000` 미만일 경우 즉 세 자리 수부터는 각 자리수가 등차수열이 될 수 없는 경우가 존재합니다.

그 존재를 가려내기 위해서 `number`, `tens`, `hundreds`와 같이 각각 일의 자리 수, 십의 자리 수, 백의 자리 수를 의미하는 변수를 만들고,

등차수열의 특징에 따라 <u>연속하는 두 항의 차이가 모두 일정</u>해야하므로 `number - tens === tens - hundreds` 즉 일의 자리 수와 십의 자리 수의 차이가 십의 자리 수와 백의 자리 수의 차이와 같다면 `true`를 반환하고, 그것이 아니라면 `false`를 반환하게 합니다.

#### count (한수의 개수)

```js
let count = 0;
```

한수의 개수를 의미하는 변수 `count`를 선언하고 `0`으로 초기화합니다.

#### for (inputData 값 이하의 수 한수 판단)

```js
for (let i = 1; i <= inputData; i++) {
  if (arithmeticalSequence(i)) {
    count++;
  }
}
```

[for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문을 통해 `i`의 범위를 `1`부터 주어진 자연수인 `inputData`만큼으로 하여 이하의 식을 수행하게 합니다.

##### if...else (한수일 경우 count 값 증가)

```js
if (arithmeticalSequence(i)) {
  count++;
}
```

위에서 정의한 한수를 판별하는 함수인 `arithmeticalSequence(i)`를 통해 `i`의 값이 한수이면 즉 반환하는 값이 `true`이면 [증가 연산자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)를 통해 증가시킵니다.

#### console.log() (한수의 개수 출력하기)

```js
console.log(count); // 144
```

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 활용해 한수의 개수를 의미하는 변수 `count`를 출력합니다.
