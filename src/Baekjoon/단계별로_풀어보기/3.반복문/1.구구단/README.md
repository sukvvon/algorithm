## 1. 구구단

> https://www.acmicpc.net/problem/2739

### 문제

```
구구단

문제
N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

입력
첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

출력
출력형식과 같게 N*1부터 N*9까지 출력한다.

예제 입력 1
2

예제 출력 1
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
```

### 해답

```js
const fs = require("fs");

const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

for (let i = 1; i < 10; i++) {
  console.log(`${inputData} * ${i} = ${inputData * i}`);
}
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

console.log(inputData); // <Buffer 32>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### 작동 시스템 구별

###### process.platform

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### 실수 형식으로 변환

###### +

```js
const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // 2
```

Buffer 형식으로 출력된 값을 `inputData`로 정의하려는 식 앞에 `+`를 붙여 실수 형식으로 변환합니다.

#### 구구단 구하기

```js
for (let i = 1; i < 10; i++) {
  console.log(`${inputData} * ${i} = ${inputData * i}`);
}
```

##### for

```js
for (let i = 1; i < 10; i++) {}
```

구구단을 출력하기 위해 [for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for) 문을 활용하여 `inputData`으로부터 1부터 9까지 곱한 값을 구할 수 있도록 합니다.

##### 출력하기

###### console.log()

```js
for (let i = 1; i < 10; i++) {
  console.log(`${inputData} * ${i} = ${inputData * i}`);
}

// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18
```

[console.log()](https://developer.mozilla.org/ko/docs/Web/API/console/log)와 [Template literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)을 활용해 for문의 `i`값마다 `2 * 1 = 2`와 같은 형식으로 출력할 수 있도록 합니다.
