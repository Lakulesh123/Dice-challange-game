var randomNumber1 = Math.floor(Math.random() * 6) + 1; //ahiya aapde pehla math.random no use karyo jenathi 1 to 5 ni vache koi pan random number genrate thay pachi aapne 6 sudhi numbr joi ae to aapde +1 karyu jethi 6 sudhi number aasve and tene decimal ma convert karva mate aapde math.Floor nu use karyo.

 var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice 1.png - dice 6.png

 var randomImageSource = "images/" + randomDiceImage ; // images/dice1.png - dice6.png

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomImageSource);


 var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

 var randomImagessource2 = "images/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src",randomImagessource2);

 if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins !";
 }else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins !";
 }
 else {
    document.querySelector("h1").innerHTML = "draw !";
 }



