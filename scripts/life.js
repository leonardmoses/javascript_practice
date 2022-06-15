let maxYear = null
let age = null
let years = null
let months = null
let weeks = null
let days = null
let hours = null
let minutes = null
let seconds = null

const btnLifeExpectancy = document.getElementById('lifeExpectancy')
btnLifeExpectancy.addEventListener('click' , maxYearQuestion)

const btnCurrentAge = document.getElementById('currentAge')
btnCurrentAge.addEventListener('click' , currentAgeQuestion)

function maxYearQuestion() {
  maxYear = prompt("In years, what age would you like to live till?")
  document.getElementById('sentence').innerHTML = `If you lived till ${maxYear} years old.`

  calculations()
  display()
  console.log(maxYear)
}

function calculations() {
  years = (maxYear-age)
  months = (maxYear*12)-(age*12)
  weeks = (maxYear*52)-(age*52)
  days = (maxYear*365)-(age*365)
  hours = (maxYear*365*24)-(age*365*24)
  minutes = (maxYear*365*24*60)-(age*365*24*60)
  seconds = (maxYear*365*24*60*60)-(age*365*24*60*60)
}

function currentAgeQuestion() {
  age = prompt("In years, how old are you?")
  console.log(age)
  calculations()
  display()
}

function display() {
  document.getElementById('years').innerHTML = `In Total Years: ${years} Years`
  document.getElementById('months').innerHTML = `In Total Months: ${months} Months`
  document.getElementById('weeks').innerHTML = `In Total Weeks: ${weeks} Weeks`
  document.getElementById('days').innerHTML = `In Total Days: ${days} Days`
  document.getElementById('hours').innerHTML = `In Total Hours: ${hours} Hours`
  document.getElementById('minutes').innerHTML = `In Total Minutes: ${minutes} Minutes`
  document.getElementById('seconds').innerHTML = `In Total Seconds: ${seconds} Seconds`
}

