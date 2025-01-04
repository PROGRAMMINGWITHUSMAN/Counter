var counter = 0
        
            
function increment(){
    counter++
    document.getElementById("counter-display").innerText = counter;
}

function decrement(){
    if (counter == 0) {
        alert("Counter is already Zero")
    }
    else {
        counter--
        document.getElementById("counter-display").innerText = counter; 
    }
}

function reset() {
    counter = 0
    document.getElementById("counter-display").innerHTML = counter 
}

function Add(){
    var value = document.getElementById("input").value
    var update = +value

    if (!isNaN(update) && update != "") {
        counter += update
        document.getElementById("counter-display").innerHTML = counter 
    }
    else {
        alert("Please enter a valid number!");
    }
    document.getElementById("input").value = "";
}

function Subtract(){
    var value = document.getElementById("input").value
    var update = +value

    if (!isNaN(update) && update != "") {
        if (counter == 0) {
            alert("Counter is already Zero")
        }
        else {
            counter -= update
            document.getElementById("counter-display").innerHTML = counter 
        }
    }
    else {
        alert("Please enter a valid number!");
    }
    document.getElementById("input").value = ""
}


