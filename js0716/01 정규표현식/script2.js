const idInput = document.querySelector('#id-txt');
const pwInput = document.querySelector('#pw-txt');
const emailInput = document.querySelector('#email-txt');
const telInput = document.querySelector('#phone-txt');

const idCheck = document.querySelector('#id-check');
const pwCheck = document.querySelector('#pw-check');
const emailCheck = document.querySelector('#email-check');
const telCheck = document.querySelector('#phone-check');

const submitBtn = document.querySelector('.reg-req-btn');


// 8~20자 영문대소문자, 숫자, 밑줄 조합이 가능함
const regexId = /^\w{8,20}$/;
// 알파벳대소문자,숫자,지정된특수문자 조합 8글자 이상
// 대신 각 알파벳대소문자, 숫자, 특수문자는 1개 이상이어야 함
const regexPw =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;

/*
  input : 사용자가 입력한 input태그
  regex : 해당 정규식
  elem : 정규식 검사 후 결과를 표시할 p태그
*/
function validateInput(input, regex, elem) {
  let value = input.value;

  if(regex.test(value)) {
    elem.innerHTML = '사용 가능합니다.';
    elem.classList.add('valid');
    return true;
  } else {
    elem.innerHTML = '사용 불가능합니다.';
    elem.classList.remove('valid');
    return false;
  }
}

// 회원가입버튼 활성화/비활성화 시켜주는 함수
function updataSubmit() {
  const idResult = validateInput(idInput, regexId, idCheck);
  const pwResult = validateInput(pwInput, regexPw, pwCheck);
  const emailResult = validateInput(emailInput, regexMail, emailCheck);
  const telResult = validateInput(telInput, regexTel, telCheck);

  if(idResult && pwResult && emailCheck && telResult) {
    // 회원가입버튼 활성화
    submitBtn.disabled = false;
    submitBtn.classList.add('enabled');
  } else {
    // 비활성화
    submitBtn.disabled = true;
    submitBtn.classList.remove('enabled');
  }
}


idInput.addEventListener('input', () => {
 updataSubmit();
})

pwInput.addEventListener('input', () => {
  updataSubmit();
})

emailInput.addEventListener('input', () => {
  updataSubmit();
})

telInput.addEventListener('input', () => {
  updataSubmit();
})

