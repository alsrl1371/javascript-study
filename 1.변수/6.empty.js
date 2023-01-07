// null, undefined
let variable;
console.log(variable);

variable = null;
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!, 정해지지 않은 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!, 확실하게 비어있다는 상태!

console.clear();

// typeof : 타입을 출력하는 연산자
console.log(typeof 123);
console.log(typeof null); // null이라는 object가 할당됨
console.log(typeof undefined); // memory에 아무것도 없음
