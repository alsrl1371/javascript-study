const x = 0;
const y = 0;
// 키와 값이 같으면 생략 가능함
const coordinate = { x, y }; //{x: x, y: y};
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,   // name : name,
    age,   // age : age,
  };
}
