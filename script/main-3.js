const $loginInfo = document.querySelector("#list ul li:first-child");
const $memberInfo = document.querySelector("#list ul li:last-child");
const $article = document.querySelector("#article");
const $tabOne = document.querySelector("#tab1");
const $tabTwo = document.querySelector("#tab2");
const $more = document.querySelector(".more");

const $tabOneList = document.querySelector("#tab1 ul");
const $tabTwoList = document.querySelector("#tab2 ul");

let date = new Date();

let fullYear = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let nowDay = `${fullYear}년 ${month + 1}월 ${day}일 ${hours}시${minutes}분${seconds}초 `;

console.log(localStorage.getItem("test"));

$loginInfo.addEventListener("click", () => {
  // 로그인 정보  클릭
  $loginInfo.style.backgroundColor = "#00587A";
  $memberInfo.style.backgroundColor = "white";
  $tabOne.style.display = "block";
  $tabTwo.style.display = "none";
  $loginInfo.style.color = "white";
  $memberInfo.style.color = "black";
});
console.log(document.body.scrollHeight);

$memberInfo.addEventListener("click", () => {
  // 회원 목록 클릭
  $memberInfo.style.backgroundColor = "#00587A";
  $loginInfo.style.backgroundColor = "white";
  $tabOne.style.display = "none";
  $tabTwo.style.display = "block";
  $loginInfo.style.color = "black";
  $memberInfo.style.color = "white";
});

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

console.log(data);

let sameValue = [];

// let time = Array(data.length).fill({ id: "", name: "", date: "" });

function findListTabOne(v, i) {
  // 로그인 정보 함수
  v.text = JSON.parse(JSON.stringify(data[i].message.text));
  v.name =
    JSON.parse(JSON.stringify(data[i].message.from.last_name)) +
    JSON.parse(JSON.stringify(data[i].message.from.first_name));
  v.number = i;
  v.id = JSON.parse(JSON.stringify(data[i].message.from.id));
  v.date = new Date(JSON.parse(JSON.stringify(data[i].message.date)) * 1000).toString();

  // time[i].id = v.id;
  // time[i].name = v.name;
  // time[i].date = v.date.slice(0, 24);
  // console.log(typeof v.date);

  sameValue.push(v.id, v.name);
  sameValue = [...new Set(sameValue)];

  let li = document.createElement("li");
  let spanOne = document.createElement("span");
  let spanTwo = document.createElement("span");
  let spanThrid = document.createElement("span");

  spanOne.append(`번호 : ${v.number} `);
  spanTwo.append(`이름 : ${v.name} `);
  spanThrid.append(`로그인 시간 : ${v.date.slice(0, 24)}`);
  li.append(spanOne, spanTwo, spanThrid);
  $tabOneList.append(li);
}

function findListTabTwo(i) {
  console.log(sameValue);
  console.log(i);
  let li = document.createElement("li");
  let div = document.createElement("div");
  let divLogo = document.createElement("div");
  // let pOne = document.createElement("p");
  let pTwo = document.createElement("p");
  let pThrid = document.createElement("p");
  // pOne.append(`번호 : ${v.number + 1}`);
  pTwo.append(`이름 : ${sameValue[0 + 2 * i]}`);
  pThrid.append(`아이디 : ${sameValue[1 + 2 * i]}`);
  divLogo.style.background = `url(img/profile/${Math.ceil(Math.random() * 5)}.png) no-repeat center center`;
  divLogo.style.backgroundSize = `cover`;
  div.append(divLogo, pTwo, pThrid);
  li.append(div);

  $tabTwoList.append(li);
}

const array = Array(data.length)
  .fill({ text: "", name: "", number: "" })
  .map((v, i, a) => {
    findListTabOne(v, i);
  });

// 회원 목록
for (let i = 0; i < sameValue.length / 2; i++) {
  findListTabTwo(i);
}

$more.addEventListener("click", () => {
  for (let j = 0; j < sameValue.length / 2; j++) {
    findListTabTwo(j);
  }
});

// let arr = [];
// let sameId = [];

// arr.map((v, i) => {
//   v.id = JSON.parse(JSON.stringify(data[i].message.from.id));
//   if (JSON.parse(JSON.stringify(data[i - 1]?.message.from.id) != v.id)) {
//     sameId.push(v);
//     findListTabTwo(v, i);
//     // sameId.map((v, i) => {
//     //   if (JSON.parse(JSON.stringify(data[i - 1]?.message.from.id) != v.id)) {
//     //   }
//     // });
//   }
//   // findListTabTwo(v, i);
// });

// time.split(",");

// let customId = [];
// let customName = [];

// for (let i = 0; i < sameId.length; i++) {
//   customId.push(sameId[i].id);
//   customName.push(sameId[i].name);
// }

// console.log(customId, customName);

// sameId.map((v, i) => {
//   findListTabTwo(v, i);
// });

// data.map((v, i) => {
//   v.id = JSON.parse(JSON.stringify(data[i].message.from.id));
//   if (JSON.parse(JSON.stringify(data[i - 1]?.message.from.id) != v.id) && sameId !== v.id) {
//     sameId.push(v);
//     findListTabTwo(v, i);
//   }

//   if (JSON.parse(JSON.stringify(data[i - 1]?.message.from.id) != v.id) && sameId !== v.id) {
//     for (let j = 0; j < 9; j++) {
//       sameId.push(v);
//       findListTabTwo(v, i);
//     }
//   }

//   $more.addEventListener("click", () => {
//     if (JSON.parse(JSON.stringify(data[i - 1]?.message.from.id) != v.id) && sameId !== v.id) {
//       for (let j = 0; j < 9; j++) {
//         sameId.push(v);
//         findListTabTwo(v, i);
//       }
//     }
//   });
//   findListTabTwo(v, i);
// });
