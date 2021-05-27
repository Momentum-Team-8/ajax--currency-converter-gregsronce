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

let currencyFrom = document.createElement('select')
currencyFrom.classList.add('country-from')
for (let currency of currencies) {
  const optionItem = document.createElement('option')
  optionItem.value = currency
  optionItem.innerText = currency
  currencyFrom.appendChild(optionItem)
  root.appendChild(currencyFrom)
}

let currencyTo = document.createElement('select')
currencyTo.classList.add('country-to')
for (let currency of currencies) {
  const optionItem = document.createElement('option')
  optionItem.value = currency
  optionItem.innerText = currency
  currencyTo.appendChild(optionItem)
  root.appendChild(currencyTo)
}

let divFooter = document.createElement('div')
document.getElementById('footer').appendChild(divFooter);

let input = document.createElement('input')
input.classList.add('number-input')
divFooter.appendChild(input)

let convertButton = document.createElement('button')
convertButton.classList.add('convert-button')
convertButton.innerText = 'Convert!'
divFooter.appendChild(convertButton)

convertButton.addEventListener('click', function (event) {
  fetch(url)
.then((res) => res.json())
.then((data) => {
  console.log(data)  
  let output = document.createElement('h3')
output.classList.add('output')
divFooter.appendChild(output)
// output.innerText = eval(data.rates[currencyTo.value] / data.rates[currencyFrom.value] * input.value) + ' ' + currencyTo.value
console.log(output.innerText)})})

// Thanks to Wendy for figuring out the final eval!! Don't quite understand how it works, so going to comment it out. 