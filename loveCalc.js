// button listener 
var button = document.querySelector('button');

button.addEventListener('click', function(e){
var yourName = document.querySelector ("#yourName").value;
var crushName = document.querySelector ("#crushName").value;
//----------------------------------------------------
 
const name1 = yourName.charAt(0).toUpperCase() + yourName.slice(1).toLowerCase() ;
const name2 = crushName.charAt(0).toUpperCase() + crushName.slice(1).toLowerCase() ;


 





// document.getElementById("love").onclick = function(){
    var guest = ["mangal", "Mangal", "sonai", "Sonai"];
    var pass = ["mangal", "Mangal", "sonai", "Sonai"];
    
    // var user = document.getElementById("yourName").value;
    // var password = document.getElementById("crushName").value;
    // console.log("hello",user);
    if (guest.includes( yourName) && pass.includes(crushName)) {
        var lovely = Math.random();
        loveScore = Math.floor(95 + (lovely*10))+1;
        console.log(lovely)

}
 
  


else{
 

//---------------------------------------------

var loveScore = Math.random();
loveScore = Math.floor(loveScore * 50) + 1 ;
}


// A place for % result to be printed out 
var resultNumber = document.querySelector("#resultNumber");
// A place for the following explanation to be printed out 
var explanation = document.querySelector("#explanation");
// Hiding form for result 
var hideForResult = document.querySelector('.hideForResult');
// Showing Try Again button
var tryAgain = document.querySelector('#tryAgain');
// Shortcut for result
var yourResultIs = name1 + " & " +name2 + ", Your Compatibility is " + loveScore + "%.";


if (loveScore > 99){
    explanation.style.visibility = "visible";
    resultNumber.style.visibility = "visible";
    resultNumber.innerHTML = loveScore + "%";
    explanation.innerHTML = yourResultIs + "😍GOD GIFED COUPLE🥰. Stay Togather as long as last Breath.. Always be Happy.";
    hideForResult.style.display = "none";
    tryAgain.style.visibility = "visible";
}
else if (loveScore >= 99){
    explanation.style.visibility = "visible";
    resultNumber.style.visibility = "visible";
    resultNumber.innerHTML = loveScore + "%"; 
    explanation.innerHTML = yourResultIs + "Awasome Couple😘, Don't lose Trust on each other😏. Stay  Happy.";
    hideForResult.style.display = "none";
    tryAgain.style.visibility = "visible";
}
else if (loveScore >= 95){
    explanation.style.visibility = "visible";
    resultNumber.style.visibility = "visible";
    resultNumber.innerHTML = loveScore + "%";
    explanation.innerHTML = yourResultIs + "What a Lovely Couple🥰, God Bless You.. Stay Togather Stay Happy.";
    hideForResult.style.display = "none";
    tryAgain.style.visibility = "visible";
}

    else if (loveScore >= 70) {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "High change there 😏";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else if (loveScore >= 40 && loveScore < 70) {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "That's not bad 🤔";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "ugh, as if! 🤧";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
// }
});


//FOR ME -----------------------------------------------------

// document.getElementById("love").onclick = function(){
//     var guest = ["mangal", "Mangal", "sonai", "Sonai"];
//     var pass = ["mangal", "Mangal", "sonai", "Sonai"];
    
//     var user = document.getElementById("yourName").value;
//     var password = document.getElementById("crushName").value;
//     // console.log("hello",user);
//     if (guest.includes( user) && pass.includes(password)) {
//   console.log("hello sir")

//   function unlocked() {
//     var loveScore = Math.random();
// loveScore = Math.floor(loveScore + 90) + 1 ;

//   }

// unlocked();

// }
// }