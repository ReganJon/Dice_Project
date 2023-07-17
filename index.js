//player 1
var randomNumber1=Math.floor(Math.random()*6)+1; // Random number generation from 1 to 6

var randomDiceImage="dice"+randomNumber1+".png"; // dice1.png to dice6.png

var randomImageSource="images/"+randomDiceImage; // images/dice1.png to images/dice6.png

var image1=document.querySelectorAll("img")[0]; //selecting the img1 

image1.setAttribute("src",randomImageSource); // setting the attribute based on random number

//player 2
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

//document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2); <-- we can also write like this
image2.setAttribute("src",randomImageSource2);

//if player 1 wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
//if player 2 wins
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
//if both get same number match draws
else{
    document.querySelector("h1").innerHTML="Draw";
}