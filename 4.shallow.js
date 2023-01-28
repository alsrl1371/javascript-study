// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
const pizza = { name: '피자', price: 2, owner: {name: 'minki'}};
const ramen = { name: '라맨', price: 3 };
const sushi = { name: '스시', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store', store1);
console.log('store', store2);
console.log('-------------');

store2.push(sushi);
console.log('store', store1);
console.log('store', store2);
console.log('-------------');


pizza.price = 4;
console.log('store', store1);
console.log('store', store2);