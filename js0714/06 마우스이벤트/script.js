document.querySelector('button').addEventListener('click', (e) => {
  // 0 : 왼쪽, 1 : 가운데, 2 : 오른쪽
  console.log(e.button);
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);

  console.log(e.clientX, e.clientY);
  console.log(e.pageX, e.pageY);

  if(e.ctrlKey) {
    alert('컨트롤 클릭함');
  }

  if(e.altKey && e.shiftKey) {
    alert('알트 쉬프트 클릭');
  }
})


// change : 변경되고 포커스가 나가면 작동
document.querySelector('input').addEventListener('change', () => {
  alert('change 이벤트 작동됨');
})


// input : 변경 감지되는 모든 순간 작동
document.querySelector('input').addEventListener('input', () => {
  console.log('input 이벤트 작동')
})

// cut : 잘라내기하는 순간 작동
// copy : 복사, paste : 붙여넣기