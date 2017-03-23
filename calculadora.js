var numero1 = 0;
var numero2 = 0;
var operacion;


function asignarNum(numero){
   if(document.getElementById("textNum").value == "0" || numero1 == 0){
       numero1 = numero;
   }else{
       numero1 += numero;
   }
       document.getElementById("textNum").value = numero1;
}

function teclaC(){
    numero1 = 0;
    numero2 = 0;
    document.getElementById("textNum").value = 0;
}

function operar(valor){
    if (numero1 == 0){
        resultado = parseInt(document.getElementById("textNum").value);
    }
    numero2 = parseInt(numero1);
    numero1= 0;
    operacion = valor;
}


function igual(){
   numero1 = parseInt(numero1);
    switch (operacion){
        case 1:
            numero1 += numero2;
        break;
        case 2:
            numero1 = numero2 - numero1;
        break;
        case 3:
            numero1 *= numero2;
        break;
        case 4:
            numero1 = numero2 / numero1;
        break;
        case 5:
            numero1 = Math.pow(numero2, numero1);
        break;
        case 6:
            numero1 = Math.sqrt(numero2, numero1);
        break;
        case 7:
            numero1 = Math.log10(numero2);
        break;
        case 8:
            numero1 = Math.cos(numero2);
        break;
    }
    document.getElementById("textNum").value = numero1;
    numero2 = parseInt(numero1);
}