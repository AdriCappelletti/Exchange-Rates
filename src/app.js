let exchangeInfo;
const $checkBtn = document.querySelector("#check-btn");


fetch(

  "https://v6.exchangerate-api.com/v6/e38513aaab8ad9013a8733cc/latest/USD"

)

  .then((response) => {
    return response.json();
  })
  .then((jsonResponse) => {

    const rates = Object.keys(jsonResponse.conversion_rates);
    createRatesOptions(rates);
    console.log(jsonResponse)

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

const getSelectedRate = () => {
  const $rates = document.querySelector("#rates");
  const rateIndex = $rates.selectedIndex;
  const selectedRate = $rates[rateIndex].value;
  return selectedRate;
};

const getRateValue = (data, selectedRate) => {
  const rates = data.conversion_rates;
  selectedRate.toString();
  const rateValue = rates[selectedRate].toFixed(2);
  return rateValue;
};
const getSelectedBase = () => {
  const $bases = document.querySelector("#bases-container");
  const baseIndex = $bases.selectedIndex;
  const selectedBase = $bases[baseIndex].value;
  return selectedBase;
};

$checkBtn.onclick = (e) => {
  const selectedBase = getSelectedBase();
  const selectedRate = getSelectedRate();
  const rateValue = getRateValue(exchangeInfo, selectedRate);
  displayExchangeInfo(selectedBase, selectedRate, rateValue);
  e.preventDefault();
};

const displayExchangeInfo = (selectedBase, selectedRate, rateValue) => {
  const $exchangesContainer = document.querySelector("#exchanges-results");
  const $base = document.querySelector("#base");
  const $rate = document.querySelector("#rate");
  const $rateValue = document.querySelector("#rate-value");
  $base.textContent = selectedBase;
  $rate.textContent = selectedRate;
  $rateValue.textContent = rateValue;
  $exchangesContainer.classList.remove("hide");
};


// http://api.exchangeratesapi.io/v1/latest?access_key=f626c631b79a9a71a8b82a6e97fe99f4

