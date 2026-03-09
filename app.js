let consumo = document.getElementById("consumomedio")
let valor1 = 0.50
let valor2 = 0.70
let valor3 = 0.90
let button = document.getElementById("button")
let resultado = document.getElementById("resultado")

function calcularTotal(){

    let consumomedio = Number(consumo.value)
    let total

    if(consumomedio <= 100){
        total = consumomedio * valor1
    }
    else if(consumomedio <= 200){
        total = consumomedio * valor2
    }
    else{
        total = consumomedio * valor3
    }

    resultado.innerHTML = `O valor total da conta é R$ ${total.toFixed(2)}`
}

button.addEventListener("click", calcularTotal)