const display = document.getElementById("display");

function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

async function calculate(){

    const expression = display.value;

    try{

        const response = await fetch("/calculate",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                expression:expression
            })

        });

        const data = await response.json();

        display.value = data.result;

    }

    catch(error){

        display.value="Error";

    }

}