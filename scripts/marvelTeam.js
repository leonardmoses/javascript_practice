let teamName = document.querySelector('#teamName')
let btnTeamName = document.querySelector('#btnTeamName')
btnTeamName.addEventListener('click' , changeTeamName)

function changeTeamName() {
    teamName.innerHTML = prompt('Name your team!')
}

let charListUL = document.querySelector('#charList')

function addCharacter() {
    let node = document.createElement("li")
    let textNode = document.createTextNode(document.getElementById('inputType').value)
    node.appendChild(textNode)
    charListUL.appendChild(node)
}