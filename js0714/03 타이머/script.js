// 정해진 시간이 흐른 뒤 해당 코드가 작동되도록 함
// setTimeout( 콜백함수, 시간(ms) );

// console.log('js 로드 완료');

const time = document.querySelector('.time');

let t = 5;

const interval = setInterval(() => {
  t--;
  time.innerHTML = t;

  console.log(t);
}, 1000);

// 5초 뒤에 콜백함수가 실행됨
setTimeout(() => {
  document.querySelector('.alert').style.display = 'none';
  // 인터벌은 계속 돌아가고 있기 때문에, 클리어해서 멈춰줘야 함
  clearInterval(interval)
}, 5000);


// 정해진 시간이 흐른 뒤 해당 코드가 반복하며 작동
// setInterval( 콜백함수, 시간(ms) );

// setInterval(() => {
//   console.log('2초마다 실행되는 코드임');
// }, 2000);

let timer;

document.querySelector('.btn').addEventListener('click', () => {
  
  // 반드시 timer 값 넣기 전에 clear 해야 함
  clearTimeout(timer);

  timer = setTimeout(() => {
    console.log('클릭하면 3초 뒤에 나타남');
  }, 3000);

});