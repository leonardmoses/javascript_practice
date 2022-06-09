let year = ''
let answer = ''
let answerYes = ''
let answerNo = ''

askBtn = document.getElementById('askBtn')
askBtn.addEventListener('click', askLeapYear)

function askLeapYear() {
    year = parseInt(prompt('What year would you like to check for a leap year?'))
    console.log(year)
    
    answerYes = `${year} is a Leap Year!`
    answerNo = `${year} is not a Leap Year.`

    if (year%4===0) {
        console.log("Yes. Condition 1 met. Year is divisible by 4")
        

            if (year%100===0) {
                console.log("No. Condition 2 met. Year that is divisible by 4 is also divisible by 100.")
                

                    if (year%400===0) {
                        console.log("Yes. Condition 3 met. Year that is divisble by 4 and 100 is also divisible by 400.")
                        answer = answerYes

                    } else {
                        console.log("No. condition 3 not met. Year that is divisible by 4 and 100 is not divisble by 400.")
                        answer = answerNo
                    }

            } else {
                console.log("Yes. Condition 2 not met. Year taht is divisible by 4 is not divisible by 100.")
                answer = answerYes
            }

    } else {
        console.log("No. Condition 1 not met. Year is not divisible by 4")
        answer = answerNo
    }

    document.getElementById('answer').innerHTML = answer
}

