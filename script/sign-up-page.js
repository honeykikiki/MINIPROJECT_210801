const $cancel = document.querySelector("#cancel");
const $signForm = document.querySelector("#SIGN-form");
const $signUp = document.querySelector("#sign-up");
const $imgBox = document.querySelector("#img-box");
const $quotesImg = document.querySelector(".img");

const $inputId = document.querySelector("#input-id");
const $inputPw = document.querySelector("#input-pw");
const $inputName = document.querySelector("#input-name");
const $inputEmail = document.querySelector("#input-email");

const $checkeMan = document.querySelector("#man");
const $checkeGirl = document.querySelector("#girl");
const $cellNumberOne = document.querySelector("#txtMobile1");
const $cellNumberTwo = document.querySelector("#txtMobile2");
const $cellNumberThird = document.querySelector("#txtMobile3");

$checkeMan.checked = true;
if ($checkeGirl.checked) {
  $checkeMan.checked = false;
}

$inputId.focus();
$signForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let id = $inputId.value;
  let pw = $inputPw.value;
  let name = $inputName.value;
  let email = $inputEmail.value;

  let cellOne = $cellNumberOne.value;
  let cellTwo = $cellNumberTwo.value;
  let cellThird = $cellNumberThird.value;

  if (id == "") {
    alert("아이디를 입력해주세요");
    return;
  }
  if (pw == "") {
    alert("비밀번호를 입력해주세요");
    return;
  }
  if (name == "") {
    alert("이름을 입력해주세요");
    return;
  }
  if (email == "") {
    alert("이메일을 입력해주세요");
    return;
  }
  if (cellOne == "") {
    alert("전화번호를 입력해주세요");
    return;
  }
  if (cellTwo == "" || cellTwo.length !== 4 || cellTwo === Number) {
    console.log(cellTwo.length);
    alert("첫번쨰 전화번호를 4자리 입력해주세요");
    return;
  }
  if (cellThird == "" || cellThird.length !== 4 || cellThird === Number) {
    alert("두번쨰 전화번호를 4자리 입력해주세요");
    return;
  }

  if (id == pw) {
    alert("id와 pw는 같은 단어를 쓸수없습니다.");
    return;
  }

  // setcookie($inputId.value, $inputPw.value, $inputName.value, 7);

  console.log("완료");
  alert("가입완료되었습니다");
  setTimeout(() => {
    location.href = "login-page.html";
  }, 1000);
  $inputId.value = "";
  $inputPw.value = "";
  $inputName.value = "";
  $inputEmail.value = "";
  $cellNumberOne.value = "";
  $cellNumberTwo.value = "";
  $cellNumberThird.value = "";
});

$cancel.addEventListener("click", (event) => {
  location.href = "login-page.html";
});

function setcookie(id, value, name, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);

  let idCookie = "";
  idCookie += `id = ${id};`;
  idCookie += `Expires = ${date.toUTCString()}`;

  let pwCookie = "";
  pwCookie += `pw = ${value};`;
  pwCookie += `Expires = ${date.toUTCString()}`;

  // let nameCookie = "";
  // nameCookie += `${name} = ${name};`;
  // nameCookie += `Expires = ${date.toUTCString()}`;

  // document.cookie = nameCookie;
  document.cookie = pwCookie;
  document.cookie = idCookie;
}
