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

let divHeader = document.createElement('div');
divHeader.innerHTML = '<h1>Currency Converter</h1>';
document.getElementById('header').appendChild(divHeader);

let convertFromTo = document.createElement('h2')
convertFromTo.innerText = 'Convert from ' + 'EURO ' +  'to ' + 'currency' 
divHeader.appendChild(convertFromTo)

const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=b6f09ee3c8833ec82a4cec0be6a048c9'

const root = document.querySelector('#container')

let currencyFrom = document.createElement('h2')
currencyFrom.innerText = 'EUR ' + '= ' 
root.appendChild(currencyFrom)

fetch(url)
.then((res) => res.json())
.then((data) => {
  console.log(data)
  let currencyTo = document.createElement('h3')
  currencyTo.innerText = data.rates.AED
  root.appendChild(currencyTo)
})

let convertButton = document.createElement('button')
convertButton.innerText = 'Convert!'
root.appendChild(convertButton)