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

fetch(url)
.then((res) => res.json())
.then((data) => {
  console.log(data)
  // let currencyTo = document.createElement('h4')
  // currencyTo.innerText = '1' + ' ' + data.base + '= '
  // divFooter.appendChild(currencyTo)
})   


let divFooter = document.createElement('div')
document.getElementById('footer').appendChild(divFooter);

let input = document.createElement('input')
input.classList.add('number-button')
divFooter.appendChild(input)

let convertButton = document.createElement('button')
convertButton.classList.add('convert-button')
convertButton.innerText = 'Convert!'
divFooter.appendChild(convertButton)

let output = document.createElement('h3')
output.classList.add('output')
divFooter.appendChild(output)

document.querySelector('.convert-button').addEventListener('click', function (event) {
  console.log(event.target)})

// addEventListener('click', function (event) {
//   console.log(event.target.innerText)
//   output.innerText += event.target.innerText})

// convertButton.addEventListener('click', function (event) {
//   const display = eval(output.innerText)
//   output.innerText = display
//   console.log(eval(output.innerText))})
  
// if or statement?
