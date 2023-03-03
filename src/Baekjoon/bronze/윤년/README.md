## 3. 윤년

> https://www.acmicpc.net/problem/2753

### 문제

```
윤년

문제
연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

입력
첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.

출력
첫째 줄에 윤년이면 1, 아니면 0을 출력한다.

예제 입력 1
2000

예제 출력 1
1

예제 입력 2
1999

예제 출력 2
0
```

### 해답

```js
const fs = require("fs");

const inputData = +fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

(inputData % 4 === 0 && inputData % 100 !== 0) ||
(inputData % 4 === 0 && inputData % 400 === 0)
  ? console.log(1)
  : console.log(0);
```

### 풀이

#### inputData

##### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
);

console.log(inputData); // <Buffer 32 30 30 30>
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

console.log(inputData); // 2000
```

Buffer 형식으로 출력된 값을 `inputData`로 정의하려는 식 앞에 `+`를 붙여 <u>실수 형식으로 변환</u>합니다.

#### 윤년

##### 삼항연산자

[if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문으로 할 수 있지만 간단하게 표현하기 위해 [삼항연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)를 활용해보았습니다.

```js
(inputData % 4 === 0 && inputData % 100 !== 0) ||
  (inputData % 4 === 0 && inputData % 400 === 0);
```

> 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

4의 배수이면서 100의 배수가 아닐 때이거나 4의 배수이면서 400의 배수일 때를 [비교연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%EB%B9%84%EA%B5%90_%EC%97%B0%EC%82%B0%EC%9E%90)와 [논리연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%EB%85%BC%EB%A6%AC_%EC%97%B0%EC%82%B0%EC%9E%90)와 [산술연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%EC%82%B0%EC%88%A0_%EC%97%B0%EC%82%B0%EC%9E%90)를 활용하여 조건에 맞게 구현합니다.

##### console.log()

```js
(inputData % 4 === 0 && inputData % 100 !== 0) ||
(inputData % 4 === 0 && inputData % 400 === 0)
  ? console.log(1)
  : console.log(0); // 1
```

[`console.log`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 2000년은 윤년이므로 `1`이 정상적으로 출력되는 것을 알 수 있습니다.
