/*
카드2

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초 (추가 시간 없음)	128 MB	76836	39675	32023	51.399%

문제
N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며, 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.

이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 우선, 제일 위에 있는 카드를 바닥에 버린다. 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.

예를 들어 N=4인 경우를 생각해 보자. 카드는 제일 위에서부터 1234 의 순서로 놓여있다. 1을 버리면 234가 남는다. 여기서 2를 제일 아래로 옮기면 342가 된다. 3을 버리면 42가 되고, 4를 밑으로 옮기면 24가 된다. 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다.

N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 N(1 ≤ N ≤ 500,000)이 주어진다.

출력
첫째 줄에 남게 되는 카드의 번호를 출력한다.

예제 입력 1 
6

예제 출력 1 
4

알고리즘 분류
자료 구조
큐
*/

const fs = require("fs");

const input = +fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
);

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);

    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  pop() {
    if (this.size > 2) {
      const item = this.head.item;
      const newHead = this.head.next;

      this.head = newHead;
      this.size -= 1;

      return item;
    } else if (this.size === 2) {
      const item = this.head.item;
      const newHead = this.head.next;

      this.head = newHead;
      this.tail = newHead;
      this.size -= 1;

      return item;
    } else if (this.size === 1) {
      const item = this.head.item;

      this.head = null;
      this.tail = null;
      this.size -= 1;

      return item;
    } else {
      return -1;
    }
  }
}

const queue = new Queue();

for (let i = 1; i <= input; i++) {
  queue.push(i);
}

for (let i = 1; i < input; i++) {
  queue.pop();

  if (i !== input - 1) {
    queue.push(queue.pop());
  }
}

console.log(queue.head.item);
