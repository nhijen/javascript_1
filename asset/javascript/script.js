// # generate a word at random and store it in a variable

let ranNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(ranNum);
  
var compChoose = Math.floor(Math.random() * ranNum.length).toString();
console.log(compChoose);

// ---------------------------------------------------------------------
// # user guesses a number using buttons

for (let i = 0; i < ranNum.length; i++) {
    //create new buttons for numbers
    let numberButton = document.createElement(`button`)

    //give class for css styling
    numberButton.className = 'numberButton numberButtonText'
    
    //why?
    // numberButton.setAttribute('data-letter', ranNum[i])
    numberButton.textContent = ranNum[i]
    numberButton.onclick = event => {
        console.log(event.target.textContent === compChoose)
    }
    //display in html
    document.querySelector('#variousbuttons').append(numberButton)
}

document.onkeyup = event => {
    console.log(event.key === compChoose)
}

// // ---------------------------------------------------------------------
// // attach button to listener

// let userGuess = document.addEventListener('event') {
// }





// // ---------------------------------------------------------------------
// //if user guess = to computer selection

// if (userGuess === compChoose) {    
//  //add 1 point to right guesses


// //reflect in html
// alert (`The number ` + userGuess + ` is correct!`)

// let el = document.getElementById('rightGuesses');
// el.textContent = "Number of Right Guesses:" + 

//  //if not then add 1 point to wrong guesses   
// } else {
// alert (`The number ` + userGuess + ` is incorrect. Guess Again!`)

// let el = document.getElementById('wrongGuesses');
// el.textContent = "Number of Wrong Guesses:" + 
// }



// // ---------------------------------------------------------------------
// //You loose after loosing guesses and game will start over

// let maxGuess = 5;

// //looping- subtract 1 from every loss


// //if maxGuess equals to 0 
// if (maxGuess === 0); 
// alert (`Game Over.`)










// // ---------------------------------------------------------------------
// // reset
// document.querySelector('#reset').addEventListener('click', e => {
//     document.querySelector('#display').innerHTML = ''
//   })



  
