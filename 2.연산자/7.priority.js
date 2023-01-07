// 연산자도 우선순위가 있다.
let a = 2;
let b = 3;
let result = a + b * 4; // a + (b * 4)와 같음
console.log(result);
result = a++ + b * 4; // a + (b * 4)에 할당 후 증가 연산을 하여 result는 14지만 a는 3이 된다.
console.log(result);
console.log(a);
result = (a + b) * 4; // 괄호를 사용하여 우선 순위를 설정할 수 있다.
console.log(result);
