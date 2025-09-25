// Seletores do DOM
const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelectConverted = document.querySelector(".currency-select-converted")

// Mapeamento de códigos de moeda
const currencyCodes = {
    'real': 'BRL',
    'dolar': 'USD',
    'euro': 'EUR',
    'libra': 'GBP',
    'bitcoin': 'BTC'
}

// Mapeamento de nomes e imagens das moedas
const currencyInfo = {
    'real': { name: "Real Brasileiro", image: "./assets/img-real.png" },
    'dolar': { name: "Dólar Americano", image: "./assets/img-dolar.png" },
    'euro': { name: "Euro", image: "./assets/img-euro.png" },
    'libra': { name: "Libra Esterlina", image: "./assets/img-libra.png" },
    'bitcoin': { name: "Bitcoin", image: "./assets/img-bitcoin.png" }
}

// Objeto para armazenar as taxas de câmbio
let exchangeRates = {
    USD: 1,
    BRL: null,
    EUR: null,
    GBP: null,
    BTC: null
}

// Função para buscar o preço do Bitcoin
async function fetchBitcoinPrice() {
    try {
        console.log('Buscando preço do Bitcoin...')
        const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
        const data = await response.json()
        const price = parseFloat(data.price)
        console.log('Preço do Bitcoin:', price)
        return price
    } catch (error) {
        console.error('Erro ao buscar preço do Bitcoin:', error)
        return null
    }
}

// Função para buscar taxas de câmbio da API
async function fetchExchangeRates() {
    try {
        console.log('Buscando taxas de câmbio...')
        // Buscar taxas de câmbio e preço do Bitcoin em paralelo
        const [exchangeResponse, bitcoinPrice] = await Promise.all([
            fetch('https://api.exchangerate-api.com/v4/latest/USD'),
            fetchBitcoinPrice()
        ])

        const exchangeData = await exchangeResponse.json()
        console.log('Taxas recebidas:', exchangeData.rates)
        
        if (!bitcoinPrice) {
            throw new Error('Não foi possível obter o preço do Bitcoin')
        }

        // Atualizar taxas de câmbio
        exchangeRates = {
            USD: 1,
            BRL: exchangeData.rates.BRL,
            EUR: exchangeData.rates.EUR,
            GBP: exchangeData.rates.GBP,
            BTC: 1/bitcoinPrice // Converte para a taxa BTC/USD
        }

        console.log('Taxas atualizadas:', exchangeRates)
        return true
    } catch (error) {
        console.error('Erro ao buscar taxas de câmbio:', error)
        return false
    }
}

// Função para formatar valores monetários
function formatCurrencyValue(value, currencyCode) {
    if (currencyCode === 'BTC') {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(value) + ' BTC'
    }

    const formatOptions = {
        BRL: { locale: 'pt-BR', currency: 'BRL' },
        USD: { locale: 'en-US', currency: 'USD' },
        EUR: { locale: 'de-DE', currency: 'EUR' },
        GBP: { locale: 'en-GB', currency: 'GBP' }
    }

    const options = formatOptions[currencyCode]
    return new Intl.NumberFormat(options.locale, {
        style: 'currency',
        currency: options.currency
    }).format(value)
}

// Função principal de conversão
async function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency").value
    if (!inputCurrencyValue || isNaN(inputCurrencyValue)) {
        alert('Por favor, insira um valor válido para converter')
        return
    }

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
    // Desabilitar o botão e mostrar loading
    convertButton.disabled = true
    convertButton.textContent = "Convertendo..."
    
    try {
        // Atualizar taxas de câmbio
        const success = await fetchExchangeRates()
        if (!success) {
            throw new Error('Falha ao obter taxas de câmbio')
        }

        // Obter os códigos das moedas selecionadas
        const fromCurrency = currencyCodes[currencySelectToConvert.value]
        const toCurrency = currencyCodes[currencySelectConverted.value]
        
        console.log('Convertendo', inputCurrencyValue, 'de', fromCurrency, 'para', toCurrency)
        
        if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
            throw new Error('Moeda não suportada')
        }

        // Converter para USD primeiro
        const valueInUSD = inputCurrencyValue / exchangeRates[fromCurrency]
        console.log('Valor em USD:', valueInUSD)

        // Converter de USD para a moeda de destino
        const finalValue = valueInUSD * exchangeRates[toCurrency]
        console.log('Valor final:', finalValue)

        // Exibir os valores formatados
        currencyValueToConvert.innerHTML = formatCurrencyValue(inputCurrencyValue, fromCurrency)
        currencyValueConverted.innerHTML = formatCurrencyValue(finalValue, toCurrency)

    } catch (error) {
        console.error('Erro na conversão:', error)
        alert(error.message || 'Ocorreu um erro ao converter os valores. Por favor, tente novamente.')
    } finally {
        // Restaurar o botão
        convertButton.disabled = false
        convertButton.textContent = "Converter"
    }
}

// Função para atualizar nome e imagem da moeda
function updateCurrencyDisplay(currency, nameElement, imageElement) {
    const info = currencyInfo[currency]
    if (info) {
        nameElement.innerHTML = info.name
        imageElement.src = info.image
    }
}

// Função para atualizar moeda de origem
function changeCurrencyToConvert() {
    const sourceCurrencyName = document.querySelector(".source-currency-name")
    const sourceCurrencyImage = document.querySelector(".source-currency-img")
    updateCurrencyDisplay(currencySelectToConvert.value, sourceCurrencyName, sourceCurrencyImage)
    convertValues()
}

// Função para atualizar moeda de destino
function changeCurrencyConverted() {
    const destinationCurrencyName = document.querySelector(".destination-currency-name")
    const destinationCurrencyImage = document.querySelector(".destination-currency-img")
    updateCurrencyDisplay(currencySelectConverted.value, destinationCurrencyName, destinationCurrencyImage)
    convertValues()
}

// Buscar taxas iniciais quando a página carregar
window.addEventListener('load', async () => {
    try {
        const success = await fetchExchangeRates()
        if (!success) {
            console.error('Falha ao carregar taxas iniciais')
        }
    } catch (error) {
        console.error('Erro ao carregar taxas iniciais:', error)
    }
})

// Adicionar event listeners
convertButton.addEventListener("click", convertValues)
currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
currencySelectConverted.addEventListener("change", changeCurrencyConverted)