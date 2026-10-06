const convertButton = document.querySelector(".convertButton")
const toconvertSelect = document.querySelector("#to-convert-select")
const convertSelect = document.querySelector("#convert-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-valor").value
    const valuetoConvert = document.querySelector("#value-to-convert") 
    const valuetoConverted = document.querySelector("#value-to-converted") 
    
    const dolarToday = 5
    const euroToday = 5.6
    const libraToday = 6.6

    if(toconvertSelect.value == "real"){
        valuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"}).format(inputCurrencyValue)

        if(convertSelect.value == "dolar"){
        valuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"}).format(inputCurrencyValue / dolarToday)
         }

        if(convertSelect.value == "euro"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"}).format(inputCurrencyValue / euroToday)
        }

        if(convertSelect.value == "libra"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"}).format(inputCurrencyValue / libraToday)
        }

        if(convertSelect.value == "real"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"}).format(inputCurrencyValue)
        }
    }

    if(toconvertSelect.value == "dolar"){
        
        valuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"}).format(inputCurrencyValue)

        if(convertSelect.value == "dolar"){
        valuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"}).format(inputCurrencyValue)
         }

        if(convertSelect.value == "euro"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"}).format(inputCurrencyValue * dolarToday / euroToday)
        }

        if(convertSelect.value == "libra"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"}).format(inputCurrencyValue * dolarToday / libraToday)
        }

        if(convertSelect.value == "real"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"}).format(inputCurrencyValue * dolarToday)
        }
    }

    if(toconvertSelect.value == "euro"){
        
        valuetoConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"}).format(inputCurrencyValue)

        if(convertSelect.value == "dolar"){
        valuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"}).format(inputCurrencyValue * euroToday / dolarToday)
         }

        if(convertSelect.value == "euro"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"}).format(inputCurrencyValue)
        }

        if(convertSelect.value == "libra"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"}).format(inputCurrencyValue * euroToday / libraToday)
        }

        if(convertSelect.value == "real"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"}).format(inputCurrencyValue * euroToday)
        }
    }

    if(toconvertSelect.value == "libra"){
        
        valuetoConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"}).format(inputCurrencyValue)

        if(convertSelect.value == "dolar"){
        valuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"}).format(inputCurrencyValue * libraToday / dolarToday)
         }

        if(convertSelect.value == "euro"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"}).format(inputCurrencyValue * libraToday / euroToday)
        }

        if(convertSelect.value == "libra"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"}).format(inputCurrencyValue)
        }

        if(convertSelect.value == "real"){
            valuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"}).format(inputCurrencyValue * libraToday)
        }
    }
}

function changeCurrencytoConvert(){
    const currencyName1 = document.getElementById("currency-name-1")
    const currencyImg1 = document.querySelector(".currencyImg-1")

    if(toconvertSelect.value == "dolar"){
        currencyName1.innerHTML = "Dólar Americano"
        currencyImg1.src = "img/estados-unidos (1) 1.png"
    }
    if(toconvertSelect.value == "euro"){
        currencyName1.innerHTML = "Euro"
        currencyImg1.src = "img/euro.png"
    }
    if(toconvertSelect.value == "libra"){
        currencyName1.innerHTML = "Libra"
        currencyImg1.src = "img/libra 1.png"
    }
    if(toconvertSelect.value == "real"){
        currencyName1.innerHTML = "Real"
        currencyImg1.src = "img/brasil 2.png"
    }

    convertValues()

}

function changeCurrencyConverted() {
    const currencyName2 = document.getElementById("currency-name-2")
    const currencyImg2 = document.querySelector(".currencyImg-2")

    if(convertSelect.value == "dolar"){
        currencyName2.innerHTML = "Dólar Americano"
        currencyImg2.src = "img/estados-unidos (1) 1.png"
    }
    if(convertSelect.value == "euro"){
        currencyName2.innerHTML = "Euro"
        currencyImg2.src = "img/euro.png"
    }
    if(convertSelect.value == "libra"){
        currencyName2.innerHTML = "Libra"
        currencyImg2.src = "img/libra 1.png"
    }
    if(convertSelect.value == "real"){
        currencyName2.innerHTML = "Real"
        currencyImg2.src = "img/brasil 2.png"
    }

    convertValues()
}

toconvertSelect.addEventListener("change", changeCurrencytoConvert)
convertSelect.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", convertValues)