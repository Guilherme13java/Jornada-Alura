let titulo = document.querySelector("h1")
let texto = document.body.querySelector("p")
let opcao1 = document.querySelector("#opcao1")
let opcao2 = document.querySelector("#opcao2")

function mudarPasso(passo, textot, opcao1t, opcao2t){
    titulo.innerHTML = passo
    texto.innerHTML = textot
    if (opcao1t != undefined){
        opcao1.style.visibity = "visible"
        opcao1.innerHTML = opcao1t
    }else{
        opcao1.innerHTML = "AAAA"
        opcao1.style.visibility = "hidden"
    }
    if (opcao2t != undefined){
        opcao2.style.visibility = "visible"
        opcao2.innerHTML = opcao2t
    }else{
        opcao2.innerHTML = "AAA"
        opcao2.style.visibility = "hidden"
    }
}
mudarPasso("Passo 0", 
"Você encontrou uma Carta sobre uma Cidade Antiga", 
"Ignorar e voltar para a Casa", 
"Ir para a Cidade")

opcao1.addEventListener("click", () => {
    if (titulo.innerHTML == "Passo 0"){
        mudarPasso("Passo 2", 
"Você ignorou a Carta e voltou para a Casa")
    }
    if (titulo.innerHTML == "Passo 1"){
        mudarPasso("Passo 3", 
"Você encontrou a Cidade Perdida, Parabéns!")
    }
})

opcao2.addEventListener("click", () => {
    if (titulo.innerHTML == "Passo 0"){
        mudarPasso("Passo 1", 
"Você começou a jornada subindo a Montanha", 
"Prosseguir")
    }
})