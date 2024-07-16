// 문자열 내 p와 y의 개수
function solution(s) {
  var result = false;
  var p = 0;
  var y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "p" || s[i] == "P") {
      p++;
    }
    if (s[i] == "y" || s[i] == "Y") {
      y++;
    }
  }
  if (p - y == 0) {
    result = true;
  }
  return result;
}
