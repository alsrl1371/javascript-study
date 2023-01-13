// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
// add = (a, b) => {
//   return a + b;
// };
// 특별한 일을 하지 않고 값만 리턴 받을때에는 괄호와 리턴을 생략 가능하다
add = (a, b) => a + b;
console.log(add(1, 2));


// 생성자 함수도 있음 const object = new Function(); 객체에서.


// IIFE (Immedicately-Invoked Function Expresstions) 즉각적으로 실행하는 함수
(function run() {
  console.log('!!');
})();