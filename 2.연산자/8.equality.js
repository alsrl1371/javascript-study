// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2); 
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // 타입까지 비교하는게 좋음
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {  // 예 : 메모리주소 0x111
  name: 'js',
};
const obj2 = {  // 예 : 메모리주소 0x112
  name: 'js',
};

console.log(obj1 == obj2); // 서로 다른 메모리주소를 가지고 있기 때문에 false가 나온다.
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name); // 같은 스트링타입의 js 이름을 가지고 있기 때문에 true가 나옴

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2); // 동일한 메모리주소를 가지고 있기 때문에 true가 나온다.
