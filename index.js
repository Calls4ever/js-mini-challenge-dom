/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)
const containerDiv=document.querySelector('.player-container')

/***** Deliverable 2 *****/
header.style.color='red'

/***** Deliverable 3 *****/
 console.log("PLAYERS array looks like this:", PLAYERS)
function renderPlayer(player){
    let newDiv=document.createElement('div')
    newDiv.className='player'
    newDiv['data-number']=player.number
    newDiv.innerHTML=`<h3>${player.name} <em>${player.nickname}</em></h3>
    <img src='${player.photo}' alt='${player.name}'/>}`
    containerDiv.appendChild(newDiv)
}
const getPlayer= playerObj =>{
    playerObj.forEach(element => {
        renderPlayer(element)
    });
}

getPlayer(PLAYERS)

const removePlayer=number=>{
    const players=document.querySelectorAll('.player')
    players.forEach(player=>{
        if(player['data-number']===number){
            player.remove()
        }
    })
}
removePlayer(7)
/***** Deliverable 4 *****/