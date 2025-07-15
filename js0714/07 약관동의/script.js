const box = document.querySelector('.box');

// 스크롤한 총 높이
let boxY = box.scrollHeight;
console.log(boxY);

// 눈에 보이는 높이
let boxHeight = box.clientHeight;
console.log(boxHeight);

let isDisabled = true;

// 스크롤을 얼만큼 움직였는지 인식함
box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
  
  // 이왕이면 isDisabled 조건이 더 먼저 오는 게 성능에 좋음 (굳이 계산식 안 하니까)
  //                   오차범위 5~10 여유 주기
  if( isDisabled && boxHeight + scroll > boxY - 5 ) {
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }
})


// 버튼을 누르면
// 약관 동의를 안 했을 경우 ⇒ 동의하십쇼 라는 모달창
// 약관 동의를 했을 경우 ⇒ 다음 페이지로 이동합니다. 라는 모달창

const btn = document.querySelector('.container button');
const chkBox = document.querySelector('#chk');

btn.addEventListener('click', () => {
  if( chkBox.checked ) {
    alert('다음 페이지로 이동합니다.');
  }
  else {
    alert('동의하십시오.');
  }
})

// window : 이 창 자체, 브라우저 화면
console.log(window.innerHeight);
console.log(document.body.clientHeight);

/*
  화면 높이, 전체 총 높이 스크롤 얼마나 했는지(아래) <- 까지 구함
  전체 총 높이 - 화면 높이 => 스크롤 최대 가동범위와 유사할 것임
  스크롤 얼마나 했는지 / (전체 총 높이 - 화면 높이) - 이걸로 써먹자
  ex. 10/100 ~> 20/100 ~> 30/100
*/

const innerHeight = window.innerHeight;
const bodyHeight = document.body.clientHeight;

window.addEventListener('scroll', () => {
  // console.log(window.scrollY);

  const status = window.scrollY / (bodyHeight - innerHeight) * 100;

 document.querySelector('.status-bar').style.width = `${status}%`;
})
