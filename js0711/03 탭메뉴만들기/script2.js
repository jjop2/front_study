const btns = $('.tab-button');
const contents = $('.tab-content');

btns.on('click', (e)=>{
  btns.removeClass('selected');
  contents.removeClass('show');
  
  // dataset
  let no = e.target.dataset.no;
  // jQuery에서는 배열방 번호 [대괄호]아니고 eq(번호) 사용
  btns.eq(no).addClass('selected');
  contents.eq(no).addClass('show');
})