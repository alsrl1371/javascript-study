// 퀴즈!
let num = 1;
// num의 숫자가 짝수이면 ❤, 홀수라면 💔를 출력
// if와 ternary 방식으로 만들기

if (num % 2 === 0) {
  console.log('❤');
} else {
  console.log('💔');
}

let emoji = num % 2 === 0 ? '❤' : '💔';
console.log(emoji);