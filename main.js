let canClick = document.querySelectorAll(".clickable");

// 

for (let eachButton of canClick) {
    eachButton.addEventListener("click", (event) => {
        console.log(event);
        
    })
}