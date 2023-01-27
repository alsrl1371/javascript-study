// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');
// apple.#name = '오렌지'; #field는 외부에서 접근이 불가능함
console.log(apple);
console.log(orange);
apple.display();
orange.display();