// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('!!');
}
fruit === 'apple' ? console.log('🍎') : console.log('!!');
// 사과일 경우 사과 이모지, 아닐경우 !! 출력

let emoji = fruit === 'apple' ? '🍎' : '!!';
// fruit이 사과면 emoji에 사과 이모지 할당, 아닐경우 !! 할당
console.log(emoji);