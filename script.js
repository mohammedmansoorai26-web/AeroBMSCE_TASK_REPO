document.getElementById("title").innerHTML = "AEROBMSCE - Official Site";

window.onload = function () {
  alert("Welcome to AeroBMSCE!!!");
  setInterval(function () {
    document.body.bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }, 3000);
};

function submitForm() {
  var n = document.getElementById("name").value;
  var e = document.getElementById("email").value;
  console.log("form data", n, e, document.getElementById("pwd").value);
  alert("Thanks " + n + "! We will contact you at " + e);
  location.reload();
}
