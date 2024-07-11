let chave = "eb41adddf594704c073c04f58c8ad3df"

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())
    
    colocarNaTela(dados)
}

function cliqueiNoBotao(){
    let cidade  = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}