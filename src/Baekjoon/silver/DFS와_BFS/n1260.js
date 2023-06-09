/*
DFS와 BFS

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
2 초	128 MB	236180	89649	53234	36.809%

문제
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

입력
첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

출력
첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

예제 입력 1 
4 5 1
1 2
1 3
1 4
2 4
3 4

예제 출력 1 
1 2 4 3
1 2 3 4

예제 입력 2 
5 5 3
5 4
5 2
1 2
3 4
3 1

예제 출력 2 
3 1 2 5 4
3 1 4 2 5

예제 입력 3 
1000 1 1000
999 1000

예제 출력 3 
1000 999
1000 999

출처
문제를 만든 사람: author5
데이터를 추가한 사람: dfghcvb11, djm03178, doju
어색한 표현을 찾은 사람: doju
빠진 조건을 찾은 사람: pumpyboom

알고리즘 분류
그래프 이론
그래프 탐색
너비 우선 탐색
깊이 우선 탐색
*/

const fs = require("fs");

const [[n, m, v], ...edges] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function solution(n, m, v, edges) {
  const graph = Array(n + 1).fill([]);
  const answer = [];

  edges.forEach(([src, dest]) => {
    graph[src] = [...(graph[src] || []), dest];
    graph[dest] = [...(graph[dest] || []), src];
  });

  function dfs(n, graph) {
    graph.forEach((v) => {
      v.sort((a, b) => b - a);
    });

    const stack = [v];
    const answer = [];
    const visited = Array(n + 1).fill(false);

    while (stack.length) {
      const src = stack.pop();

      if (!visited[src]) {
        visited[src] = true;
        answer.push(src);
        stack.push(...graph[src]);
      }
    }

    return answer.join(" ");
  }

  function bfs(n, graph) {
    graph.forEach((v) => {
      v.sort((a, b) => a - b);
    });

    const answer = [];
    const queue = [v];
    const visited = Array(n + 1).fill(false);

    while (queue.length) {
      const src = queue.shift();

      if (!visited[src]) {
        visited[src] = true;
        answer.push(src);
        queue.push(...graph[src]);
      }
    }

    return answer.join(" ");
  }

  answer.push(dfs(n, graph));
  answer.push(bfs(n, graph));

  return answer.join("\n");
}

console.log(solution(n, m, v, edges));
