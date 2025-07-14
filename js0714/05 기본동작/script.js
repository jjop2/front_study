document.querySelector('a').addEventListener('click', (e) => {
  // alert('네이버로 이동합니다');

  // 기본동작 막아줌
  e.preventDefault();

  console.log('aaaa');
});

// 우클릭 금지
document.querySelector('p').addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert('zzzzz');
})

document.querySelector('p').addEventListener('selectstart', (e) => {
  e.preventDefault();
  alert('드래그 막음');
})