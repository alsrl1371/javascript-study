const fruits = ['๐', '๐', '๐', '๐'];
for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// ๋ฐฐ์ด์ ๋น๊ธ ๋น๊ธ ๋๋ฉด์ ์ํ๋ ๊ฒ(์ฝ๋ฐฑํจ์)์ ํ  ๋
console.log('------------- ํฌ์ด์น๋ฌธ');
fruits.forEach((value, index) => {
  console.log(value);
  console.log(index);
});

// ์กฐ๊ฑด์ ๋ง๋(์ฝ๋ฐฑํจ์) ์์ดํ์ ์ฐพ์๋
// find: ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ๋ฐํ
console.log('------------- ํ์ธ๋');
const item1 = { name: '์ฐ์ ', price: 2};
const item2 = { name: '์ฟ ํค', price: 3 };
const item3 = { name: '์ฃผ๋จน๋ฐฅ', price: 1 };
const products = [item1, item2, item3, item2];
let found = products.find((value) => value.name === '์ฟ ํค');
console.log(found);

// findIndex: ์ ์ผ ๋จผ์  ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ ์ธ๋ฑ์ค๋ฅผ ๋ฐํ
console.log('------------- ํ์ธ๋์ธ๋ฑ์ค');
found = products.findIndex((value) => value.name === '์ฟ ํค');
console.log(found);

// ๋ฐฐ์ด์ ์์ดํ๋ค์ด ๋ถ๋ถ์ ์ผ๋ก ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ
console.log('------------- ํ๋๋ผ๋ ๋ง์ผ๋ฉด ํธ๋ฃจ ๋ฐํ');
result = products.some((item) => item.name === '์ฟ ํค');
console.log(result);

// ๋ฐฐ์ด์ ์์ดํ๋ค์ด ์ ๋ถ ์กฐ๊ฑด(์ฝ๋ฐฑํจ์)์ ๋ง๋์ง ํ์ธ
console.log('------------- ์ ๋ถ ๋ง์ผ๋ฉด ํธ๋ฃจ ๋ฐํ');
result = products.every((item) => item.name === '์ฟ ํค');
console.log(result);

// ์กฐ๊ฑด์ ๋ง๋ ๋ชจ๋  ์์ดํ๋ค์ ์๋ก์ด ๋ฐฐ์ด๋ก!
console.log('------------- ์ฟ ํค์ ์ด๋ฆ์ ๊ฐ์ง ๋ฐฐ์ด๋ง ๋ฐฐ์ด๋ก ๋ง๋ค์ด์ค');
result = products.filter((item) => item.name === '์ฟ ํค');
console.log(result);

// Map ๋ฐฐ์ด์ ์์ดํ๋ค์ ๊ฐ๊ฐ ๋ค๋ฅธ ์์ดํ์ผ๋ก ๋งคํํ  ์ ์๋, ๋ณํํด์ ์๋ก์ด ๋ฐฐ์ด ์์ฑ!
console.log('------------- ๋งคํํ๊ธฐ');
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
console.log('------------- ํ์ด์ ๋งคํํ๊ธฐ');
result = nums.map((item) => [1,2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result);

// sort ๋ฐฐ์ด์ ์์ดํ๋ค์ ์ ๋ ฌ
// ๋ฌธ์์ด ํํ์ ์ค๋ฆ์ฐจ์์ผ๋ก ์์๋ฅผ ์ ๋ ฌํ๊ณ , ๊ธฐ์กด์ ๋ฐฐ์ด์ ๋ณ๊ฒฝ
console.log('------------- ์ ๋ ฌํ๊ธฐ');
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
// < 0 a๊ฐ ์์ผ๋ก ์ ๋ ฌ, ์ค๋ฆ์ฐจ์
// > 0 b๊ฐ ์์ผ๋ก ์ ๋ ฌ, ๋ด๋ฆผ์ฐจ์
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce ๋ฐฐ์ด์ ์์๋ค์ ์ ์ด์ ์ ์ด์ ๊ฐ์ ํ๋๋ก
console.log('------------- ๊ฐ์ ํ๋๋ก ๋ง๋ค๊ธฐ');
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);