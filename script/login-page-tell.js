let date = new Date();
// let names = $inputID.value;

// console.log(names + "_____");
// let settings = {
//   async: true,
//   crossDomain: true,
//   url: "https://api.telegram.org/bot1918408282:AAFFtZL0IopsHoflal00SmVRZ2yVFz-D09E/sendMessage",
//   method: "post",
//   headers: {
//     "content-type": "application/json",
//     "cache-control": "no-cache",
//   },
//   data: JSON.stringify({
//     chat_id: 722162061,
//     text: date + names,
//   }),
// };

// $.ajax(settings).done(function (res) {
//   console.log(res);
// });

// $.ajax(settings).done(function (res) {
//   console.log(res);
// });

const a = {
  ok: true,
  result: {
    message_id: 131,
    from: {
      id: 1918408282,
      is_bot: true,
      first_name: "MiniProject",
      username: "MiniProjectLogin_bot",
    },
    chat: { id: 722162061, first_name: "\uc131\uc9c4", last_name: "\ud5c8", type: "private" },
    date: 1628306860,
    text: "Sat Aug 07 2021 12:27:36 GMT+0900 (\ud55c\uad6d \ud45c\uc900\uc2dc)test",
  },
};

// let obj = JSON.parse(a);

let {
  result: {
    chat: { id, first_name, last_name },
  },
} = a;

console.log(id, first_name, last_name);
