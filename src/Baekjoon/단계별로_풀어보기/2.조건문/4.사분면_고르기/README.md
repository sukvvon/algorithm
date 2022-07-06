## 4. 사분면 고르기

> https://www.acmicpc.net/problem/14681

### 문제

<p align="center">
  <img src="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/14681/1.png">
</p>

```
사분면 고르기

문제
흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.


예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.

점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

입력
첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)

출력
점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.

예제 입력 1
12
5

예제 출력 1
1

예제 입력 2
9
-13

예제 출력 2
4
```

### 해답

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(process.platform === "linux" ? 0 : "../../../../index.txt")
  .toString()
  .split("\n")
  .map((value) => +value);

const [a, b] = inputData;

function quadrant(a, b) {
  if (a > 0 && b > 0) {
    return 1;
  } else if (a < 0 && b > 0) {
    return 2;
  } else if (a < 0 && b < 0) {
    return 3;
  } else if (a > 0 && b < 0) {
    return 4;
  }
}

console.log(quadrant(a, b));
```

### 풀이

#### inputData

##### readFileSync()

```js
const fs = require("fs");

const inputData = fs.readFileSync(
  process.platform === "linux" ? 0 : "../../../../index.txt"
);

console.log(inputData); // <Buffer 31 32 0a 35>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

###### process.platform

백준의 파일 경로는 `"/dev/stdin"`입니다. 하지만 이 문제에서만큼은 이유를 잘 모르겠지만 백준에서 *런타임 에러*가 납니다. 다른 분들이 하신 것을 참고해보니, `"/dev/stdin"` 대신에 `0`을 넣었더니 문제가 풀렸습니다.

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `0`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### toString()

```js
const inputData = fs
  .readFileSync(process.platform === "linux" ? 0 : "../../../../index.txt")
  .toString();

console.log(inputData);
// 12
// 5
```

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### split()

```js
const inputData = fs
  .readFileSync(process.platform === "linux" ? 0 : "../../../../index.txt")
  .toString()
  .split("\n");

console.log(inputData); // [ '12', '5' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)를 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

##### map()

```js
const inputData = fs
  .readFileSync(process.platform === "linux" ? 0 : "../../../../index.txt")
  .toString()
  .split(" ")
  .map((value) => +value);

console.log(inputData); // [ 12, 5 ]
```

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드의 callback 함수를 활용하여 `string` 형식이었던 배열의 각 값을 `number` 형식으로 바꿉니다.

##### 배열 구조 분해

```js
const [a, b] = inputData;
console.log(a); // 12
console.log(b); // 5
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 배열 속의 `a`, `b`에 값을 할당합니다.

#### quadrant(a,b)

```js
function quadrant(a, b) {
  if (a > 0 && b > 0) {
    return 1;
  } else if (a < 0 && b > 0) {
    return 2;
  } else if (a < 0 && b < 0) {
    return 3;
  } else if (a > 0 && b < 0) {
    return 4;
  }
}
```

사분면을 구별할 수 있는 매개변수 `a`, `b`를 요구하는 `quadrant()` 함수를 만듭니다.

##### if...else

[if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문과 [비교연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%EB%B9%84%EA%B5%90_%EC%97%B0%EC%82%B0%EC%9E%90)와 [논리연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#%EB%85%BC%EB%A6%AC_%EC%97%B0%EC%82%B0%EC%9E%90)을 활용하여

###### return

`a`, `b`가 모두 양수일 경우 *1사분면*을 의미하는 `1`을 반환하고,  
`a`는 음수이고, `b`는 양수일 *2사분면*을 의미하는 경우 `2`를 반환하고,  
`a`, `b`가 모두 음수일 경우 *3사분면*을 의미하는 `3`을 반환하고,  
`a`는 양수이고, `b`는 음수일 경우 *4사분면*을 의미하는 `4`를 반환하게 합니다.

#### console.log()

```js
console.log(quadrant(a, b)); // 1
```

[console.log()](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `quadrant(a,b)`를 출력하면 `12, 5`인 경우 `1`이 출력되고 `9, -13`일 경우 `4`가 출력되는 것을 알 수 있습니다.
