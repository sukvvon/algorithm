## 11. 1998년생인 내가 태국에서는 2541년생?!

> https://www.acmicpc.net/problem/18108

### 문제

```
1998년생인 내가 태국에서는 2541년생?!

문제
ICPC Bangkok Regional에 참가하기 위해 수완나품 국제공항에 막 도착한 팀 레드시프트 일행은 눈을 믿을 수 없었다. 공항의 대형 스크린에 올해가 2562년이라고 적혀 있던 것이었다.

불교 국가인 태국은 불멸기원(佛滅紀元), 즉 석가모니가 열반한 해를 기준으로 연도를 세는 불기를 사용한다. 반면, 우리나라는 서기 연도를 사용하고 있다. 불기 연도가 주어질 때 이를 서기 연도로 바꿔 주는 프로그램을 작성하시오.

입력
서기 연도를 알아보고 싶은 불기 연도 y가 주어진다. (1000 ≤ y ≤ 3000)

출력
불기 연도를 서기 연도로 변환한 결과를 출력한다.

예제 입력 1
2541

예제 출력 1
1998
```

### 해답

```js
const fs = require("fs");

const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData - 543);
```

### 풀이

#### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 32 35 34 31>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### process.platform

백준의 파일 경로는 `"/dev/stdin"`입니다.

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

#### +

```js
const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // 2541
```

Buffer 형식으로 출력된 값을 `inputData`로 정의하려는 식 앞에 `+`를 붙여 <u>실수 형식으로 변환</u>하여 불멸기원을 구합니다.

```js
console.log(inputData - 543); // 1998
```

그리고 `543`을 뺄셈해 서기 연도를 출력합니다.
