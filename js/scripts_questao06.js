//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objFormDados = new FormData(formDados)

    let nome = objFormDados.get('nome')
    let peso = parseFloat(objFormDados.get('peso'))
    let altura = parseFloat(objFormDados.get('altura'))

    let imc = peso / (altura * altura)
    let faixa = ""

    if (imc < 20) {
        faixa = "Abaixo do peso"
    } else if (imc <= 25) {
        faixa = "Normal"
    } else if (imc <= 30) {
        faixa = "Excesso de peso"
    } else if (imc <= 35) {
        faixa = "Obesidade"
    } else {
        faixa = "Obesidade mórbida"
    }

    divResultado.innerHTML = `
        Nome: ${nome} <br>
        IMC: ${imc.toFixed(2)} <br>
        Faixa de risco: ${faixa}
    `

    formDados.reset()
})