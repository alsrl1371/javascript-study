const fruits = ['🍌', '🍓', '🍇', '🍓'];
for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// 배열을 빙글 빙글 돌면서 원하는 것(콜백함수)을 할 때
console.log('------------- 포이치문');
fruits.forEach((value, index) => {
  console.log(value);
  console.log(index);
});

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
console.log('------------- 파인드');
const item1 = { name: '우유', price: 2};
const item2 = { name: '쿠키', price: 3 };
const item3 = { name: '주먹밥', price: 1 };
const products = [item1, item2, item3, item2];
let found = products.find((value) => value.name === '쿠키');
console.log(found);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
console.log('------------- 파인드인덱스');
found = products.findIndex((value) => value.name === '쿠키');
console.log(found);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
console.log('------------- 하나라도 맞으면 트루 반환');
result = products.some((item) => item.name === '쿠키');
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
console.log('------------- 전부 맞으면 트루 반환');
result = products.every((item) => item.name === '쿠키');
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
console.log('------------- 쿠키의 이름을 가진 배열만 배열로 만들어줌');
result = products.filter((item) => item.name === '쿠키');
console.log(result);

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
console.log('------------- 매핑하기');
const nums = [1,2,3,4,5];
result = nums.map((item) => item *2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: 
console.log('------------- 풀어서 매핑하기');
result = nums.map((item) => [1,2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
console.log('------------- 정렬하기');
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce 배열의 요소들을 접어서 접어서 값을 하나로
console.log('------------- 값을 하나로 만들기');
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);