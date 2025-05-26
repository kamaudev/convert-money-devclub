//Criando constante do botão//

const convertButton = document.querySelector(".convert-button")

//Função do botão//
function convertValues(){
    const inputCurrencyValues = document.querySelector("#input-currency").value 
     const dolarToday = 5.69
     const convertedValue = inputCurrencyValues / dolarToday
}

//Ouvinte de eventos do botão//
convertButton.addEventListener("click", convertValues)