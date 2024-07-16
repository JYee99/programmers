// 저주의 숫자 3
function solution(n) {
  let result = "";
  let count = 1;
  for (let i = 1; count <= n; i++) {
    // 숫자 i를 문자열로 변환하여 '3'을 포함하는지, 혹은 3의 배수인지 확인
    if (!i.toString().includes("3") && i % 3 !== 0) {
      if (count === n) {
        result = i;
        break;
      }
      count++;
    }
  }
  return result;
}
