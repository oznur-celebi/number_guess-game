let counter = 0;
let guess_array = [];
let random = Math.floor(Math.random() * 100 + 1);
let submitted_input = document.querySelector("#entered_number");
console.log(submitted_input);
let submitButton = document.querySelector("#submit");
// console.log(submitbutton);
let content = document.querySelector(".content_bottom");
console.log(content.innerHTML);
console.log(random);
// submitted_input.focus();
let message = document.getElementById("message");
let quessed =document.getElementById("quessed");
let attended =document.getElementById("attended");
console.log(message.innerText);
//  content[0].innerText ="You guessed too low, think bigger";
//  console.log(content.innerHTML);



submitButton.addEventListener("click", process)
function process() {
    let input = submitted_input.value;
    if (input === "") {
        alert("Please enter a number!!!");
    } else if (input <= 0 || input > 100) {
        alert("Please enter a number between 1 and 100!!!");
    } else {
        if (counter < 10) {

            guess_array.push(input);
            console.log(guess_array);

            if (input > random) {
                counter += 1;
                message.innerText =`You guessed too low, think bigger`;
                quessed.textContent =`The submitted Numbers: ${guess_array}`;
                attended.textContent= `Number of attend: ${counter}`;
            }
            if (input < random) {
                counter += 1;
                message.textContent =`You guessed too low, think smaller`;
                quessed.textContent =`The submitted Numbers: ${guess_array}`;
                attended.textContent = `Number of attend: ${counter}`;

            }
            if (input == random) {
                counter += 1;
                message.textContent =`You guessed the right number!`;
                quessed.textContent =`The number is: ${random}`;
                attended.textContent = `!!!!CONGRAGULATIONS!!!!!`;
                setGameOver();

            }
            submitted_input.value = "";
        } else if (counter === 10) {
            message.textContent = "!!!GAME OVER!!!";
        //   '  message.innerText.style.color = "red";'
            quessed.textContent = "";
            attended.textContent = "";
            setGameOver();
        }


    }
}
function setGameOver() {
    // let b = document.querySelector("#submit");
    submitButton.displayed = true;
//  '   let submitted_input = document.querySelector("#entered_number");'
    submitted_input.disabled = true;
    resetButton =document.createElement("button");
    resetButton.textContent = "Start a new Game";
    resetButton.setAttribute("id", "reset");
    content.appendChild(resetButton);
    resetButton.addEventListener("click",resetGame);
}
function resetGame(){
    location.reload();
}