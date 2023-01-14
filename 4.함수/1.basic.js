// 사용예제 1 : 기본적인 더하기 함수
function add(num1, num2) {
  console.log('function');
  return num1 + num2;
}
const result = add(1, 2);
console.log(result);

// 사용예제 2 : 함수 안의 코드만 바꾸면 라스트 네임과 퍼스트네임의 순서를 바꿀 수 있다.
function fullName(firstName, lastName) {
  return lastName + firstName;
}
addName = fullName('김', '지수');
addName2 = fullName('박', '철수');
console.log(addName);
console.log(addName2);