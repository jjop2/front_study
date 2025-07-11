const btns = $('.tab-button');
const contents = $('.tab-content');

btns.on('click', ()=>{
  btns.removeClass('selected');
  contents.removeClass('show');
})

