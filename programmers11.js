// 과일장수
function solution(k, m, score) {
  // 사과 점수를 내림차순으로 정렬 (높은 수 부터 순서대로 정렬)
  score.sort((a, b) => b - a);
  console.log(score);

  // 최대 이익을 저장
  let result = 0;
  // 상자 단위로 묶어서 처리
  // i를 0부터 시작 사과 수 - m 까지 m 씩 증가시키며 반복 실행
  // 상자를 만드는? 과정 for문이 1번 실행 되면 상자는 1개 2번 실행 되면 상자는 2개
  for (let i = 0; i <= score.length - m; i += m) {
    // 현재 상자의 최저 점수를 찾기
    let lowScore = score[i + m - 1];
    // 상자의 이익을 계산 (현재 상자의 최저 점수 * 상자에 담긴 사과의 개수)
    result += lowScore * m;
  }

  return result;
}
