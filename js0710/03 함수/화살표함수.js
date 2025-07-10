// 화살표함수 : 자바에 람다와 유사함
// 함수 작성하는 코드를 간결하게 만들 수 있음

// 기존 방식 : 선언문, 표현식
// function sum(a, b) {
//   return a+b;
// }

// let sum = function(a, b) {
//   return a+b;
// };

let sum = (a, b) => a + b; // 한 줄이라 return 생략됨
let sum2 = (a, b) => {
  return a + b;
};

let a = () => {
  console.log('aaaa');
};

sum(10, 5);
a();