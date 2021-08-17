const $boxOneUsetIcon = document.querySelector(".box1-user-icon");
const $boxOneInfo = document.querySelector("#box1-info");
const $boxTwoLoginInfo = document.querySelector("#box2-login-info");
const $name = document.querySelector("#name");
const $id = document.querySelector("#id");
const $userId = document.querySelector("#user-id");

function getAjaxContents(names, emali) {
  // 채팅내역 가죠오는 함수
  return {
    async: false,
    crossDomain: true,
    url: "https://api.telegram.org/bot1918408282:AAFFtZL0IopsHoflal00SmVRZ2yVFz-D09E/getUpdates",
    method: "post",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: 722162061,
      text: "",
    }),
  };
}

let data = [];

$.ajax(getAjaxContents()).done(function (res) {
  data = res.result;
});

let time = Array(data.length).fill({ id: "", name: "", date: "" });
let sameValue = [];
let profile = Array(data.length);

function findListTabOne(v, i) {
  // 로그인 정보 함수
  v.text = JSON.parse(JSON.stringify(data[i].message.text));
  v.name =
    JSON.parse(JSON.stringify(data[i].message.from.last_name)) +
    JSON.parse(JSON.stringify(data[i].message.from.first_name));
  v.number = i;
  v.id = JSON.parse(JSON.stringify(data[i].message.from.id));
  v.date = new Date(JSON.parse(JSON.stringify(data[i].message.date)) * 1000).toString().slice(0, 24);

  time[i].id = v.id;
  time[i].name = v.name;
  time[i].date = v.date.slice(0, 24);
  // console.log(typeof v.date);

  sameValue.push(v.id, v.name);
  sameValue = [...new Set(sameValue)];

  console.log(sameValue[1]);
  if (sameValue[0] == v.id) {
    let li = document.createElement("li");
    li.append(` ${v.date} / 텍스트 ${v.text}`);
    $boxTwoLoginInfo.append(li);
  }
}

data.map((v, i) => {
  findListTabOne(v, i);
});

$boxOneUsetIcon.style.background = `url(img/profile/${Math.ceil(Math.random() * 5)}.png) no-repeat center center`;
$boxOneUsetIcon.style.backgroundSize = `contain`;

$name.append(`이름 : ${sameValue[1]}`);
$id.append(`아이디 : ${sameValue[0]}`);
