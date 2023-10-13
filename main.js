
// grabbing all buttons that can be clicked for use in js
const canClick = document.querySelectorAll(".clickable");

//grabbing display to output results of clicks
let calcDisplay = document.querySelector(".display");

//creating click event that allows all buttons to be clicked
for (let eachButton of canClick) {
    eachButton.addEventListener("click", (event) => {
        //get character from button pushed
        let buttonChar = eachButton.innerText;

        //refreshes page and clears display
        if (buttonChar === "C") {
            location.reload()
        } else if (isNaN(buttonChar)) {
        
        //Determine of the charater pressed is a number
        
            console.log(buttonChar);
            let num1 = calcDisplay.innerText;
            let operation = buttonChar;
            calcDisplay.innerText = buttonChar
            console.log(num1);
            console.log(operation);
        } else {
            calcDisplay.innerText += buttonChar;
        }

    })
}