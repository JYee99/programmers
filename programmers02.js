// 부족한 금액 계산하기
function solution(price, money, count) {
  var totalCost = (price * count * (count + 1)) / 2;
  var result = totalCost - money;
  return result > 0 ? result : 0;
}
