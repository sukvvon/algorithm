## 2. 셀프 넘버

> https://www.acmicpc.net/problem/4673

### 문제

```
셀프 넘버

문제
셀프 넘버는 1949년 인도 수학자 D.R. Kaprekar가 이름 붙였다. 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자. 예를 들어, d(75) = 75+7+5 = 87이다.

양의 정수 n이 주어졌을 때, 이 수를 시작해서 n, d(n), d(d(n)), d(d(d(n))), ...과 같은 무한 수열을 만들 수 있다.

예를 들어, 33으로 시작한다면 다음 수는 33 + 3 + 3 = 39이고, 그 다음 수는 39 + 3 + 9 = 51, 다음 수는 51 + 5 + 1 = 57이다. 이런식으로 다음과 같은 수열을 만들 수 있다.

33, 39, 51, 57, 69, 84, 96, 111, 114, 120, 123, 129, 141, ...

n을 d(n)의 생성자라고 한다. 위의 수열에서 33은 39의 생성자이고, 39는 51의 생성자, 51은 57의 생성자이다. 생성자가 한 개보다 많은 경우도 있다. 예를 들어, 101은 생성자가 2개(91과 100) 있다.

생성자가 없는 숫자를 셀프 넘버라고 한다. 100보다 작은 셀프 넘버는 총 13개가 있다. 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97

10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

입력
입력은 없다.

출력
10,000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력한다.

예제 입력 1

예제 출력 1
1
3
5
7
9
20
31
42
53
64
 |
 |       <-- a lot more numbers
 |
9903
9914
9925
9927
9938
9949
9960
9971
9982
9993
```

### 해답

```js
function d(n) {
  let sum = n;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

const selfNum = new Array(10000);
selfNum.fill(true);

for (let i = 1; i <= 10000; i++) {
  selfNum[d(i)] = false;

  if (selfNum[i]) {
    console.log(i);
  }
}
```

### 풀이

#### function d(n) (생성자를 구하는 함수)

```js
function d(n) {
  let sum = n;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}
```

일정한 범위 내에서 생성자가 없는 숫자인 셀프 넘버를 구하기 위해서는 전체 범위에서 생성자를 빼주면 됩니다.

우선 생성자를 구하는 함수가 필요합니다.

##### sum (생성자)

```js
let sum = n;
```

`sum`이라는 변수에 매개변수 양의 정수를 뜻하는 `n`을 할당합니다.

만약 `n`이 `123`인 경우 `sum`은 `123`이 됩니다.

##### while (생성자를 만드는 과정)

```js
while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}
```

```js
while (n > 0) {}
```

[while](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while)문을 활용해 `n > 0`일 경우에만 진행을 하도록 합니다.

###### 더하기 할당 (sum에 n의 나머지 값 더하기)

```js
while (n > 0) {
  sum += n % 10;
}
```

[더하기 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Addition_assignment)을 통해 `n` 값을 할당한 변수 `sum`에 `n`의 10으로 나눈 나머지 즉 <u>일의 자리 수를 더하여 줍니다.</u>

예를 들어 숫자 `123`일 경우 `3`을 더하여 주는 것입니다.

###### Math.floor() (소수점 밑 버리기)

```js
while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}
```

`n`을 `10`으로 나누면 소수점을 가진 실수가 되는데 [`Math.floor()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 함수를 통해 정수화 해줍니다. 그리고 그 값을 `n`에 할당합니다.

예를 들어 `123`의 경우 `n / 10`을 하면 `12.3`이 되는데 `Math.floor()`을 통해 `12`가 됩니다.

위와 같은 과정을 `while (n > 0) {}` 즉 `n`이 `0`보다 큰 경우 반복하게 되어 두 자리 수든 세 자리 수든 모든 자리수를 더한 값을 구할 수 있습니다.

##### return (생성자 sum 반환하기)

```js
function d(n) {
  let sum = n;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(d(123)); // 129
```

[`return`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return) 명령문을 통해 함수 실행을 종료하고 `sum` 값을 반환합니다. 즉 `n`의 생성자 혹은 생성자들을 반환하게 되는 것입니다.

#### selfNum (셀프 넘버를 가지는 배열)

```js
const selfNum = new Array(10000);
selfNum.fill(true);
```

##### Array() 생성자 (배열 생성하기)

```js
const selfNum = new Array(10000);
```

[`Array()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)를 활용하여 `10000`개의 요소를 가지는 빈 배열을 생성하여 변수 `selfNum`에 할당합니다.

##### fill() (배열의 요소 모두 true)

```js
selfNum.fill(true);
```

아직 셀프 넘버인지 생성자인지 추려내지 않았기 때문에 [`fill()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) 메서드를 활용하여 모두 `true`로 채웁니다.

#### for (selfNum 배열의 요소 추려내기)

```js
for (let i = 1; i <= 10000; i++) {
  selfNum[d(i)] = false;

  if (selfNum[i]) {
    console.log(i);
  }
}
```

```js
for (let i = 1; i <= 10000; i++) {}
```

`selfNum` 내의 요소들에 관한 반복문이므로 `i`의 범위를 `1`부터 `10000`까지로 합니다.

##### 생성자인 경우 요소 false로

```js
for (let i = 1; i <= 10000; i++) {
  selfNum[d(i)] = false;
}
```

`d(i)` 값과 일치하는 배열 `selfNum`의 요소인 경우 `false`로 할당합니다.

위의 과정을 통해 생성자인 요소는 `false`가 되는 것이고, 생성자가 아닌 셀프 넘버인 요소는 `true` 값을 가지게 됩니다.

##### if...else (selfNum의 요소가 true인 경우)

```js
for (let i = 1; i <= 10000; i++) {
  selfNum[d(i)] = false;

  if (selfNum[i]) {
    console.log(i);
  }
}
```

[if...else](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else)문에 의해 `selfNum[i]`가 `true`일 경우 셀프 넘버이므로 [`console.log()`](https://developer.mozilla.org/ko/docs/Web/API/console/log) 메서드로 `i` 값을 출력해줍니다.
