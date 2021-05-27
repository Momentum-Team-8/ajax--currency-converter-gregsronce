const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=b6f09ee3c8833ec82a4cec0be6a048c9'

const root = document.querySelector('#container')

let divHeader = document.createElement('div');
divHeader.innerHTML = '<h1>Currency Converter</h1>';
document.getElementById('header').appendChild(divHeader);

let currencySelect = document.createElement('select')
for (let currency of currencies) {
  const optionItem = document.createElement('option')
  optionItem.value = currency
  optionItem.innerText = currency
  currencySelect.appendChild(optionItem)
  root.appendChild(currencySelect)
}

fetch(url)
.then((res) => res.json())
.then((data) => {
  console.log(data)
  let currencyTo = document.createElement('h3')
  currencyTo.innerText = '1' + ' ' + data.base + '= '
  root.appendChild(currencyTo)
  let currencySelect = document.createElement('select')
for (let currency of currencies) {
  const optionItem = document.createElement('option')
  optionItem.value = currency
  optionItem.innerText = currency
  currencySelect.appendChild(optionItem)
  root.appendChild(currencySelect)
}
})

// let convertButton = document.createElement('button')
// convertButton.innerText = 'Convert!'
// root.appendChild(convertButton)
