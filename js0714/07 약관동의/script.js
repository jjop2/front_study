const box = document.querySelector('.box');

// 스크롤한 총 높이
let boxY = box.scrollHeight;
console.log(boxY);

// 눈에 보이는 높이
let boxHeight = box.clientHeight;
console.log(boxHeight);

// 스크롤을 얼만큼 움직였는지 인식함
box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
  console.log(scroll);
})