function add(a, b) {
  return a + b;
}
const sum = add; // add와 sum은 함수의 메모리주소를 가르키고 있다

// 따라서 아래는 동일한 코드이다.
console.log(sum(1,2));
console.log(add(1,2));
