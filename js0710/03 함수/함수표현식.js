// 함수 선언문
function hello() {
  console.log('hello');
}

// 함수 표현식
// 변수에 함수가 담기는 형식
let hi = function() {
  console.log('hi');
}


// 콜백 함수

function yes() {
  console.log("예");
}

let no = function() {
  console.log("아니오");
}

function check(question, ok, cancle) {
  if(question === 'y')
    ok();
  else
    cancle();
}

check('ay', yes, no); // 괄호 들어가면 안 됨 : 함수 호출한다는 소리가 됨


function buy (item, price, stock, callback) {
  console.log(`${item}을 ${stock}개 구매함`);
  
  let total = price * stock;
  callback(total);
}

function pay(n) { 
  console.log(`총 금액 : ${n}`);
}

function pay2(n) {
  console.log(`총 금액(할인적용) : ${n * 0.9}`);
}


let 할인적용여부 = 'y';

if(할인적용여부 === 'y') {
  buy("컴퓨터", 100, 2, pay2);
} else {
  buy("컴퓨터", 100, 2, pay);
}


// setInterval(콜백함수, 시간)

// setInterval(hello, 1000);

// 익명함수의 형식으로도 가능
// setInterval(function() { 
//   console.log('a');
// }, 1000);