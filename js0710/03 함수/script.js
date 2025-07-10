// 함수 - 자바의 메서드와 똑같음
function showMsg() {
  let msg = "하이";
  
  console.log(msg);
}

// 함수호출
showMsg();

// msg변수는 shoMsg함수의 지역변수이므로 사용못함
// console.log(msg);

let name = '홍길동';

function showInfo() {
  name = "고길동";
  let msg =  `안녕하세요 ${name}님`;

  console.log(msg);
}

console.log(name);
showInfo();
console.log(name); // 함수 호출하면서부터 name의 값이 고길동으로 바뀐 것임
                   // 왜냐면 showInfo 함수는 name 값을 바꿔주는 기능을 포함함
                   // showInfo 내에서 생성된 변수가 지역변수인 거지 (let name = "고길동";)
                   // 그 안에서 값 자체를 바꿔준 건 밖의 변수값을 바꿔주기에 외부에서도 유효함


