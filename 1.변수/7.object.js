/** 객체는 Heap 이라는 공간에 따로 저장이 된다.
 * 객체의 변수 이름은 Heap 공간 안에 있는 객체의 메모리주소를 가르킨다.
 * 객체는 커다랗기 때문에 하나의 메모리 안에 다 들어갈 수 없기 때문에 Heap 에 저장된다.
 */
let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
};
console.log(apple);
console.log(apple.name);
console.log(apple.display);

let orange = {
  name: 'orange',
  color: 'orange',
  display: '🍊'
};
console.log(orange);