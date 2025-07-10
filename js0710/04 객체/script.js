// 객체(object) - 자바에서 Map과 유사
// key, value가 한쌍으로 구성
let user = {
  name: '홍길동',
  age: 20,
  'math score': 100 // 키에 공백 가능하기는 하나 거의 안 씀
};

console.log(user.name);
console.log(user.age);
console.log(user['age']);
console.log(user['math score']);

const member = {
  name : '홍길동',
  age :  20
}

console.log(user);
user = 10;  // 변경 가능
console.log(user);

// 당연히 상수니까 변경을 못함
// member = 10;

// 상수지만 큰 구조는 변경하지 않고
// 안쪽 내용만 수정은 가능함
member.name = "김자바";
console.log(member);

// 이름을 보고 싶은지 나이를 보고 싶은지 입력 받음
let key = "name";

console.log(member[key]); // = member["name"]


let item = "사과";

let cart = {
  [item] : 5
};

console.log(cart);


// 10명의 회원정보가 각각 담긴 객체를 생성
function makeUserObject(name, age) {
  let obj = {
    name : name, // key로 설정할 이름과 value로 설정할 매개변수가 동일하면
                 // 생략해서 하나만 써도 됨
    age // = age : age
  };

  return obj;

}

let a = makeUserObject('홍길동', 20);
let b = makeUserObject('김자바', 11);
console.log(a, b);

// key, value 추가하기
a.addr = "강동구";
console.log(a);

// key, value 삭제하기
delete a.addr;
console.log(a);

// 구조분해 할당
// console.log( ...a ); => 대괄호 사라짐 - name : '홍길동' ~
// console.log({ ...a }); 이렇게 대괄호를 다시 쳐주면 돌아감

let { age, ...r } = a;
// age키의 값 , 나머지는 r로
// 왼쪽 <- 오른쪽 대입 방향이잖아. 그러니까 a를 조각조각 나눠서 let {}에 넣는 거지
console.log(age);
// age의 밸류인 20 출력
console.log(r);
// r에 들어간 나머지 녀석들인 {name:홍길동} 출력

console.log({...r, age:30});
// { } 떴다 재조합 ㄱㄱ
// 뒤의 age 제외 나머지를 다시 r에 넣고, age는 값이 바뀜
// {name:홍길동, age:30} 출력


// in 연산자로 키가 있는지 없는지 검색 가능
console.log( "name" in a );
console.log( "asdf" in a );

// 향상된 for문과 같은 구조로 돌아감
for( let key in a ) {
  console.log(`${key} : ${a[key]}`);
}