let inputType = document.querySelector('#inputType').innerHTML

let inputEnter = document.querySelector('#btnEnter')
inputEnter.addEventListener('click', btnPress)

let display = document.querySelector('#display')

let btnNum1 = document.querySelectorAll('.btnNum')

for (let i=0; i<btnNum1.length; i++) {
    btnNum1[i].addEventListener('click', (e)=>{
        display.innerHTML = e.target.innerHTML
    })
}

let btnOperator = document.querySelectorAll('.btnOperator')
for (let i=0; i<btnOperator.length; i++) {
    btnOperator[i].addEventListener('click', (e)=>{
        display.innerHTML = e.target.innerHTML
    })
}

function btnPress() {
    display.innerHTML = document.querySelector('.btnNum').innerHTML

}

console.log(inputType);