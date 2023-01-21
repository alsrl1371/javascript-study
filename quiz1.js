// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  #value;
  constructor(startValue) {
    // 숫자가 아니거나 0보다 작을경우 값을 0으로 초기화 함
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      // 0보다 큰 숫자가 주어진다면 그 숫자부터 카운터가 됨
      this.#value = startValue;
    }
  }
  
  // 외부에서 읽을수만 있게 값을 비공개로 리턴해줌
  get value() {
    return this.#value;
  }

  // 값을 증가 시키는 함수
  increment = () => {
    this.#value++;
  }
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);
