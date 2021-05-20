let exchangeInfo;
const $checkBtn = document.querySelector("#check-btn");

fetch(
  "http://api.exchangeratesapi.io/v1/latest?access_key=f626c631b79a9a71a8b82a6e97fe99f4"
)
  .then((response) => {
    return response.json();
  })
  .then((jsonResponse) => {
    console.log(jsonResponse);
    const rates = Object.keys(jsonResponse.rates);
    createRatesOptions(rates);
    return (exchangeInfo = jsonResponse);
  })
  .catch((error) => {
    console.error(error);
  });

const createRatesOptions = (rates) => {
  rates.forEach((rate) => {
    const $select = document.querySelector("#rates");
    const newOption = document.createElement("option");
    newOption.textContent = rate;
    newOption.value = rate;
    $select.appendChild(newOption);
  });
};

const handleApiRates = (data, selectedRate) => {
  const rates = data.rates;
  selectedRate.toString()
  const rate = rates[selectedRate]
  console.log(rate)
};

const getSelectedRate = () => {
  const $rates = document.querySelector("#rates");
  const rateIndex = $rates.selectedIndex;
  const selectedRate = $rates[rateIndex].value;
  return selectedRate;
};

$checkBtn.onclick = (e) => {
  const selectedRate = getSelectedRate();
  handleApiRates(exchangeInfo, selectedRate)
  e.preventDefault();

};
