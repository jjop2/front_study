const FRUITS = [
  { name: 'apple', memo : '빨갛고 맛있는 사과'},
  { name: 'mango', memo : '달달하고 맛있음'},
  { name: 'melon', memo : '그냥 맛있다'}
];

//                   card-body 클래스 안의 h5 지목
// document.querySelectorAll('.card-body h5')[0].innerHTML = FRUITS[0].name;
// document.querySelectorAll('.card-body p')[0].innerHTML = FRUITS[0].memo;
// document.querySelectorAll('img')[0]
// .setAttribute( 'src', `./요소추가연습이미지/${FRUITS[0].name}.jpg` );

// 변수에 담아놓고 쓰는 게 좋음... 길잖아
// const cardTitle = document.querySelectorAll('.card-body h5');
// const cardMemo = document.querySelectorAll('.card-body p');
// const cardImg = document.querySelectorAll('img');

// for(let i=0; i<FRUITS.length; i++) {
//   cardTitle[i].innerHTML = FRUITS[i].name;
//   cardMemo[i].innerHTML = FRUITS[i].memo;
//   cardImg[i].setAttribute('src', `./요소추가연습이미지/${FRUITS[i].name}.jpg`);
// };


// === 카드 틀을 매번 생성하기 ===

// 방법1 : 모든 태그들을 텍스트로 작성하여 innerHTML로 삽입
// document.querySelector('.row').innerHTML = card;
//  => 1개만 가능하거나 복잡함 : innerHTML는 누적 추가 불가능

// 방법2 : 가장 상위의 col 클래스만 태그 형식으로 만들고
//        나머지는 텍스트로 작성 후 append 사용
//  => 가능하지만 매번 태그 하나 만들어야 하는 번거로움

// 방법3 : insert 사용
// beforebegin : 해당 요소 앞에 html을 넣어줌 (형제)
// afterbegin : 해당 요소 첫번째 자식으로 추가
// beforeend : 해당 요소 마지막 자식으로 추가
// afterend : 해당 요소 뒤에 넣어줌 (형제)

for(let i=0; i<FRUITS.length; i++) {
  let card = `
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="./요소추가연습이미지/${FRUITS[i].name}.jpg" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${FRUITS[i].name}</h5>
          <p class="card-text">${FRUITS[i].memo}</p>
          <button class="btn btn-primary cart">담기</button>
        </div>
      </div>
    </div>
  `;

  document.querySelector('.row').insertAdjacentHTML("beforeend", card);
  
}

const cart = document.querySelectorAll('.cart');

for(let i=0; i<cart.length; i++) {
  cart[i].addEventListener( 'click', (e) => {
    let nameTag = e.target.previousElementSibling.previousElementSibling;
    let name = nameTag.innerHTML;
//                                   대괄호 : 배열 '형태'로 들어감
    // localStorage.setItem( 'cart', JSON.stringify([name]) );
    // 위 방식은 새로 추가x 기존 것을 덮어씌우는 형태
    // 로컬스토리지에 안 날아가고 누적 추가가 되게 하려면 어떻게 해야 할까?
    // 그냥 setItem으로는 불가능함 => 동일한 key를 넣으면 기존 것 사라짐

    // 1. 이미 로컬스토리지에 cart가 존재하면 해당 값을 먼저 꺼내옴
    // 2. 꺼내온 데이터에 새로 담을 정보를 추가
    // 3. 추가된 데이터를 다시 로컬스토리지에 넣음


    let temp = localStorage.getItem('cart');

    // 로컬스토리지에 없는 키를 불러오라고 하면 null이 뜬다는 걸 활용
    if(temp != null) {
      // 로컬스토리지에 있으면 먼저 그 정보들을 꺼내와야 함
      // 문자열 형태이므로 원본이 배열로 되돌려줌
      temp = JSON.parse(temp);
      
      // 새로 장바구니에 담을 name을 추가 : push 사용하면 됨
      temp.push(name);

      // 추가된 정보를 로컬스토리지에 다시 넣음
      //          temp는 이미 배열 형태이기 때문에 대괄호 x
      localStorage.setItem('cart', JSON.stringify(temp));
      
    } else {
      localStorage.setItem('cart', JSON.stringify([name]));
    }
  })
}











// forEach
// FRUITS.forEach( (data, index) => {
//   console.log(data.name, index);
// } );

// // 로컬스토리지에 저장
// localStorage.setItem( '키', '값' )
// // 로컬스토리지에서 해당 키에 대한 값을 리턴해줌
// localStorage.getItem( '키' )
// // 로컬스토리지에서 해당 키를 삭제
// localStorage.removeItem( '키' )

// let arr = [1,2,3,4,5];
// let obj = {
//   name : 'kim',
//   age : 20
// };

// // 로컬스토리지에는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리됨
// localStorage.setItem( 'arr', arr );
// localStorage.setItem( 'obj', obj );

// // JSON형식으로 변환 : "[1,2,3,4]"
// // arr인 배열을 문자열(JSON)으로 변환
// let arr_json = JSON.stringify(arr);

// localStorage.setItem('arr', arr_json);

// arr = localStorage.getItem('arr');

// // 로컬스토리지에서 꺼내와도 아직까진 문자열임 (구조가 살아있는 상태)
// console.log(arr, typeof arr);

// // 문자열인 형태를 다시 배열로 되돌려줌
// arr = JSON.parse(arr);

// console.log(arr, typeof arr);