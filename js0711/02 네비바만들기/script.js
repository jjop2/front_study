const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');
let isShow = false;

// btn.addEventListener('click', ()=>{
//   if(isShow) {    // => isShow가 true일 때 = 메뉴가 보이고 있을 때
//     list.classList.remove('show');
//     isShow = !isShow;
//   } else {        // => isShow가 false일 때 = 메뉴가 보이지 않을 때
//     list.classList.add('show');
//     isShow = !isShow;
//   }
// });

// 위 방법 안 써도 됨

btn.addEventListener('click', ()=>{
  // js
  list.classList.toggle('show');

  // jQuery
  // $('.list-group').toggleClass('show');
});


// li태그 어떤 걸 클릭해도 alert이 나타나게 함
// 메세지 내용은 : ㅋㅋ

const liTags = document.querySelectorAll('.list-group-item');

// addEventListener는 해당 태그를 콕 찝어야 하는 것! 배열은 안 됨

for(let i=0; i<liTags.length; i++) {
  liTags[i].addEventListener('click', ()=>{
    alert('ㅋㅋ');
  });
}

// jquery
// $('.list-group-item').on('click', ()=>{
//   alert('ㅋㅋ');
// })