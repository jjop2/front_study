const btn = document.querySelector('#btn');
// 여러번 쓸 경로는 변수에 담아서 쓰는 게 성능에 좋음
const body = document.body;

btn.addEventListener('click', function() {
  body.style.background = 'black';
  body.style.color = 'white';
});


