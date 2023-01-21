// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // 속성으로 함수를 만들어야 할때 사용
  get fullName() { // 호출하는 시점에 데이터를 만들어 리턴
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) { // 할당할 경우에 호출되는 함수
    console.log('set', value);
  }
}

const student = new Student('민기', '김');
console.log(student);
console.log(student.fullName);
student.fullName = '김철수';
