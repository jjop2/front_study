// 옛날 문법
// const xhr = new XMLHttpRequest();
// 요청메서드
// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
// xhr.setRequestHeader("content-type", "application/json");

// const data = {
//   userId: 100,
//   title: '비동기통신 연습',
//   body: '이것저것보내는중'
// };

// xhr.send( JSON.stringify(data) );

// xhr.onload = () => {
//                                                // 404 같은 거
//   console.log(xhr.status);    // 응답 결과에 해당하는 상태코드
//   console.log( JSON.parse(xhr.response) );  // 응답 데이터
// }



// 요즘 문법
// fetch('요청주소')
// .then((변수) => 성공 시 처리할 코드)
// .then((변수) => 성공 시 처리할 코드)
// .catch((e) => 요청 실패 시 처리할 코드)

/*
(커뮤니티 사이트에 작성된 특정 게시글을 보려고 할 때)
get 요청 버튼을 사용자가 누름

서버로 나 xxx게시글 좀 보고 싶어요~ 라고 요청을 날림(요청)

서버가 요청을 받아서 보고 싶은 게시글을 찾음
=> DB에 접속해서 해당 게시글을 꺼내옴
사용자 -> 서버 -> DB

서버가 해당 게시글 데이터를 응답객체에 담아서
사용자한테 다시 보내줌(=응답처리)

사용자 측에서 응답데이터를 받아서 html화면에 이쁘게 뿌려짐
*/

const getBtn = document.querySelector('.get');
const postBtn  = document.querySelector('.post');

const title = document.querySelector('.title');
const id = document.querySelector('.id');
const userId = document.querySelector('.userId');
const body = document.querySelector('.body');

// get
getBtn.addEventListener('click', () => {

  // 요청 메서드 없어도 됨
  // 나 1번 게시글 보고 싶어요~ 하는 요청임
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  // 요청이 완료될 때까지 기다렸다가 응답 처리하는 코드가 실행되어야 함 -> then
    .then( (response) => response.json() )
    //                   = parse한 것과 같음
    .then( (data) => {
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userId.innerHTML = data.userId;
      body.innerHTML = data.body;
    })
    .catch( (e) => {
      console.log(e);
    })
    
})



const post_userId = document.querySelector("[name='userId']");
const post_title = document.querySelector("[name='title']");
const post_body = document.querySelector("[name='body']");

// post
postBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const data = {
    userId : post_userId.value,
    title : post_title.value,
    body : post_body.value
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'post',
    body: JSON.stringify(data),
    headers: {
      "content-type" : "application/json"
    }
  }).then( response => response.json() )
    .then( data => {
      console.log(data);
      alert('게시글 등록 완료!');
    })
    .catch( e => {
      console.log(e);
      alert('게시글 등록 실패');
    })
})


const async_test = document.querySelector('.async');

async_test.addEventListener('click', async () => {
  let a = 1;

  a = await fetch('https://jsonplaceholder.typicode.com/posts');
  a = await a.json();

  console.log(a);
})

function add(i) {

  for(i=0; i<10000; i++) {

  }

  return i;

}
