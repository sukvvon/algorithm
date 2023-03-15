/*
덱

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
0.5 초 (추가 시간 없음)	256 MB	62446	34297	28949	56.086%

문제
정수를 저장하는 덱(Deque)를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여덟 가지이다.

push_front X: 정수 X를 덱의 앞에 넣는다.
push_back X: 정수 X를 덱의 뒤에 넣는다.
pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 덱에 들어있는 정수의 개수를 출력한다.
empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

출력
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

예제 입력 1 
15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front

예제 출력 1 
2
1
2
0
2
1
-1
0
1
-1
0
3

예제 입력 2 
22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back

예제 출력 2 
-1
-1
-1
-1
1
1
2
2
333
10
10
333
20
1234
1234
20

출처
문제를 만든 사람: baekjoon
데이터를 추가한 사람: jh05013
문제의 오타를 찾은 사람: sungjune222

알고리즘 분류
자료 구조
덱
*/

const fs = require("fs");

const [N, ...input] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(item) {
    this.prev = null;
    this.item = item;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push_front(item) {
    const node = new Node(item);

    if (!this.size) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  push_back(item) {
    const node = new Node(item);

    if (!this.size) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size++;
  }

  pop_front() {
    if (!this.size) {
      return -1;
    }

    const item = this.head.item;

    this.head = this.head.next;

    if (this.size === 1) {
      this.head = null;
    } else {
      this.head.prev = null;
    }

    this.size--;

    return item;
  }

  pop_back() {
    if (!this.size) {
      return -1;
    }

    const item = this.tail.item;

    this.tail = this.tail.prev;

    if (this.size === 1) {
      this.tail = null;
    } else {
      this.tail.next = null;
    }

    this.size--;

    return item;
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.size ? this.head.item : -1;
  }

  back() {
    return this.size ? this.tail.item : -1;
  }
}

function solution(N, input) {
  const deque = new Deque();
  const result = [];

  for (let i = 0; i < N; i++) {
    const [order, num] = input[i].split(" ");

    switch (order) {
      case "push_front":
        deque.push_front(+num);
        break;
      case "push_back":
        deque.push_back(+num);
        break;
      case "pop_front":
        result.push(deque.pop_front());
        break;
      case "pop_back":
        result.push(deque.pop_back());
        break;
      case "size":
        result.push(deque.size);
        break;
      case "empty":
        result.push(deque.empty());
        break;
      case "front":
        result.push(deque.front());
        break;
      case "back":
        result.push(deque.back());
        break;
      default:
        break;
    }
  }

  return result.join("\n");
}

console.log(solution(N, input));
