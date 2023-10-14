
// grabbing all buttons that can be clicked for use in js
const canClick = document.querySelectorAll(".clickable");

//grabbing display to output results of clicks
let calcDisplay = document.querySelector(".display");
 //Set variables to save numbers and operators input
let num1;
let num2;
let operation;
let total;

//creating click event that allows all buttons to be clicked
for (let eachButton of canClick) {
    eachButton.addEventListener("click", (event) => {
        //get character from button pushed
        let buttonChar = eachButton.innerText;

        //refreshes page and clears display
        if (buttonChar === "C") {
            location.reload()
        } else if (buttonChar === "=") {
           // evaluates string as mathematical expression"
            console.log("Equals")
            total = calcDisplay.innerText;
            calcDisplay.innerText = eval(total);
        } else {
            calcDisplay.innerText += buttonChar;
        }
        
        
    })}
