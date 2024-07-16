// 카펫
function solution(brown, yellow) {
  // 전체 카펫의 격자 수
  var cell = brown + yellow;
  // 모든 가로길이 w 를 3부터 전체 격자수 - 1 까지 반복
  for (let w = 3; w < cell; w++) {
    // 가로 길이가 전체 격자 수의 약수인지 확인
    if (cell % w === 0) {
      // 가로 길이가 전체 격자수의 약수면 세로 길이 h 계산
      let h = cell / w;
      // 가로 길이는 세로길이 보다 크거나 같은지 확인
      if (w >= h) {
        // 노란색 격자의 수가 조건을 만족하는지 확인
        // (w - 2) * (h - 2)가 노란색 격자의 수와 같은지 확인
        if ((w - 2) * (h - 2) === yellow) {
          // 모든 조건이 만족하면 w = 가로길이, h = 세로길이 반환
          return [w, h];
        }
      }
    }
  }
}
