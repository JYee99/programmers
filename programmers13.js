// 콜라 문제 a = 마트에 주어야 하는 병 수, b = 마트가 주는 콜라 병 수, n = 가지고 있는 빈병의 개 수
function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    // 받은 콜라 병 수
    let newColas = Math.floor(n / a) * b;
    // 총 받은 콜라 병 수에 더함
    result += newColas;
    // 남은 병 수 + 새로 받은 콜라 병 수
    n = (n % a) + newColas;
  }

  return result;
}
