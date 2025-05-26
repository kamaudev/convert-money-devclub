//Criando constante do botão//

const convertButton = document.querySelector(".convert-button")

//Função do botão//
function convertValues(){
    const inputCurrencyValues = document.querySelector("#input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
     const dolarToday = 5.69
     const convertedValue = inputCurrencyValues / dolarToday

     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
     }).format(inputCurrencyValues)

     currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
     }).format(convertedValue)


}

//Ouvinte de eventos do botão//
convertButton.addEventListener("click", convertValues)