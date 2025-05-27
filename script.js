//Criando constante//

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
    if (currencySelectToConvert.value == "real") {
        //conversão de real
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValues)
    } else if (currencySelectToConvert.value == "dolar") {
        //conversão de dólar
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValues)
    } else if (currencySelectToConvert.value == "euro") {
        //conversão de euro
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValues)
    } else if (currencySelectToConvert.value == "libra") {
        // conversão de libra
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValues)
    } else if (currencySelectToConvert.value == "bitcoin") {
        // conversão de bitcoin
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
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
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValues / bitcoinToday) + "BTC"
    }
}
//Função mudança de texto e imagem da moeda de origem 
function changeCurrencyToConvert() {
    const sourceCurrencyName = document.querySelector(".source-currency-name")
    const sourceCurrencyImage = document.querySelector(".source-currency-img")

    if (currencySelectToConvert.value == "real") {
        sourceCurrencyName.innerHTML = "Real Brasileiro"
        sourceCurrencyImage.src = "./assets/img-real.png"
    } else if (currencySelectToConvert.value == "dolar") {
        sourceCurrencyName.innerHTML = "Dólar Americano"
        sourceCurrencyImage.src = "./assets/img-dolar.png"
    } else if (currencySelectToConvert.value == "euro") {
        sourceCurrencyName.innerHTML = "Euro"
        sourceCurrencyImage.src = "./assets/img-euro.png"
    } else if (currencySelectToConvert.value == "libra") {
        sourceCurrencyName.innerHTML = "Libra Esterlina"
        sourceCurrencyImage.src = "./assets/img-libra.png"
    } else if (currencySelectToConvert.value == "bitcoin") {
        sourceCurrencyName.innerHTML = "Bitcoin"
        sourceCurrencyImage.src = "./assets/img-bitcoin.png"
    }
    convertValues()
    //Função de mudança de texto e imagem da moeda de destino
    function changeCurrencyConverted() {
        const destinationCurrencyName = document.querySelector(".destination-currency-name")
        const destinationCurrencyImage = document.querySelector(".destination-currency-img")

        if (currencySelectConverted.value == "dolar") {
            destinationCurrencyName.innerHTML = "Dólar Americano"
            destinationCurrencyImage.src = "./assets/img-dolar.png"
        } else if (currencySelectConverted.value == "euro") {
            destinationCurrencyName.innerHTML = "Euro"
            destinationCurrencyImage.src = "./assets/img-euro.png"
        } else if (currencySelectConverted.value == "libra") {
            destinationCurrencyName.innerHTML = "Libra Esterlina"
            destinationCurrencyImage.src = "./assets/img-libra.png"
        } else if (currencySelectConverted.value == "bitcoin") {
            destinationCurrencyName.innerHTML = "Bitcoin"
            destinationCurrencyImage.src = "./assets/img-bitcoin.png"
        }
        convertValues()
    }
    //Ouvinte de eventos//
    convertButton.addEventListener("click", convertValues)
    currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
    currencySelectConverted.addEventListener("change", changeCurrencyConverted)