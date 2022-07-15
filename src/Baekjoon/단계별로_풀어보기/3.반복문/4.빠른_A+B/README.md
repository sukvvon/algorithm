## 4. 빠른 A+B

> https://www.acmicpc.net/problem/15552

### 문제

```
빠른 A+B

문제
본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.

C++을 사용하고 있고 cin/cout을 사용하고자 한다면, cin.tie(NULL)과 sync_with_stdio(false)를 둘 다 적용해 주고, endl 대신 개행문자(\n)를 쓰자. 단, 이렇게 하면 더 이상 scanf/printf/puts/getchar/putchar 등 C의 입출력 방식을 사용하면 안 된다.

Java를 사용하고 있다면, Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter를 사용할 수 있다. BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.

Python을 사용하고 있다면, input 대신 sys.stdin.readline을 사용할 수 있다. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 .rstrip()을 추가로 해 주는 것이 좋다.

또한 입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다.

자세한 설명 및 다른 언어의 경우는 이 글에 설명되어 있다.

이 블로그 글에서 BOJ의 기타 여러 가지 팁을 볼 수 있다.

입력
첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

출력
각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

예제 입력 1
5
1 1
12 34
5 500
40 60
1000 1000

예제 출력 1
2
46
505
100
2000
```

### 해답

```js
const fs = require("fs");

const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

const count = inputData.length;

let result = "";

for (let i = 1; i < count; i++) {
  const data = inputData[i].split(" ").map((value) => +value);

  if (i < count - 1) {
    result += `${data[0] + data[1]}\n`;
  } else if (i < count) {
    result += `${data[0] + data[1]}`;
  }
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

console.log(inputData); // <Buffer 35 0a 31 20 31 0a 31 32 20 33 34 0a 35 20 35 30 30 0a 34 30 20 36 30 0a 31 30 30 30 20 31 30 30 30>
```

[백준](https://help.acmicpc.net/language/info)에서 추천하는 방식은 [node.js](https://nodejs.org/en/)에서 fs 모듈의 [`readFileSync()`](https://nodejs.org/docs/latest-v16.x/api/fs.html#fsreadfilesyncpath-options)를 이용하는 것입니다.

##### 작동 시스템 구별

###### process.platform

[`process.platform`](https://nodejs.org/docs/latest-v16.x/api/process.html#processplatform)이 `"linux"`인 경우 경로를 `"/dev/stdin"`으로 향하게 하고 그것이 아니면 사용자가 지정한 파일을 향하게 합니다.

##### 문자열 형식으로 변환

###### toString()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString();

console.log(inputData);
// 5
// 1 1
// 12 34
// 5 500
// 40 60
// 1000 1000
```

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### 문자열 공백 제거

###### trim()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .trim();

console.log(inputData);
// 5
// 1 1
// 12 34
// 5 500
// 40 60
// 1000 1000
```

> 공백이 존재한다고 생각하진 않았는데 백준에서 재출을 할 때 틀렸다고 하였습니다. 혹시나해서 `trim()` 메서드를 활용하였더니 성공하였습니다.

[`trim()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) 메서드를 활용하여 <u>문자열 양 끝의 공백을 제거</u>합니다.

##### 배열 생성

###### split()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split("\n");

console.log(inputData); // [ '5', '1 1', '12 34', '5 500', '40 60', '1000 1000' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 활용하여 매개변수에 다음줄을 의미하는 `"\n"`를 넣어 배열을 만듭니다.

#### count

##### 배열 inputData의 길이

###### length

```js
const count = inputData.length;
```

각 줄에 해당하는 값들을 더해야하므로 [`length`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length)를 통해 배열인 `inputData`의 길이를 구합니다.

#### result

##### 결과값 선언 및 초기화

```js
let result = "";
```

각 줄에 해당하는 값들을 담은 변수 `result`를 `""` 즉 <u>문자열 형식의 빈 값</u>으로 초기화하여 선언합니다.

#### 결과값 구하기

```js
for (let i = 1; i < count; i++) {
  const data = inputData[i].split(" ").map((value) => +value);

  if (i < count - 1) {
    result += `${data[0] + data[1]}\n`;
  } else if (i < count) {
    result += `${data[0] + data[1]}`;
  }
}
```

##### for

```js
for (let i = 1; i <= count; i++) {}
```

[for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for) 문을 통해 첫 줄은 테스트케이스의 개수르르 의미하므로 `0`이 아닌 `i`를 `1`으로 초기화하여 `i` 값을 `1`씩 증가시키면서 `count`까지 증가하여 `for`문의 수행횟수를 `count`번 반복하게끔 합니다.

##### 각 줄의 값 배열화 (data)

```js
for (let i = 1; i < count; i++) {
  const data = inputData[i].split(" ").map((value) => +value);
}
// expected output :
// [ '1', '1' ]
// [ '12', '34' ]
// [ '5', '500' ]
// [ '40', '60' ]
// [ '1000', '1000' ]
```

###### split()

각 줄의 번호를 의미하는 `inputData[i]`로부터 태스트 케이스 값들을 받아 공백을 의미하는 매개변수 `" "`이 포함된 `split()` 메서드를 실행하여 각 줄에 값들에 대한 각각의 배열을 만듭니다.

###### map()

그 후 `(value) => +value`가 포함된 `callback` 함수를 가지는 `map()` 메서드를 통해 문자열 형식을 실수 형식으로 바꾸게 하여 연산이 가능하도록 합니다.

##### if...else

```js
if (i < count - 1) {
  result += `${data[0] + data[1]}\n`;
} else if (i < count) {
  result += `${data[0] + data[1]}`;
}
```

[if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)을 통하여 `result`에 담을 값에 대한 경우를 나누어야합니다.

###### i < count - 1 의 경우

```js
if (i < count - 1) {
  result += `${data[0] + data[1]}\n`;
}
```

`count`의 값이 1부터 `count - 2`까지의 경우 연산이 끝난 후 다음줄로 출력되어야 하기 때문에 `\n`을 써줍니다.

값을 [더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment) 연산자를 활용하여 순서대로 더해줍니다.

###### i < count 의 경우

```js
else if (i < count) {
  result += `${data[0] + data[1]}`;
}
```

`else if`를 통해 `i < count - 1` 의 경우를 제외한 `i < count` 즉 `count - 1`에 대한 경우는 `\n`을 제외해 <u>다음줄까지 함께 출력되는 것을 방지</u>합니다.

마찬가지로 값을 [더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment) 연산자를 활용하여 더해줍니다.

#### 결과값 출력

##### console.log()

```js
console.log(result);
// 2
// 46
// 505
// 100
// 2000
```

[`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log#content) 메서드를 통해 `result`값을 출력합니다.
