let regex = /\d{3}-\d{4}-\d{4}/;

let tel = '010-1234-5678';
let tel2 = '02-123-4567';

let result = regex.test(tel2);
// console.log(result);



// 정규표현식 만드는 법
// 슬래시 사이에 정규식을 작성하는 법
// regex = /정규식/;
// 정규식 생성자를 통해서 만드는 법
// regex = new RegExp("정규식");

// 정규식 형태
// /정규식패턴/플래그

// 정규식 객체 내장 메서드
regex = /abc/;
 
// test메서드
// 정규식 검사를 해서 통과하면 true, 아니면 false
result = regex.test("가나다 abc 123");
console.log("test메서드 결과", result);

// match메서드 (문자열 함수)
// 정규식에 통과한 데이터를 배열로 리턴
let str = "가나다 abc 123";
result = str.match(regex);
console.log("match함수 결과", result);

// replace (문자열 함수)
// 지정한 문자를 변경시켜주는 함수
str = "가나다 abc 123";
result = str.replace(regex, "ㅋㅋㅋ");
console.log("replace함수 결과", result);


console.log("======플래그 테스트=======")
// 플래그 : 정규식 옵션
regex = /a/
str = "abcabcabc";
result = str.match(regex);
console.log(result);

// 글로벌 플래그 설정
regex = /a/g
str = "abcabcabc";
result = str.match(regex);
console.log(result);

// 대소문자 구별
// i 플래그 : 대소문자 구별 안 함
regex = /a/gi
str = "abcAbcabc";
result = str.match(regex);
console.log(result);


// m 플래그 : 문자열이 여러 줄이어도 검사
// s 플래그 : 줄바꿈인 \n도 포함


// 정규식에 사용되는 기호들
// 문자
// 알파벳 범위 지정
// a-z, A-Z
// 한글 범위
// ㄱ-ㅎ, 가-힣
// 숫자 범위
// 0-9

// . : 모든 문자


str = "Abcd1234";
regex = /[a-zA-Z0-9]{4,12}/g;

result = regex.test(str);
console.log(result);