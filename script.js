//Criando constante do botão//

const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

//Função do botão//
function convertValues() {
    const inputCurrencyValues = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const dolarToday = 5.69
    const euroToday = 6.46
    const libraToday = 7.69
    const bitcoinToday = 0.0000016

    //Converter DE
    if (currencySelectToConvert.value == "real"){
        //conversão de real
         currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues)
    }else if (currencySelectToConvert.value == "dolar") {
        //conversão de dólar
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValues)
    }else if (currencySelectToConvert.value == "euro") {
        //conversão de euro
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValues)
    }else if (currencySelectConverted.value == "libra") {
        // conversão de libra
        currencySelectToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValues)
    } else if (currencySelectConverted.value == "bitcoin") {
        // conversão de bitcoin
        currencySelectToConvert.innerHTML = new Intl.NumberFormat("en-US", " BTC", {
            style: "decimal",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValues) + "BTC"
    }




    //Converter PARA
    if (currencySelectConverted.value == "dolar") {
        //conversão para dólar
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValues / dolarToday)
    } else if (currencySelectConverted.value == "euro") {
        // conversão para euro
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValues / euroToday)
    } else if (currencySelectConverted.value == "libra") {
        // conversão para libra
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValues / libraToday)
    } else if (currencySelectConverted.value == "bitcoin") {
        // conversão para bitcoin
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", " BTC", {
            style: "decimal",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValues / bitcoinToday) + "BTC"
    }




}

//Ouvinte de eventos do botão//
convertButton.addEventListener("click", convertValues)