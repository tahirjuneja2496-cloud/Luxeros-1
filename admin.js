function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@luxeros.com" && password === "123456") {
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong login details");
  }
}
