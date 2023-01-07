// 논리연산자 Logical operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용버전)
let num = 21;
if (num >= 0 || num < 9) {
  console.log('0보다 크거나 9보다 작거나..');
}

num = 8;
if (num >= 0 && num < 9) {
  console.log('0보다 크고 9보다 작아야 해!');
}

console.log('-----------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-----------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('-----------');
console.log(!'text'); // false
console.log(!!'text'); // true
