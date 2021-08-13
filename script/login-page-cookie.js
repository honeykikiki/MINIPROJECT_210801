// const $checkBox = document.querySelector("#check-box");
const $inputId = document.querySelector("#input-id");

// 쿠키생성
function setcookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);

  let idCookie = "";
  idCookie += `${name} = ${value};`;
  idCookie += `Expires = ${date.toUTCString()}`;

  document.cookie = idCookie;
}

//  쿠키제거
function delCookie(name, value) {
  let date = new Date();
  date.setDate(date.getDate() - 1);

  let idDelCookie = "";
  idDelCookie += `${name} =${value};`;
  idDelCookie += `Expires = ${date.toUTCString()}`;

  document.cookie = idDelCookie;
}

// 쿠키확인
function checkCookie(name) {
  console.log(document.cookie);
  let cookie = document.cookie.split(";");
  for (let i in cookie) {
    if (cookie[i].indexOf(name) > -1) {
      console.log(cookie[i]);
    }
    cookieName = cookie[i].split("=");
    $inputId.value = cookieName[0];
    $checkBox.checked = cookieName[1];
  }
}

// checkCookie("아이디");

console.log(checkCookie("아이디"));
