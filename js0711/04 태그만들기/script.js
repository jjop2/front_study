// js 태그를 생성
let div = document.createElement('div');

div.className = 'box';
div.innerHTML = "<b class='aaa'>div태그</b> 만듦";

document.body.prepend(div);

// 요소.append : 해당 요소 안쪽 마지막에 추가 (자식요소)
// 요소.prepend : 해당 요소 안쪽 첫 번째에 추가 (자식요소)
// 요소.before : 해당 요소 전에 추가 (형제관계)
// 요소.after : 해당 요소 후에 추가 (형제관계)

const ulTag = document.querySelector('.list');

let pTag = document.createElement('p');
pTag.innerHTML = "앞에 들어갈 p태그";

ulTag.before(pTag);

let liTag = document.createElement('li');
liTag.innerHTML = '새로 생성한 li태그';

ulTag.prepend(liTag);

liTag.remove();