// 이벤트 설정은 js 내에서 할 수 있다
const btn = document.querySelector('.btn');

// btn.onclick = function() {
//   alert('zzzzz');
// }

// btn.onclick = abc;

// function abc() {
//   alert("dddd");
// }

// 다만 이 방식은 여러 개 적용이 불가
// 그래서
// addEventListener 함수를 이용해서 이벤트 설정을 함

// 이벤트 종류 : 클릭, 더블클릭 등등...
// 이벤트핸들러 : 이벤트 발생 시 실행할 코드, 함수
// 요소.addEventListener(이벤트종류, 이벤트핸들러)

// 이벤트 삭제
// 요소.removeEventListener(이벤트종류, 이벤트핸들러)

btn.addEventListener( 'click', function() {
  alert('yyyy');
} )

// 위에 걸어둔 이벤트가 안 지워짐
// 위 add의 함수와 아래 remove의 함수는 내용은 똑같을지라도 다른 함수임=동일하지 x
btn.removeEventListener( 'click', function() {
  alert('yyyy');
} )

// 애초에 함수를 따로 만들어서, 나중에 삭제할 때 그걸 불러올 수 있을 상황이 되어야 했음
function handler() {
  alert("이건 지울 수 있음");
}

btn.addEventListener('click', handler);
btn.removeEventListener('click', handler); // 삭제됨


const btn2 = document.querySelector('.btn2');

// 이벤트 객체 : 이벤트가 발생할 때 생기는 모든 정보를 가지고 있음
btn2.addEventListener('click', function(e) {
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.target);
});