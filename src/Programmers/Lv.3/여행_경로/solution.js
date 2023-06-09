/*
여행경로

문제 설명
주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.

항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
모든 공항은 알파벳 대문자 3글자로 이루어집니다.
주어진 공항 수는 3개 이상 10,000개 이하입니다.
tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
주어진 항공권은 모두 사용해야 합니다.
만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.

입출력 예
tickets	return
[["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]	["ICN", "JFK", "HND", "IAD"]
[["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

입출력 예 설명
예제 #1

["ICN", "JFK", "HND", "IAD"] 순으로 방문할 수 있습니다.

예제 #2

["ICN", "SFO", "ATL", "ICN", "ATL", "SFO"] 순으로 방문할 수도 있지만 ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"] 가 알파벳 순으로 앞섭니다.

문제가 잘 안풀린다면😢
힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → 클릭
*/

// 1
// DFS, stack
function solution(tickets) {
  const answer = [];
  const graph = {};
  const stack = ["ICN"];

  tickets.forEach(([src, dest]) => {
    graph[src] = [...(graph[src] || []), dest];
  });

  for (const key in graph) {
    graph[key].sort((a, b) => (a < b ? 1 : -1));
  }

  while (stack.length) {
    const src = stack.at(-1);

    if (graph[src] && graph[src].length) {
      stack.push(graph[src].pop());
    } else {
      answer.push(stack.pop());
    }
  }

  return answer.reverse();
}

// 2
// DFS, Recursive Function
function solution(tickets) {
  const answer = [];
  const plan = ["ICN"];
  const total = tickets.length + 1;

  function dfs(begin, plan, tickets) {
    if (!tickets.length) {
      if (plan.length === total) {
        answer.push(plan);
      }
    } else {
      const newTickets = tickets.filter((ticket) => ticket[0] === begin);

      newTickets.forEach((newTicket) => {
        const filteredTickets = [...tickets];

        for (let i = 0; i < filteredTickets.length; i++) {
          if (filteredTickets[i].join("") === newTicket.join("")) {
            filteredTickets.splice(i, 1);
            break;
          }
        }

        dfs(newTicket[1], [...plan, newTicket[1]], filteredTickets);
      });
    }
  }

  dfs(plan[0], plan, tickets);

  return answer.sort((a, b) => (a.join("") > b.join("") ? 1 : -1))[0];
}
