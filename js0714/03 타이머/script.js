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


// 날짜 관련 함수들
// 현재 날짜와 시간
const date = new Date();
console.log(date);

// 년도 추출
console.log(date.getFullYear());
// 월 추출 - 0부터 11로 출력
console.log(date.getMonth());
// 일 추출
console.log(date.getDate());
// 요일 추출 - 0:일요일, 6:토요일
console.log(date.getDay());

// 시간 추출
console.log(date.getHours());
// 분 추출
console.log(date.getMinutes());
// 초 추출
console.log(date.getSeconds());


// 전자시계 만들기

const clock = document.querySelector('.clock');

function insertTime() {
  const date = new Date(); // 매번 날짜를 가져와주는 것임
  // 밑에 얘들만 계속 생성해줘봤자, 현재 날짜가 기존에 생성된 날짜 그대로 고정 중임
  // 날짜 자체도 아예 새로 생성해줘야 함
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);

  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
};

// 페이지 들어가자마자 뜨게 하기 위해, 우선 한번 실행
insertTime();
setInterval(insertTime, 1000);

// padStart, padEnd
// let a = `1`;
// console.log( a.padEnd(2, 0) );