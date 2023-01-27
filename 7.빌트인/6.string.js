const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length); // 문자열 길이 확인

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);

console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l')); // 앞에서 몇번째 인덱스인지 확인
console.log(text.lastIndexOf('l')); // 뒤에서 몇번째 인덱스인지 확인

console.log(text.includes('tx')); // 문자열이 있는지 확인

console.log(text.startsWith('He')); // 이 문자열로 시작하는지 확인
console.log(text.endsWith('d!')); // 이 문자열로 끝나는지

console.log(text.toUpperCase()); // 대문자 변환
console.log(text.toLowerCase()); // 소문자 변환

console.log(text.substring(0, 2)); // 0부텉 1 인덱스까지 문자열 가져옴
console.log(text.slice(2)); // 1인덱스 까지 잘라내서 가져옴
console.log(text.slice(-2));

const space = '     space       ';
console.log(space.trim()); // 공백제거

const longText = 'Get to the, point';
console.log(longText.split(' ')); // 스페이스 단위로 끊기
console.log(longText.split(',', 2)); // 콤마 단위로 끊어진 것중 2개만 가져오기



