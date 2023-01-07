// 증가 & 감소 연산자 (Increment & Decrement operators)
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);
a--; // a = a - 1;
console.log(a);

console.clear();
// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고 필요한 연산을 함
a = 0;
let b = a++; // 0을 먼저 할당하고 그 뒤에 증가시킴
console.log(b); // 0
console.log(a); // 1

// let b = ++a; 를 할 경우 증가시킨 후에 할당함
