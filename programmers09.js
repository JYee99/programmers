// 예상 대진표
function solution(n, a, b) {
  var answer = 0;
  // 참가자 a , b 번호 저장
  let numA = a;
  let numB = b;

  // a와 b가 같은 번호가 될 때까지 반복
  while (numA != numB) {
    // 현재 번호를 2로 나누고 올림해 다음 라운드 번호로 업데이트
    // 예시)  초기상태 numA = 4, numB = 7
    //        1라운드  numA = Math.ceil(4 / 2) = 2, numB = Math.ceil(7 / 2) = 4
    //        라운드 수 1증가
    //        2라운드     numA = Math.ceil(2 / 2) = 1,  numB = Math.ceil(4 / 2) = 2
    //        라운드 수 1증가
    numA = Math.ceil(numA / 2);
    numB = Math.ceil(numB / 2);

    answer += 1;
  }
  return answer;
}
