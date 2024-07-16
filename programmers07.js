// 2차원으로 만들기
function solution(num_list, n) {
  let result = [];
  // num_list의 길이를 n으로 나누어 몇 번 반복할지 결정
  for (let i = 0; i < num_list.length; i += n) {
    // i번째 인덱스부터 n개의 원소를 슬라이싱하여 result에 추가
    result.push(num_list.slice(i, i + n));
  }
  return result;
}
