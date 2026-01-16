const inputE1 = document.getElementById("input");
const errorE1 = document.getElementById("error")
const resultE1 = document.getElementById("result")
let errorTime;
let resultTime;

// New Features to come

function updateResults(){
    console.log(inputE1.value)
    if(inputE1.value <=0 || isNaN(inputE1.value) )
    {
        errorE1.innerText = "Please enter a valid number";
        // To clear the time each time a value is entered
        clearTimeout(errorTime);
        // To rest the text after a specific time
        errorTime = setTimeout(() =>{
            errorE1.innerText = "";
            // To clear the value which was entered
            inputE1.value = "";
        }, 2000);
    }else{
        // Adding the result to the result element after applying the logic 
        // + is used to convert the text to number and toFix to show only two decimals
        resultE1.innerText = (+inputE1.value/2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() =>{
        resultE1.innerText = "";
        inputE1.value = "";
        }, 10000);
    }
}

function update1(){
    console.log("Changed");
    console.log(inputE1.value);
}
// enent listener is listening for changes in a specific tag and
// and second part is to perform the action
inputE1.addEventListener("input", updateResults)