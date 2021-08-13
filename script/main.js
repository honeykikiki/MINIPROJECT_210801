const $userImg = document.querySelector("#user-img");
const $userBox = document.querySelector("#user-box");
const $logeOut = document.querySelector(".loge-out");

const $memberManagement = document.querySelector("#member-management");

$userImg.addEventListener("click", (event) => {
  if ($userBox.style.display == "flex") {
    $userBox.style.display = "none";
  } else {
    $userBox.style.display = "flex";
  }
});

$logeOut.addEventListener("click", (event) => {
  location.href = "login-page.html";
});

$memberManagement.addEventListener("click", (e) => {
  location.href = "main-3.html";
});
