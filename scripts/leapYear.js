let year = ''

askBtn = document.getElementById('askBtn')
askBtn.addEventListener('click', askLeapYear)

function askLeapYear() {
    year = parseInt(prompt('What year would you like to check for a leap year?'))
    // console.log(typeof year)


    if (year%4===0) {

        if (year%100===0) {

            if (year%400===0) {
                console.log("Yes. condition 3 met")
            } else {
                console.log("no. condition 3 not met")
            }
            console.log("No. condition 2 met")
        } else {
            console.log("Yes. Condition 2 not met")
        }
        console.log("yes. Condition 1 met")
    } else {
        console.log("No. Condition 1 not met")
    }

}