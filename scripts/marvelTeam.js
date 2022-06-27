let teamName = document.querySelector('#teamName')

let btnTeamName = document.querySelector('#btnTeamName')
btnTeamName.addEventListener('click' , changeTeamName)

let btnSubmitTeam = document.querySelector('#btnSubmitTeam')
btnSubmitTeam.addEventListener('click', submitTeam)

function changeTeamName() {
    teamName.innerHTML = prompt('Name your team!')
}

let charListUL = document.querySelector('#charList')

// function addCharacter() {
//     let listNode = document.createElement("li")
//     let textNode = document.createTextNode(document.getElementById('inputType').value)
//     listNode.appendChild(textNode)
//     charListUL.appendChild(listNode)
//     document.getElementById('inputType').value = ''
// }

let btnAdd = document.querySelector('btnAdd')
btnAdd.addEventListener('click' , addCharacter)

function addCharacter() {
    if (document.querySelector('#inputType').value.length == 0) {
        alert('Enter a Name')
    } else {
        
    }
    
}


function submitTeam() {
    const charItems = document.querySelectorAll('li')
    const team = []
    for (let i=0; i<charItems.length; i++) {
        team.push(charItems[i].innerHTML)
    }
    
    let lastMember = team.pop()
    let newH3 = document.createElement('h3')
    
    newH3.innerHTML = `Your Marvel Team name is the ${teamName.innerHTML} and your members are ${team.join(', ')}, and ${lastMember}.`
    document.body.appendChild(newH3)

    console.log(newH3.innerHTML)
}