## 3. 합

> https://www.acmicpc.net/problem/8393

### 문제

```
합

문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.

예제 입력 1
3

예제 출력 1
6
```

### 해답

```js
const fs = require("fs");

const inputData = +fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

let result = 0;

for (let i = 0; i <= inputData; i++) {
  result += i;
}

console.log(result);
```

### 풀이

#### inputData

##### 파일 읽어오기

###### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 33>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### 작동 시스템 구별

###### process.platform

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### 실수 형식으로 변환

###### +

```js
const fs = require("fs");

const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // 3
```

Buffer 형식으로 출력된 값을 `inputData`로 정의하려는 식 앞에 `+`를 붙여 실수 형식으로 변환합니다.

#### result

##### 결과값 선언 및 초기화

```js
let result = 0;
```

1부터 n까지 합을 담을 변수 `result`를 0으로 초기화하여 선언합니다.

#### 결과값 구하기

##### for

```js
for (let i = 0; i <= inputData; i++) {}
```

[for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for) 문을 통해 `i`를 `0`으로 초기화하여 `i` 값을 `1`씩 증가시키면서 `inputData`까지 증가하여 `inputData + 1`번 반복하게끔 합니다.

##### 모든 i 값 더하기

###### 더하기 할당

```js
for (let i = 0; i <= inputData; i++) {
  result += i;
}
// ex) inputData = 3
// 1 time: 0 = 0 + 0
// 2 time: 1 = 0 + 1
// 3 time: 3 = 1 + 2
// 4 time: 6 = 3 + 3
```

[할당 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%ED%95%A0%EB%8B%B9_%EC%97%B0%EC%82%B0%EC%9E%90)의 [더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment)을 통해 반복문을 통해 순환되는 모든 `i`값을 `result`에 더합니다.

#### 결과값 출력

##### console.log()

```js
console.log(result);
```

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log#content) 메서드를 통해 `result`값을 출력합니다.
