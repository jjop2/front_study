const FRUITS = [
  { name: 'apple', memo : '빨갛고 맛있는 사과'},
  { name: 'mango', memo : '달달하고 맛있음'},
  { name: 'melon', memo : '그냥 맛있다'}
];

//                   card-body 클래스 안의 h5 지목
document.querySelectorAll('.card-body h5')[0].innerHTML = FRUITS[0].name;
document.querySelectorAll('.card-body p')[0].innerHTML = FRUITS[0].memo;
document.querySelectorAll('img')[0]
.setAttribute( 'src', `./요소추가연습이미지/${FRUITS[0].name}.jpg` );