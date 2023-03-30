/*
큐

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
0.5 초 (추가 시간 없음)	256 MB	98949	45338	35507	49.110%

문제
정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

출력
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

예제 입력 1 
15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front

예제 출력 1 
1
2
2
0
1
2
-1
0
1
-1
0
3

출처
문제를 만든 사람: baekjoon
문제의 오타를 찾은 사람: compro0317
데이터를 추가한 사람: deunlee

알고리즘 분류
자료 구조
큐
*/

const fs = require("fs");

const [n, ...orders] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

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
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  pop() {
    if (!this.size) {
      return -1;
    }

    const prevItem = this.head.item;

    if (this.size > 1) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.size--;

    return prevItem;
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.item : -1;
  }

  back() {
    return this.tail ? this.tail.item : -1;
  }
}

function solution(n, orders) {
  const answer = [];
  const queue = new Queue();

  for (let i = 0; i < +n; i++) {
    const [commender, num] = orders[i].split(" ");

    switch (commender) {
      case "push":
        queue.push(num);
        break;
      case "pop":
        answer.push(queue.pop());
        break;
      case "size":
        answer.push(queue.size);
        break;
      case "empty":
        answer.push(queue.empty());
        break;
      case "front":
        answer.push(queue.front());
        break;
      case "back":
        answer.push(queue.back());
        break;
      default:
        break;
    }
  }

  return answer.join("\n");
}

console.log(solution(n, orders));
