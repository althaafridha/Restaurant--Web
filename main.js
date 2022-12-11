$(".image").tilt({
  glare: true,
  maxGlare: 0.5,
});

function klikPassword() {
  var klik = document.getElementById("password");
  if (klik.type === "password") {
    klik.type = "text";
  } else {
    klik.type = "password";
  }
}

$("#submitregistration").click(function () {
  let timerInterval;
  Swal.fire({
    icon: "success",
    title: "Berhasil Registrasi",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      $('#nav-tab button[data-bs-target="#nav-login"]').tab("show");
      window.sessionStorage.setItem(
        "username",
        document.getElementById("usernameRegis").value
      );
      window.sessionStorage.setItem(
        "password",
        document.getElementById("passwordRegis").value
      );
    }
  });
});

function submitLogin() {
  // format jquery
  var usernameLogin = $("#username").val();

  // format javascript
  var passwordLogin = document.getElementById("password").value;

  var getUsername = window.sessionStorage.getItem("username");
  var getPassword = window.sessionStorage.getItem("password");

  if (getUsername != usernameLogin || getPassword != passwordLogin) {
    var sound = document.createElement("audio");
    sound.setAttribute("src", "salaheh.mp3");
    sound.addEventListener("ended", function () {
        document.removeChild(this);
      },false);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Username atau Password Salah",
    })
    sound.play();
  } else {
    Swal.fire({
        icon: "success",
        title: "Berhasil Login",
        text: "Welcome " + getUsername + "!"
    }).then((result) => {
        window.location = "dashboard.html"
    })
  }
}
