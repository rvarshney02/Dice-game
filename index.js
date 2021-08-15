var randomno1 = Math.floor(Math.random() * 6) + 1; //1-6

var random1src = "images/" + "dice" + randomno1 + ".png";

var image1=document.querySelectorAll(".dice6")[0];

image1.setAttribute("src",random1src);

var randomno2 = Math.floor(Math.random() * 6) + 1; //1-6

var random2src = "images/" + "dice" + randomno2 + ".png";

var image2 = document.querySelectorAll(".dice6")[1];

image2.setAttribute("src",random2src);

if(randomno1 > randomno2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins!🎉";
}
else if(randomno1 < randomno2)
{
  document.querySelector("h1").innerHTML = "🎉Player 2 wins!";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
