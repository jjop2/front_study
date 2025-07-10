let box = document.getElementById('box')
box.style.background= "red";
console.log(box);

// 선택자를 이용해서 요소를 선택할 수 있음
const box2 = document.querySelector('#box')
box2.style.color = 'white';
console.log(box2);

// 선택자에 해당하는 요소 중 첫번째 것 하나만 가져옴...
// const bg = document.querySelector('.bg');
// bg.style.background = 'pink';

// 선택자에 해당하는 모든 요소들을 가져옴
const bg = document.querySelectorAll('.bg');
// bg[1].style.background = 'pink';

// for(let i=0; i<bg.length; i++) {
//   bg[i].style.background = 'pink';
// }

// 향상된 for문 형식
// for ... in : object 반복할 때 사용하는 형식
// for ... of : 배열 반복

for(let b of bg) {
  b.style.background = 'pink';
}

const li = document.querySelectorAll('ul > li');
for(let l of li) {
  l.innerHTML = 'ㅋㅋㅋ';
}