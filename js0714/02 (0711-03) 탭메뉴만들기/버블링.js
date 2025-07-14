const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

function clearClassList() {
  for(let i=0; i<btns.length; i++) {
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
  }
}

document.querySelector('.list').addEventListener('click', (e) => {
  let no = e.target.dataset.no;
  
  // 1~3번 탭 외의 ul 태그 영역을 클릭했을 때 발생하는 문제를 막기 위함
  //                 (콘솔창으로 보면 undefined 나옴)
  if( no != undefined ) {
    clearClassList();
    btns[no].classList.add('selected');
    contents[no].classList.add('show');
  }
})