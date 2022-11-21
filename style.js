let score = document.getElementById("enter");

function grade(){
    if(score.value >= 70 && score.value <=100){
        document.getElementById("output").innerHTML = "A"
    }
    else if(score.value >=60 && score.value <=69){
        document.getElementById("output").innerHTML = "B"
    }
    else if(score.value >=50 && score.value <=59){
        document.getElementById("output").innerHTML = "C"
    }
    else if(score.value >=45 && score.value <=49){
        document.getElementById("output").innerHTML = "D"
    }
    else if(score.value >=40 && score.value <=45){
        document.getElementById("output").innerHTML = "E"
    }
    else if(score.value >=0 && score.value <=40){
        document.getElementById("output").innerHTML = "F"
    }

    else{
        document.getElementById("output").innerHTML = "invalid number"
    }
}

