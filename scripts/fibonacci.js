let range = 0
let fibArray = []
let fibDisplay = document.getElementById('fibSequence')

runSequence(range)

const btnRange = document.getElementById('btnRange')
btnRange.addEventListener('click', changeRange)

const btnGenerate = document.getElementById('btnGenerate')
btnGenerate.addEventListener('click', runSequence)

document.getElementById('headerRange').innerHTML = `Your Range is ${range} Numbers`

function changeRange() {
    range = parseInt(prompt('How many numbers do you want in your sequence?'))
    document.getElementById('headerRange').innerHTML = `Your Range is ${range} Numbers`
    console.log(`Range is ${range} numbers.`)
    runSequence(range)
}

function runSequence(n) {
    
    fibArray = [0, 1]
    let last1
    let last2
    let lastNew

    if (n===0) {
        fibArray = []
    } else if (n===1) {
        fibArray = [0]
    } else if (n===2) {
        fibArray = [0,1]
    } else {
        n = n-2
        for (let i=0; i<n; i++) {
            last1 = fibArray[fibArray.length -1]
            last2 = fibArray[fibArray.length -2]
            lastNew = last1 + last2
            fibArray.push(lastNew)
        }
    }
    console.log(n)
    console.log(fibArray)
    fibDisplay.innerHTML = `${fibArray.join(', ')}`
}

// fibDisplay.innerHTML = fibArray;
