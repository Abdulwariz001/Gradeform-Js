let score = document.getElementById("enter");

function grade(){

    if(score.value >= 70 && score.value <=100){
        document.getElementById("output").innerHTML = "A"
        document.getElementById("output").style.color = "green";
    }

    else if(score.value >=60 && score.value <=69){
        document.getElementById("output").innerHTML = "B"
        document.getElementById("output").style.color = "green";
    }

    else if(score.value >=50 && score.value <=59){
        document.getElementById("output").innerHTML = "C"
        document.getElementById("output").style.color = "green";
    }

    else if(score.value >=45 && score.value <=49){
        document.getElementById("output").innerHTML = "D"
        document.getElementById("output").style.color = "blue";
    }

    else if(score.value >=40 && score.value <=45){
        document.getElementById("output").innerHTML = "E"
        document.getElementById("output").style.color = "blue";
    }

    else if(score.value >=0 && score.value <=40){
        document.getElementById("output").innerHTML = "F"
        document.getElementById("output").style.color = "red";
    }
    
    else{
        document.getElementById("output").innerHTML = "If the number greater than 100, invalid number."
        document.getElementById("output").style.color = "red";
    }
}

