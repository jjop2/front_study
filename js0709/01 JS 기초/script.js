// 알림창 띄우기
// alert("자바스크립트 파일 만듦");

// 출력문 - 콘솔창에 띄움
console.log("콘솔창에 내용띄우기");

// html에 출력해주기
document.write("문서에 쓰기");


// 변수 만들기
var 변수명; // 옛날 거
let 변수이름;

let msg = 'hello';
console.log(msg);
msg = 20;
console.log(msg);

// 상수
const COLOR = 'red';


let n = 12.345;
console.log( typeof(n) );
console.log( typeof msg );

// 실제로 나누기 0은 불가능하지만
// JS 수학적 연산은 전부 처리가 됨
// 대신 결과가 안 나오는 건 특수 숫자 값으로 처리
console.log( n / 0 );
console.log( typeof Infinity );
console.log( "abc" / 2 );
console.log( typeof NaN );

// 문자
// js에서는 문자(열)은 쌍따옴표, 작은따옴표, 빽틱
let str1 = "abc";
let str2 = 'abc';
let str3 = `abc`;

let age = 20;
let name = "홍길동";

// 홍길동님의 나이는 20살입니다. <출력할 것
console.log(name + "님의 나이는 " + age + "살입니다.");
console.log(`${name}님의 나이는 ${age + 5}살입니다.`)
console.log(typeof name)

// boolean
let check = true;
console.log( 10 >= 5 );
console.log(typeof check);

// null 값
// js에서 null은 존재하지 않음, 비어있다, 알수없다
let a = null;

// undefined : 값을 할당하지 않음
let x;
// let x = undefined;
console.log(x);