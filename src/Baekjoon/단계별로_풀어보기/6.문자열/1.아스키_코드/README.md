## 1. 아스키 코드

> https://www.acmicpc.net/problem/11654

### 문제

```
아스키 코드

문제
알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

입력
알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

출력
입력으로 주어진 글자의 아스키 코드 값을 출력한다.

예제 입력 1
A

예제 출력 1
65

예제 입력 2
C

예제 출력 2
67

예제 입력 3
0

예제 출력 3
48

예제 입력 4
9

예제 출력 4
57

예제 입력 5
a

예제 출력 5
97

예제 입력 6
z

예제 출력 6
122
```

### 해답

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

const ascii = inputData.charCodeAt();

console.log(inputData.charCodeAt());
```

### 풀이

#### inputData (입력값)

##### readFileSync() (파일 읽어오기)

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 41>
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

console.log(inputData); // A
```

Buffer 형식으로 출력된 `inputData`값을 [`toString`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toString) 메서드로 문자열 표현으로 바꿉니다.

#### ascii (ASCII 코드 값)

```js
const ascii = inputData.charCodeAt();
```

##### charChodeAt() (ASCII 코드로 변환)

> Unicode code points range from 0 to 1114111 (0x10FFFF). The first 128 Unicode code points are a direct match of the ASCII character encoding. For information on Unicode, see the JavaScript Guide.

[`charCodeAt`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)에 의하면 처음 128 유니 코드 코드 포인트는 ASCII 문자 인코딩과 직접 일치한다고 합니다.

[`charCodeAt`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)를 통해 `inputData` 값을 ASCII 코드로 변환한 값을 반환합니다.

#### console.log() (결과값 출력)

```js
console.log(ascii); // 65
```

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 활용해 ASCII 코드로 변환한 값인 `ascii`를 출력합니다.
