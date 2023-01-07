// 단항연산자 (Unary operators)
// + (양)
// - (음)
// ! (부정)
let a = 5;
a = -a; // -1 * 5
console.log(a); // -5
a = -a; // -1 * -5
console.log(a); // 5

a = +a; // +1 * 5
console.log('+ 넣은 값 ' + a); // 5

a = -a; // -5
a = +a; // +(-5)
console.log(a); // -5

let boolean = true;
console.log(boolean); // ture
console.log(!boolean); // ! 부정으로 인하여 false
console.log(!!boolean); // !! 부정의 부정으로 인하여 true

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

console.log(!!1); // ! 부정연산자
// !! 값을 boolean 타입으로 변환함