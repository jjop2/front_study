// 클래스 자체를 제어(추가/삭제)하기
// js에서 모두 제어하는 것보다 이렇게 css에서 아예 클래스 설정하고
// js에서 탈부착하는 형식이 js의 성능을 더 높일 수 있음
// 일반적으로도 이런 방식으로 많이 씀

const btnBoard = document.querySelector('#open');
const btnClose = document.querySelector('#close');
const modalBox = document.querySelector('.black-bg');

// js문법
// btnBoard.addEventListener('click', () => {
//   modalBox.classList.add('show');
// });

// jQuery
$('#open').on( 'click', () => {
  $('.black-bg').addClass('show');
} )

// js
// btnClose.addEventListener('click', () => {
//   modalBox.classList.remove('show');
// });

// jQuery
$('#close').on('click', ()=>{
  $('.black-bg').removeClass('show');
})
