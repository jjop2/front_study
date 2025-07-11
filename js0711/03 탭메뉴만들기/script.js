// 아까랑 똑같이 toggle...

const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

// 0,1,2의 모든 selected, show를 제거하는 함수
function clearClassList() {
  for(let i=0; i<btns.length; i++) {
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
  }
}

for(let i=0; i<btns.length; i++){
  btns[i].addEventListener('click', ()=>{
    clearClassList();
  
    btns[i].classList.add('selected');
    contents[i].classList.add('show');
  });
}


// 비효율적
// btns[0].addEventListener('click', ()=>{
//   btns[0].classList.add('selected');
//   contents[0].classList.add('show');
//   btns[1].classList.remove('selected');
//   contents[1].classList.remove('show');
//   btns[2].classList.remove('selected');
//   contents[2].classList.remove('show');
// });