// Object literal { key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
  name: 'apple', // 대부분 이렇게 깔끔하게 작성함
  'hello-bye': '!!',
  0: 1,
  ['hello-bye1']: '!!!',
}
console.log(apple);

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation
apple['name']; // 대괄호로도 접근 가능함

// 속성 추가
apple.emoji = '❓'
console.log(apple.emoji);

// 속성 삭제
delete apple.emoji;
console.log(apple.emoji);
