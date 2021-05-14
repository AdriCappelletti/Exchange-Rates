let exchangeInfo;

fetch("https://api.ratesapi.io/api/latest")
  .then((response) => {
    return response.json();
  })
  .then((jsonResponse) => {
    const rates = Object.keys(jsonResponse.rates);
    createRatesOptions(rates)
    return (exchangeInfo = jsonResponse);
  });

const createRatesOptions = (rates) => {
  rates.forEach((rate) => {
    const $select = document.querySelector("#rates");
    const newOption = document.createElement("option");
    newOption.textContent = rate;
    newOption.value = rate;
    $select.appendChild(newOption)
  });
};

const handleApiData = (data) => {};
