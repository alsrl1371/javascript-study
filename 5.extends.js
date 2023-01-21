// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹는다!');
//   }
//   sleep() {
//     console.log('잔당..');
//   }
// }

// class dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹는다!');
//   }
//   sleep() {
//     console.log('잔당..');
//   }
//   play() {
//     console.log('놀장~');
//   }
// }

// 중복되는 함수가 있을 경우에 사용함
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹는다!');
  }
  sleep() {
    console.log('잔당..');
  }
}

class Tiger extends Animal { }
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 상속하고 있는 부모생성자의 컬러는 전달
    this.ownerName = ownerName; // 자신의 주인을 설정
  }
  play() {
    console.log('놀장~');
  }

  // 오버라이딩 overriding (덮어씌우기 가능함)
  eat() {
    super.eat(); // 부모생성자의 함수를 사용하면서 추가기능 구현 가능함
    console.log('강아지가 먹는당!');
  }
}

const tiger = new Tiger('노랑이');
const dog = new Dog('빨강이', '민기');
console.log(tiger);
console.log(dog);
tiger.sleep();
tiger.eat();
dog.play();
dog.eat();
