const $SignUp = document.querySelector("#Sign-Up");
const $IdPwSearch = document.querySelector("#ID-PW-search");
const $login = document.querySelector("#login");
const $inputID = document.querySelector("#input-id");
const $checkBox = document.querySelector("#check-box");
const $inputPW = document.querySelector("#input-pw");
const $loginForm = document.querySelector("#login-form");

let ID;
let PW;
let date = new Date();

let fullYear = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let nowDay = `${fullYear}년 ${month + 1}월 ${day}일 ${hours}시${minutes}분${seconds}초 `;

let loginDate = [];

// console.log(document.cookie.split(";").join("=").split("="));

$inputID.focus();

$loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  ID = $inputID.value;
  PW = $inputPW.value;

  if ($checkBox.checked) {
    //아이디 저장 클릭시
    setCookie($inputID.value, true, 7);
  }

  if (!$checkBox.checked) {
    //아이디 저장 클릭 해제시
    setCookie($inputID.value, true, 0);
  }

  if (!ID) {
    //아이디가 비었을떄
    alert("아이디를 입력해주세요");
    $inputID.value = "";
    $inputPW.value = "";
    return;
  }

  if (!PW) {
    //비밀번호가 비었을떄
    alert("비밀번호를 입력해주세요");
    $inputPW.value = "";
    return;
  }

  // if (document.cookie.indexOf(ID) > -1 && document.cookie.indexOf(PW) > -1) {
  //   let names = $inputID.value;
  //   $.ajax(getAjaxContents(names)).done(function (res) {
  //     console.log(res);
  //   });
  //   setTimeout(() => {
  //     location.href = "main.html";
  //   }, 1000);
  // } else {
  //   alert("아이디 비밀번호가 틀렸습니다");
  //   $inputPW.value = "";
  // }

  if (ID === "test" && PW === "test") {
    let names = `${$inputID.value}님`;
    $.ajax(getAjaxContents(names)).done(function (res) {
      localStorage.setItem(ID, JSON.stringify(res));
    });
    setTimeout(() => {
      location.href = "main.html";
    }, 0);
  } else {
    alert("아이디 비밀번호가 틀렸습니다");
    $inputPW.value = "";
  }
});

function getAjaxContents(names) {
  return {
    async: false,
    crossDomain: true,
    url: "https://api.telegram.org/bot1918408282:AAFFtZL0IopsHoflal00SmVRZ2yVFz-D09E/sendMessage",
    method: "post",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: 722162061,
      text: nowDay + names,
    }),
    success: function (res) {},
  };
}
// api.telegram.org/bot1918408282:AAFFtZL0IopsHoflal00SmVRZ2yVFz-D09E/getUpdates 이걸로 객체로 받아오기

$SignUp.addEventListener("click", (event) => {
  location.href = "sign-up-page.html";
});

$IdPwSearch.addEventListener("click", (event) => {
  location.href = "ID-PW-search.html";
});

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);

  let idCookie = "";
  idCookie += `${name} = ${value};`;
  idCookie += `Expires = ${date.toUTCString()}`;

  document.cookie = idCookie;
}

setCookie($inputID.value, $inputID.value, 7);
