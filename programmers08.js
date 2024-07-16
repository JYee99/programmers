// OX 퀴즈
function solution(quiz) {
  let result = quiz.map((q) => {
    const parts = q.split(" ");
    const X = parseInt(parts[0], 10);
    const operator = parts[1];
    const Y = parseInt(parts[2], 10);
    const Z = parseInt(parts[4], 10);

    if (operator === "+") {
      return X + Y === Z ? "O" : "X";
    } else {
      return X - Y === Z ? "O" : "X";
    }
  });

  return result;
}
