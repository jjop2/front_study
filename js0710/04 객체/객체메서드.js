// 객체(object)에는 함수(메서드)도 넣을 수 있음
let user = {
  name : '홍길동',
  age : 20
}

user.hi = () => {
  console.log('hi');
}

user.hi();

// 선언된 함수를 객체에 넣기
function hi2() {
  console.log('hi2');
}

user.hi2 = hi2; // user.hi2 = hi2(); <- xxx 괄호 없어야 함
user.hi2();

// 객체 생성할 때부터 함수를 포함하기
let user2 = {
  name : '김자바',
  age : 20,

  hi : function() {
    console.log(this.name);; // 자바와 똑같이 this 사용
  },

  hi2() {     // function 생략됨
    console.log('hi2');
  }
}

user2.hi();


// this를 활용하는 법
user = {name: '홍길동'};
user2 = {name: '김자바'};

function show() {
  console.log(this.name); // show 함수 내에서는 this가 가리키는 게 없어서 의미x
}

user.f = show;           // 그런데 이렇게 지정을 해주면 각 객체가 this가 됨 의미 생김
user2.f = show;

user.f();
user2.f();


// 객체 참조
let a = {
  name : '홍길동'
};
let b = a;  // a가 원시 타입이 아니라 참조 타입이라서,
            // a 객체의 주소값을 받았기 때문에 아래에서 변경 반영됨
a.name = '김자바';
console.log(b.name);


// 배열
let arr = [1,2,3,4];

arr[0] = 20;
arr[1] = "a";

arr.push("zzzz");

arr.pop();
console.log(arr);