## 2. 시험 성적

> https://www.acmicpc.net/problem/9498

### 문제

```
시험 성적

문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
시험 성적을 출력한다.

예제 입력 1
100

예제 출력 1
A
```

### 해답

```js
const fs = require("fs");

const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

function grade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(grade(inputData));
```

### 풀이

#### inputData

##### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 31 30 30>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

###### process.platform

백준의 파일 경로는 `"/dev/stdin"`입니다.

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### +

```js
const inputData = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // 100
```

Buffer 형식으로 출력된 값을 `inputData`로 정의하려는 식 앞에 `+`를 붙여 <u>실수 형식으로 변환</u>합니다.

#### grade()

```js
function grade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}
```

##### if...else

매개변수 `score`를 받는 함수 `grade()`를 생성하여 [if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)를 활용하여

score가 90이상 100 이하이면 `"A"`를,  
80이상 90 미만이면 `"B"`를,  
70이상 80 미만이면 `"C"`를,  
60이상 70 미만이면 `"D"`를,  
위의 조건을 충족하지 못하는 나머지의 경우 `"F"`를

[`return`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return) 명령문을 통해 반환하게 합니다.

#### console.log()

```js
console.log(grade(inputData)); // A
```

[`console.log`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `A`가 정상적으로 출력되는 것을 알 수 있습니다.
