var maxYear = prompt("In years, what age would you like to live till?")
var age = prompt("In years, how old are you?")
document.getElementById("maxYears").innerHTML = maxYear

function lifeInWeeks(age) {
  
    var years = (maxYear-age)
    var days = (maxYear*365)-(age*365)
    var weeks = (maxYear*52)-(age*52)
    var months = (maxYear*12)-(age*12)

    document.getElementById('years').innerHTML = `${years} years`
    document.getElementById('months').innerHTML = `${months} months`
    document.getElementById('weeks').innerHTML = `${weeks} weeks`
    document.getElementById('days').innerHTML = `${days} days`
  }
  
lifeInWeeks(age);