const $userImg = document.querySelector("#user-img");
const $userIcon = document.querySelector(".user-icon");
const $userBox = document.querySelector("#user-box");
const $logeOut = document.querySelector(".loge-out");
const $logo = document.querySelector("#logo");

const $memberManagement = document.querySelector("#member-management");

$userImg.addEventListener("click", (event) => {
  if ($userBox.style.display == "flex") {
    $userBox.style.display = "none";
  } else {
    $userBox.style.display = "flex";
  }
});

$logo.addEventListener("click", () => {
  location.href = "main.html";
});

$logeOut.addEventListener("click", (event) => {
  location.href = "login-page.html";
});

$memberManagement.addEventListener("click", (e) => {
  location.href = "main-3.html";
});

$userIcon.addEventListener("click", () => {
  location.href = "myprofile.html";
});
