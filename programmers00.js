// 서울에서 김서방 찾기
function solution(seoul) {
  var answer = "";
  var j = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = `김서방은 ${j}에 있다`;
    }
    j++;
  }
  return answer;
}
