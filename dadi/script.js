let num;
let num2;



function casuale() {
    num = Math.round(Math.random() * 5)+1;
    num2 = Math.round(Math.random() * 5)+1;
    document.getElementById("casuale").innerHTML ="Numero casuale computer:" + num;
    document.getElementById("casuale2").innerHTML ="Numero casuale player:" + num2;
    if(num > num2 ){
        document.getElementById("risultato").innerHTML ="computer is the winer ";
    }else if(num2 > num){
        document.getElementById("risultato").innerHTML ="player is the winer ";
    }else{ 
    document.getElementById("risultato").innerHTML ="draw";}
};


