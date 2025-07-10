function show(state) {
    document.getElementById('ab').style.display = state;
}

// 변수명이 자바에서 쓰는 거면 오류날 수 있음=hidden 등등... 변수명 바꿔보기
// function hide() {
//   document.getElementById('ab').style.display = 'none';
// }

// 알림창1,2,3 누르면 서로 다른 메세지가 보이도록 구현

function msg(num) {
  document.querySelector('.alert').innerHTML = `알림창${num}을 눌렀다`;
};