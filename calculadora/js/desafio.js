var inputHorasProjeto = document.querySelector('#horas-projeto')
var inputvalorHoras = document.querySelector('#valor-hora')
var pResposta = document.querySelector('#resposta')


function calcular(){
    var horasProjeto = inputHorasProjeto.valueAsNumber
    var valorHoras = inputvalorHoras.valueAsNumber
    var resposta = (valorHoras * horasProjeto).toFixed(2)

    pResposta.textContent = "R$ " + resposta
    console.log(resposta)
}

