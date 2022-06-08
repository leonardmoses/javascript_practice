let year = ''

askBtn = document.getElementById('askBtn')
askBtn.addEventListener('click', askLeapYear)

function askLeapYear() {
    year = parseInt(prompt('What year would you like to check for a leap year?'))
    console.log(typeof year)

}