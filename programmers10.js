// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
  // 문자열 배열을 정렬하는 함수
  strings.sort((a, b) => {
    // a와 b의 n번째 문자를 추출
    const charA = a.charAt(n);
    const charB = b.charAt(n);

    // n번째 문자가 같으면 전체 문자열을 사전순으로 비교
    if (charA === charB) {
      return a.localeCompare(b); // a와 b를 사전순으로 비교하여 정렬
    }

    // n번째 문자의 ASCII 값을 비교하여 정렬
    return charA > charB ? 1 : -1;
  });

  // 정렬된 문자열 배열 반환
  return strings;
}
