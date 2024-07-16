// 시저 암호
function solution(s, n) {
  // 소문자 알파벳 문자열
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // 대문자 알파벳 문자열
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // 결과를 저장할 빈 문자열 초기화
  let result = "";

  // 입력 문자열의 각 문자에 대해 반복
  for (let i = 0; i < s.length; i++) {
    // 현재 문자를 변수 a에 저장
    let a = s[i];

    // 현재 문자가 소문자 알파벳에 포함되어 있다면
    if (alphabet.includes(a)) {
      // 소문자 알파벳에서 현재 문자의 인덱스를 찾아 n 만큼 이동한 새로운 인덱스 계산
      let index = (alphabet.indexOf(a) + n) % 26;
      // 새로운 인덱스에 해당하는 문자를 결과 문자열에 추가
      result += alphabet[index];
      // 현재 문자가 대문자 알파벳에 포함되어 있다면
    } else if (upperAlphabet.includes(a)) {
      // 대문자 알파벳에서 현재 문자의 인덱스를 찾아 n만큼 이동한 새로운 인덱스 계산
      let index = (upperAlphabet.indexOf(a) + n) % 26;
      // 새로운 인덱스에 해당하는 문자를 결과 문자열에 추가
      result += upperAlphabet[index];
      // 공백이거나 알파벳이 아닌 다른 문자라면
    } else {
      // 해당 문자를 그대로 결과 문자열에 추가
      result += a;
    }
  }
  // 최종 결과 문자열 반환
  return result;
}
