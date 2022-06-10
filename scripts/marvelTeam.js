let teamName = document.querySelector('#teamName')

let btnTeamName = document.querySelector('#btnTeamName')
btnTeamName.addEventListener('click' , changeTeamName)

let btnSubmitTeam = document.querySelector('#btnSubmitTeam')
btnSubmitTeam.addEventListener('click', submitTeam)

function changeTeamName() {
    teamName.innerHTML = prompt('Name your team!')
}

let charListUL = document.querySelector('#charList')

function addCharacter() {
    let node = document.createElement("li")
    let textNode = document.createTextNode(document.getElementById('inputType').value)
    node.appendChild(textNode)
    charListUL.appendChild(node)
    document.getElementById('inputType').value = ''
}

function submitTeam() {
    const charItems = document.querySelectorAll('li')
    charItems.className = "charClass"
    console.log(charItems)

    for (let i=0; i<charItems.length; i++) {
        document.createElement('h3')
    }
}