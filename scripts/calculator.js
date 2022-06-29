// let inputType = document.querySelector('#inputType').innerHTML

let num1 = 0
let num2 = 0
let sum = null
const numArray = []

// creating equals buttons
let inputEnter = document.querySelector('#btnEnter')
inputEnter.addEventListener('click', btnPress)

//creating display screen area
let display = document.querySelector('#display')

//creating buttons 0-9 class
let btnNum1 = document.querySelectorAll('.btnNum')

//click event for buttons 0-9
for (let i=0; i<btnNum1.length; i++) {
    btnNum1[i].addEventListener('click', (e)=>{
        display.innerHTML = e.target.innerHTML;
        numArray.push(parseInt(e.target.innerHTML))
        num1 = numArray[0]
        num2 = numArray[1]
        console.log(numArray)
        console.log(num1)
        console.log(num2)
    })
}

//click event for buttons operators
let btnOperator = document.querySelectorAll('.btnOperator')
for (let i=0; i<btnOperator.length; i++) {
    btnOperator[i].addEventListener('click', (e)=>{
        display.innerHTML = e.target.innerHTML
    })
}

//function to display when button is clicked
function btnPress() {
    display.innerHTML = document.querySelector('.btnNum').innerHTML
}

function add(args) {
    console.log(args)
    sum = 0
    for (let i=0; i<args.length; i++) {
        sum += args[i]
    }
    return sum
}

function subtract(args) {
    sum = args[0]
    console.log(sum)
    console.log(args)
    for (let i=1; i<args.length; i++) {
        sum -= args[i]
    }
    return sum
}

function multiply(args) {
    sum = [1]
    for (let i=0; i<args.length; i++) {
        sum *= args[i]
    }
    return sum
}

function divide(args) {
    sum = args[0]
    console.log(sum)
    console.log(args)
    for (let i=0; i<args.length; i++) {
        sum /= args[i]
    }
    return sum
}

function calculator(operator, ...args) {
    return operator(args)
}

