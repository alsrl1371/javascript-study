// let 재할당이 가능
let a = 1;
a = 2;

/** const 재할당이 불가능
 * 1. 상수
 * 2. 상수변수 또는 변수
 */
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
};
// apple = {};
console.log(apple);
apple.name = 'orange';
apple.display = '🍏' 

// const apple을 사용하면 apple에 다른 메모리 주소를 담을수 없지만 오브젝트는 변경이 가능하다.
console.log(apple);
