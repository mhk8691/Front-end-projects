let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let modalContent = document.querySelector("#modalContent");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fullName = fullName.value;
  email = email.value;
  password = password.value;
  if (
    fullName == "" ||
    email == "" ||
    fullName.length < 3 ||
    password.length < 8 ||
    password == ""
  ) {
    // alert("Please fill out the form");
modalContent.innerHTML = "Registration was not successful";

  } else {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ fullName, email, password })
    );
    modalContent.innerHTML="Registration was successful";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000);
  }
});
