let exchangeInfo;

// fetch("https://api.ratesapi.io/api/latest").then((response)=>{
//     return response.json()
// }).then(jsonResponse=>{
//     return exchangeInfo = jsonResponse
// })


const createRatesOptions = (rate)=>{
    const $select = document.querySelector('#rates')
    const newOption = document.createElement('option')
    newOption.textContent = rate
    newOption.value = rate
}

