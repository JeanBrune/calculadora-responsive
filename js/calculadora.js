//determinar valor inicial
let valorInicial = "0"
//armazenar condição de verificação para novos numeros inseridos após uma oeração ser concluida
let novoNumero = true
//capturar display
let display = document.querySelector(".display")
//detemrinar valor incial do desiplay como zero
display.value = valorInicial
//armazenar o valor do visor, anterior a uma operação ser apertada
let valorAnterior = 0
//criar uma variavel de controle para as operações
let operador = null
//criar uma variavel de cotnrole para o resultado
let resultado = 0

//capturar o click nos botões, porque não foi adicionado um a um no HTML
//armazenar o click em uma variavel e atribuir uma funçaõ ao click
let capturarClick = document.addEventListener("click", function (eventoClick) {
    //identificar e armazenar aonde, exatamente, o click foi realizado
    let clicado = eventoClick.target
    //caso o click tenha sido feito em um botão de número
    if (clicado.classList.contains("btn-num")) {
        console.log(clicado.innerText)
        //rodar função de inserir o numero no visor
        inserir(clicado)
    } else if (clicado.classList.contains("btn-op")) {
        //caputrar o valor do display quando a operação foi escolhida
        num_a = parseFloat(display.value)
        //executar a operação
        opera(clicado.innerText)
    }
})

//criar função de inserir os valores na tela
function inserir(numero) {
    if (novoNumero) {//verificar se é numero novo
        display.value = "" + numero.innerText
        novoNumero = false
    } else if (display.value === "0") {
        display.value = numero.innerText

    }
    else {
        display.value += numero.innerText
    }
    display.focus()
}

//criar função de inserir virgula (onclick direto pelo HTML)
const decimal = () => {
    if (novoNumero) {
        display.value = "0."
        novoNumero = false
    } else if (display.value.indexOf(".") == -1) {//verificar se já existe alguma virgula
        display.value += "."
    }
    display.focus()
}


//criar função de limpar (onclick direto pelo HTML)
function limpar() {
    novoNumero = true
    display.value = valorInicial
    console.log("visor apagado")
    operador = null
    valorAnterior = 0
    display.focus()
}

//criar função de apagar o ultimo digito
function backspace() {
    if (display.value != "0") {
        //cortar a string do display e remover o ultimo digito
        display.value = display.value.slice(0, -1);
        //retornar o foco pro display
        display.focus()
        if (display.value == "") {
            display.value = valorInicial
        }
    }
    display.focus()
}


function opera(op) {
    calcular()
    valorAnterior = parseFloat(display.value)
    operador = op
    novoNumero = true
    display.focus()
}

function calcular() {
    if (operador != null) {
        if (operador == "/") {
            resultado = valorAnterior / parseFloat(display.value)
        } else if (operador == "*") {
            resultado = valorAnterior * parseFloat(display.value)
        } else if (operador == "-") {
            resultado = valorAnterior - parseFloat(display.value)
        } else if (operador == "+") {
            resultado = valorAnterior + parseFloat(display.value)
        }else if (operador =="%"){
            resultado = valorAnterior * (parseFloat(display.value)/100)
        }

        display.value = resultado.toString()
    }
    novoNumero = true
    operador = null
    valorAnterior = 0
    display.focus()
}
