## 5. N 찍기

> https://www.acmicpc.net/problem/2741

### 문제

```
N 찍기

문제
자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

출력
첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

예제 입력 1
5

예제 출력 1
1
2
3
4
5
```

### 해답

```js
const fs = require("fs");

const inputData = +fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

let result = "";

for (let i = 1; i <= inputData; i++) {
  result += `${i}\n`;
}

console.log(result);
```

### 풀이

#### inputData

##### 파일 읽어오기

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 35>
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

console.log(inputData); // 5
```

###### toString()

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### 숫자 형식으로 변환

```js
const inputData = +fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData); // 5
```

###### +

`String` 형식으로 출력된 값을 `+` 을 통해 문자열 형식에서 숫자 형식으로 바꿉니다.

#### result

##### 결과값들을 담을 변수

```js
let result = "";
```

결과값이 담길 변수 `result`을 선언하고, `""` 즉 빈 값으로 초기화합니다.

#### for

```js
for (let i = 1; i <= inputData; i++) {}
```

> `inputData` 값이 예제에서 `5`이므로 `1`의 경우부터 `5`의 경우까지 반복합니다.

`1`부터 `inputData` 까지의 값을 출력해야하기 때문에

`i`값을 `1`로 선언하고 `1`부터 `inputData`까지 [for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)문을 반복하게 합니다.

##### result에 i 값 줄바꿈하여 넣기

```js
for (let i = 1; i <= inputData; i++) {
  result += `${i}\n`;
}
// expected output:
// 1
// 2
// 3
// 4
// 5
```

###### Templete literals

[Templete literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)를 통해 자연수인 `i` 값이 연산이 되지 않도록 문자열 형식이 되게 합니다.

###### 더하기 할당

[더하기 할당 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment)를 활용하여 `\n`을 통해 오른쪽 피연산자의 값인 `i` 값이 `result`으로 더해져도 <u>다음줄에서 더해지게</u> 합니다.

#### 출력하기

```js
console.log(result);
// 1
// 2
// 3
// 4
// 5
```

##### console.log()

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log)를 통해 `result` 값을 출력합니다.
