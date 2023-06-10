// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
console.log('-------------- 배열 만들기');
const fruits = ['🍌', '🍅', '🍋'];
console.log(fruits);


// 특정한 오브젝트가 배열인지 체크
console.log('-------------- 배열 체크');
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));


// 특정한 아이템의 위치를 찾을때
console.log('-------------- 배열 위치 찾기');
console.log(fruits.indexOf('🍅'));


// 배열안에 특정한 아이템이 있는지 체크
console.log('-------------- 배열안에 아이템이 있는지 체크');
console.log(fruits.includes('🍅'));


// 추가 - 제일 뒤
console.log('-------------- 배열 제일 뒤 추가');
let length = fruits.push('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);


// 추가 - 제일 앞
console.log('-------------- 배열 제일 앞 추가');
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);


// 제거 - 제일 뒤
console.log('-------------- 배열 제일 뒤 제거');
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);


// 제거 - 제일 앞
console.log('-------------- 배열 제일 앞 제거');
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);


// 중간에 추가 또는 삭제
console.log('-------------- 중간에 삭제');
let deleted = fruits.splice(1,1); // 1번 인덱스부터 1개 삭제한다
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted);

console.log('-------------- 중간에 추가');
fruits.splice(1, 0, '🍅', '🍓'); // 1번 인덱스부터 0개 삭제후 토마토와 딸기를 추가한다
console.log(fruits); // 배열 자체를 수정(업데이트)


// 잘라진 새로운 배열을 만듬
console.log('-------------- 잘라내기 붙여넣기');
let newArr = fruits.slice(0,2); // 0번 인덱스부터 2까지 잘라내서 붙여넣음
console.log(newArr);
console.log(fruits);
newArr = fruits.slice();
console.log(newArr);


// 여러개의 배열을 붙여줌
console.log('-------------- 배열 합치기');
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);


// 순서를 거꾸로
console.log('-------------- 배열 거꾸로');
const arr4 = arr3.reverse();
console.log(arr4);


// 중첩 배열을 하나의 배열로 쫙 펴기
console.log('-------------- 중첩 배열 풀기');
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat()); // 1단계 까지만 풀어준다.
console.log(arr.flat(2)); // 2단계 까지 풀어준다.
console.log(arr.flat(3)); // 3단계 까지 풀어준다.
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
console.log('-------------- 특정한 값으로 배열 채우기');
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
console.log('-------------- 배열 문자열로 합하기');
let text = arr.join();
console.log(text);
text = arr.join('!');
console.log(text);
