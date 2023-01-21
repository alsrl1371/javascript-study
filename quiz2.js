// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class 정보 {
  constructor(name, department, hoursPerMonth, pay) {
    this.name = name;
    this.departmentName = department;
    this.hoursPerMonth = hoursPerMonth;
    this.pay = pay;
  }
  calculatePay() {
    return this.hoursPerMonth * this.pay;
  }
}

class 정직원 extends 정보 {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, 정직원.PAY_RATE);
  }
}

class 파트직원 extends 정보 {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, 파트직원.PAY_RATE);
  }
}

const minki = new 정직원('민기', '홀', 5);
const sechan = new 파트직원('세찬', '조리', 7);
console.log(minki.calculatePay());
console.log(sechan.calculatePay());
