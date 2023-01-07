// 문자열타입
let string = "안녕하세요";
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는법
string = '"안녕!"';
console.log(string);

// 이스케이프 표현
string = '안녕!\n민기야!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = '민기';
let greetings = "'안녕!, " + id + "❤\n즐거운 하루 보내요!'";
console.log(greetings);

// 백틱은 줄바꿈도 그냥 가능하고 변수도 달러사인을 사용하여 쉽게 넣을 수 있다
greetings = `'안녕!, ${id}❤
즐거운 하루 보내요!`;
console.log(greetings);
