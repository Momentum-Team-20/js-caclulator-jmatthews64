
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
        } 

        //Handle when "=" is clicked to evaluate the equation or throw an error
        // if(buttonChar === "=" && num2 != undefined) {
        //     total = eval(num1, operation, num2);
        //     calcDisplay.innerText = total;
        // } else if (buttonChar === "=" && num2 === undefined) {
        //     alert("Error: not enough numbers to perform calculation!")
        // }
        
        if (isNaN(buttonChar)) {
        
        //Determine of the charater pressed is a number
        
            console.log(buttonChar);
            num1 = calcDisplay.innerText;
            operation = buttonChar;
            calcDisplay.innerText = buttonChar;
            console.log(num1);
            console.log(operation);
            
        } else {
            calcDisplay.innerText += buttonChar;
        }
        //check if there is a first number and an operation, the allow num2
        if(num1 != undefined && operation != undefined) {
            console.log("Num1 and operation have been assigned");

        }
    
    })}
