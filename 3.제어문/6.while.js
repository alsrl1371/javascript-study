// while(조건) {}
// 조건이 false가 될떄까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while (isActive) {
  console.log('아직살아있다!');
  if (i === 100) {
    console.log('죽었당..');
    break;
  }
  i++;
}

do { // 일단 먼저 실행하고
console.log('메롱');
} while (isActive = false); // 조건을 검사함