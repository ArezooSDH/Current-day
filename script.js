var today = new Date();
var year = check(today.getFullYear());
var month = check(today.getMonth() + 1);
var day = check(today.getDate());

document.getElementById("show").innerHTML = day + "-" + month + "-" + year;

function check(num) {
  if (num < 10) return "0" + num;
  else return num;
}
