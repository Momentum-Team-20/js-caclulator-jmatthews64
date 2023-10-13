
// grabbing all buttons that can be clicked for use in js
let canClick = document.querySelectorAll(".clickable");

//grabbing display to output results of clicks
const calcDisplay = document.querySelector(".display");

//creating click event that allows all buttons to be clicked
for (let eachButton of canClick) {
    eachButton.addEventListener("click", (event) => {
        //get character from button pushed
        let buttonChar = eachButton.innerText;
        
        //Determine of the charater pressed is a number
        if (isNaN(buttonChar)) {
            console.log(buttonChar);
        } else {
            let newText = document.createElement("div");
            newText.innerText = buttonChar
            
            //Attempting to remove previous text and replace
            if (calcDisplay.innerText != "") {
                console.log("Second if is true");
                newText.remove();
            } 
           
            calcDisplay.appendChild(newText);
            
        }

    })
}