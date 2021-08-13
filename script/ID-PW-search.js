const $logo = document.querySelector("#logo");

const $idForm = document.querySelector("#id-form");
const $inputIdName = document.querySelector("#input-id-name");
const $inputIdCell = document.querySelector("#input-id-cell");
const $inputIdEmail = document.querySelector("#input-id-email");

const $pwForm = document.querySelector("#pw-form");
const $inputPwId = document.querySelector("#input-pw-id");
const $inputPwName = document.querySelector("#input-pw-name");
const $inputPwCell = document.querySelector("#input-pw-cell");
const $inputPwEmail = document.querySelector("#input-pw-email");

$logo.addEventListener("click", () => {
  location.href = "login-page.html";
});

$idForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let idName = $inputIdName.value;
  let idCell = $inputIdCell.value;
  let idEmail = $inputIdEmail.value;

  if (idName == "") {
    alert("이름을 입력해주세여");
    return;
  }
  if (idCell == "") {
    alert("핸드폰 번호를 입력해주세여");
    return;
  }
  if (idEmail == "") {
    alert("이메일을 입력해주세여");
    return;
  }
});

$pwForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let pwId = $inputPwId.value;
  let pwName = $inputPwName.value;
  let pwCell = $inputPwCell.value;
  let pwEmail = $inputPwEmail.value;

  if (pwId == "") {
    alert("아이디를 입력해주세여");
    return;
  }
  if (pwName == "") {
    alert("이름을 입력해주세여");
    return;
  }
  if (pwCell == "") {
    alert("핸드폰 번호를 입력해주세여");
    return;
  }
  if (pwEmail == "") {
    alert("이메일을 입력해주세여");
    return;
  }
});
