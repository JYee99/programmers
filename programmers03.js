// 치킨 쿠폰
function solution(chicken) {
  var answer = 0;
  var coupons = chicken; // 처음에는 치킨 수만큼 쿠폰이 있음

  // 조건이 없는 for문; 내부 로직으로 루프 종료를 제어
  for (; coupons >= 10; ) {
    var serviceChicken = Math.floor(coupons / 10); // 서비스로 받을 수 있는 치킨 수
    answer += serviceChicken; // 서비스 치킨 수를 정답에 추가
    coupons = coupons - serviceChicken * 10 + serviceChicken; // 사용한 쿠폰 수를 빼고 서비스 치킨으로 받은 쿠폰을 더함
  }

  return answer;
}
