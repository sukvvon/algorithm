## 7. 주사위 세개

> https://www.acmicpc.net/problem/2480

### 문제

```
주사위 세개

문제
1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다.

같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

입력
첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다.

출력
첫째 줄에 게임의 상금을 출력 한다.

예제 입력 1
3 3 6

예제 출력 1
1300

예제 입력 2
2 2 2

예제 출력 2
12000

예제 입력 3
6 2 5

예제 출력 3
600
```

### 해답

```js
const fs = require("fs");

const inputdata = fs
  .readfilesync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ")
  .map((value) => +value);

const [a, b, c] = inputData;

function threeDice(first, second, third) {
  function twoSameDice(first, second, third) {
    if (first === second && first !== third) {
      return first;
    } else if (first === third && first !== second) {
      return first;
    } else if (second === third && second !== first) {
      return second;
    }
  }

  function theBiggestDice(first, second, third) {
    if (
      (first > second && second > third) ||
      (first > third && third > second)
    ) {
      return first;
    } else if (
      (second > first && first > third) ||
      (second > third && third > first)
    ) {
      return second;
    } else if (
      (third > first && first > second) ||
      (third > second && second > first)
    ) {
      return third;
    }
  }

  if (first === second && first === third && second === third) {
    return 10000 + first * 1000;
  } else if (first === second || first === third || second === third) {
    return 1000 + twoSameDice(first, second, third) * 100;
  } else if (first !== second && first !== third && second !== third) {
    return theBiggestDice(first, second, third) * 100;
  }
}

console.log(threeDice(a, b, c));
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

console.log(inputData); // <Buffer 36 20 32 20 35>
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

console.log(inputData); // 6 2 5
```

Buffer 형식으로 출력된 값을 [`toString()`](https://nodejs.org/docs/latest-v16.x/api/buffer.html#buftostringencoding-start-end)을 통해 기본값인 `"utf8"` 형식으로 출력합니다.

##### 배열 생성

###### split()

first

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ");

console.log(inputData); // [ '6', '2`, '5' ]
```

[`split()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)를 활용하여 매개변수에 공백을 의미하는 `" "`를 넣어 배열을 만듭니다.

##### 문자열 배열에서 실수 배열로 변환

###### map()

```js
const inputData = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../../index.txt"
  )
  .toString()
  .split(" ")
  .map((value) => +value);

console.log(inputData); // [ 6, 2, 5 ]
```

[`map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드의 callback 함수를 활용하여 `string` 형식이었던 배열의 각 값을 `number` 형식으로 바꿉니다.

##### 배열 구조 분해

```js
const [a, b, c] = inputData;
console.log(a, b, c); // 6 2 5
```

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 [배열 구조 분해](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)을 통해 `inputData`를 각각 세 숫자를 의미하는 `a`, `b`, `c`에 할당합니다.

#### threeDice()

```js
function threeDice(first, second, third) {
  function twoSameDice(first, second, third) {
    if (first === second && first !== third) {
      return first;
    } else if (first === third && first !== second) {
      return first;
    } else if (second === third && second !== first) {
      return second;
    }
  }

  function theBiggestDice(first, second, third) {
    if (
      (first > second && second > third) ||
      (first > third && third > second)
    ) {
      return first;
    } else if (
      (second > first && first > third) ||
      (second > third && third > first)
    ) {
      return second;
    } else if (
      (third > first && first > second) ||
      (third > second && second > first)
    ) {
      return third;
    }
  }

  if (first === second && first === third && second === third) {
    return 10000 + first * 1000;
  } else if (first === second || first === third || second === third) {
    return 1000 + twoSameDice(first, second, third) * 100;
  } else if (first !== second && first !== third && second !== third) {
    return theBiggestDice(first, second, third) * 100;
  }
}
```

> 1. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
> 2. 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
> 3. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

세 주사위를 의미하는 매개변수 `first`, `second`, `third`를 요구하는 `threeDice()` 함수를 만듭니다.

그리고 매개변수 `first`, `second`, `third`를 요구하며 같은 눈이 2개만 나오는 경우를 위해 두 눈만 같은 주사위일때 그 눈의 값을 얻는 함수와, 모두 다른 눈이 나오는 경우일 때 제일 큰 눈의 주사위 값을 얻는 함수를 만듭니다.

##### 두 눈만 같은 주사위 값 구하기

###### twoSameDice()

```js
function twoSameDice(first, second, third) {
  if (first === second && first !== third) {
    return first;
  } else if (first === third && first !== second) {
    return first;
  } else if (second === third && second !== first) {
    return second;
  }
}
```

두 눈만 같은 주사위 값을 얻어야하므로 [if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문과 [return](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return) 명령문을 활용하여

1. 1번 다이스와 2번 다이스와 같은 수이면서, 1번 다이스는 3번 다이스와 다른 수이면 **1번 다이스 반환**

   > 같은 다이스이기 떄문에 1번과 2번, 둘 중에 뭘 반환하든 상관이 없다.

2. 1번 다이스와 3번 다이스와 같은 수이면서, 1번 다이스는 2번 다이스와 다른 수이면 **1번 다이스 반환**

3. 2번 다이스와 3번 다이스와 같은 수이면서, 2번 다이스는 1번 다이스와 다른 수이면 **2번 다이스 반환**

위 세 가지 조건을 가지는 함수를 만듭니다.

##### 제일 큰 수의 주사위 값 구하기

###### theBiggestDice()

```js
function theBiggestDice(first, second, third) {
  if ((first > second && second > third) || (first > third && third > second)) {
    return first;
  } else if (
    (second > first && first > third) ||
    (second > third && third > first)
  ) {
    return second;
  } else if (
    (third > first && first > second) ||
    (third > second && second > first)
  ) {
    return third;
  }
}
```

제일 큰 수의 주사위 값을 얻어야 하므로 [if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문과 [return](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return) 명령문을 활용하여

1. _1번 다이스의 수 > 2번 다이스 수 > 3번 다이스 수_ 혹은 *1번 다이스의 수 > 3번 다이스 수 > 2번 다이스 수*의 경우 1번 다이스 수 반환

2. _2번 다이스의 수 > 1번 다이스 수 > 3번 다이스 수_ 혹은 *2번 다이스의 수 > 3번 다이스 수 > 1번 다이스 수*의 경우 2번 다이스 수 반환

3. _3번 다이스의 수 > 2번 다이스 수 > 1번 다이스 수_ 혹은 *3번 다이스의 수 > 1번 다이스 수 > 2번 다이스 수*의 경우 3번 다이스 수 반환

위 세 가지 조건을 가지는 함수를 만듭니다.

##### 상금 계산

```js
if (first === second && first === third && second === third) {
  return 10000 + first * 1000;
} else if (first === second || first === third || second === third) {
  return 1000 + twoSameDice(first, second, third) * 100;
} else if (first !== second && first !== third && second !== third) {
  return theBiggestDice(first, second, third) * 100;
}
```

> 1. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
> 2. 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
> 3. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

###### 세 주사위 수가 모두 같은 경우

```js
if (first === second && first === third && second === third) {
  return 10000 + first * 1000;
}
```

주사위 수들이 모두 같은 경우 `10000 + first * 1000` 을 반환합니다.

###### 두 수의 주사위 수만 같은 경우

```js
else if (first === second || first === third || second === third) {
  return 1000 + twoSameDice(first, second, third) * 100;
}
```

두 수의 주사위만 같은 경우 `1000 + twoSameDice(first, second, third) * 100`를 반환합니다.

###### 모든 주사위 수가 다른 경우

```js
else if (first !== second && first !== third && second !== third) {
  return theBiggestDice(first, second, third) * 100;
}
```

모든 주사위 수가 다른 경우 `theBiggestDice(first, second, third) * 100`를 반환합니다.

#### 결과 출력

##### console.log()

```js
console.log(threeDice(a, b, c)); // 600
```

[console.log()](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드를 통해 `threeDice(a, b, c)`를 출력하면 `3 3 6`일 경우 `1300`이 출력되고, `2 2 2`인 경우 `12000`이 출력되고 `6 2 5`인 경우 `600`이 출력되는 것을 알 수 있습니다.
