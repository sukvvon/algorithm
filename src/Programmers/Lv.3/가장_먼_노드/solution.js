/*
가장 먼 노드

문제 설명
n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

제한사항
노드의 개수 n은 2 이상 20,000 이하입니다.
간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.

입출력 예
n	vertex	return
6	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	3

입출력 예 설명
예제의 그래프를 표현하면 아래 그림과 같고, 1번 노드에서 가장 멀리 떨어진 노드는 4,5,6번 노드입니다.

image.png
*/

// 1
// BFS, Array
function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const distance = Array(n + 1).fill(0);
  const queue = [1];
  distance[1] = 1;

  edge.forEach(([n1, n2]) => {
    graph[n1].push(n2);
    graph[n2].push(n1);
  });

  while (queue.length) {
    const src = queue.shift();

    graph[src].forEach((dest) => {
      if (!distance[dest]) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    });
  }

  const max = Math.max(...distance);

  return distance.filter((v) => v === max).length;
}

// 2
// BFS, Array, Queue(Linked List)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  dequeue() {
    const value = this.head.value;

    this.head = this.head.next;
    this.size--;

    return value;
  }
}

function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const distance = Array(n + 1).fill(0);
  const queue = new Queue();
  queue.enqueue(1);
  distance[1] = 1;

  edge.forEach(([n1, n2]) => {
    graph[n1].push(n2);
    graph[n2].push(n1);
  });

  while (queue.size) {
    const src = queue.dequeue();

    graph[src].forEach((dest) => {
      if (!distance[dest]) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    });
  }

  const max = Math.max(...distance);

  return distance.filter((v) => v === max).length;
}

// 3
// BFS, Array, Queue(Array)
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    this.front++;

    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const distance = Array(n + 1).fill(0);
  const queue = new Queue();
  queue.enqueue(1);
  distance[1] = 1;

  edge.forEach(([n1, n2]) => {
    graph[n1].push(n2);
    graph[n2].push(n1);
  });

  while (queue.size()) {
    const src = queue.dequeue();

    graph[src].forEach((dest) => {
      if (!distance[dest]) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    });
  }

  const max = Math.max(...distance);

  return distance.filter((v) => v === max).length;
}

// 4
// BFS, Array, Hash Table(Object)
function solution(n, edge) {
  const hash = {};
  const queue = [1];
  const distance = new Array(n + 1).fill(0);
  distance[1] = 1;

  edge.forEach(([n1, n2]) => {
    hash[n1] = [...(hash[n1] || []), n2];
    hash[n2] = [...(hash[n2] || []), n1];
  });

  while (queue.length) {
    const src = queue.shift();

    hash[src].forEach((dest) => {
      if (!distance[dest]) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    });
  }

  const max = Math.max(...distance);

  return distance.filter((v) => v === max).length;
}
