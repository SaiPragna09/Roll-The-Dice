document.getElementById("rollBtn").addEventListener("click", function () {
  var randomnum = Math.floor(Math.random() * 6) + 1;
  var randomimg = "images/dice" + randomnum + ".png";
  document.querySelector(".img1").setAttribute("src", randomimg);

  var randomnum1 = Math.floor(Math.random() * 6) + 1;
  var randomimg1 = "images/dice" + randomnum1 + ".png";
  document.querySelector(".img2").setAttribute("src", randomimg1);

  if (randomnum > randomnum1) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉";
  } else if (randomnum1 > randomnum) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw! 🤝";
  }
});
