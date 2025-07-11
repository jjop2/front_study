const btn = document.querySelector('#btn');
// 여러번 쓸 경로는 변수에 담아서 쓰는 게 성능에 좋음
const body = document.body;

// btn.addEventListener('click', function() {
//   if(btn.value === '다크모드') {
//     body.style.background = 'black';
//     body.style.color = 'white';
//     btn.value = '라이트모드';
//   } else {
//     body.style.background = 'white';
//     body.style.color = 'black';
//     btn.value = '다크모드';
//   }
// });


// 쌤 답안

// 다크모드이면 true, 아니면 false
let isDark = false;

btn.addEventListener('click', () => {
  if(isDark) {
    body.style.background = 'white';
    body.style.color = 'black';
    btn.value = '다크모드';
    isDark = !isDark;
  } else {
    body.style.color = 'white';
    body.style.background = 'black';
    btn.value = '라이트모드';
    isDark = !isDark;
  }

})