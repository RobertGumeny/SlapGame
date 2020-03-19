// GLOBAL VARIABLES/OBJECTS FOR PLAYER AND COMPUTER HEALTH/ATTACKS

let player = {
  health: 100,
  wins: 0,
  losses: 0,
  attacks: {'slap': 10,
            'kick': 15,
            'punch': 20}
}
let computer = {
  health: 100,
  wins: 0,
  losses: 0,
  attacks: {'slap': 10,
            'kick': 15,
            'punch': 20}
}

// NOTE 
// This function allows the player to attack the computer, attacks are chosen via buttons in our HTML.

function playerAttack(result) {
  if (result == 'slap'){
   computer.health = (computer.health - 10)
   document.getElementById("alert-bar").innerHTML = /*html*/ `<h1>You slapped the Computer for 10 damage!</h1>`
  //  console.log(computer.health)
  let comHealthBar = document.getElementById("computer-health")
  comHealthBar.setAttribute("style", `width:${computer.health}%;`)
  }
  if (result == 'kick'){
   computer.health = (computer.health - 15)
   document.getElementById("alert-bar").innerHTML = /*html*/ `<h1>You kicked the Computer for 15 damage!</h1>`
   let comHealthBar = document.getElementById("computer-health")
   comHealthBar.setAttribute("style", `width:${computer.health}%;`)
  //  console.log(computer.health)
  }
  if (result == 'punch'){
   computer.health = (computer.health - 20)
   document.getElementById("alert-bar").innerHTML = /*html*/ `<h1>You punched the Computer for 20 damage!</h1>`
   let comHealthBar = document.getElementById("computer-health")
   comHealthBar.setAttribute("style", `width:${computer.health}%;`)
  //  console.log(computer.health)
  }
  randomComputerAttack()

  if (player.health <= 0){
    computerWins()
  }
  if (computer.health <= 0){
    playerWins()
  }
}
// NOTE 
// Script to execute when player wins (computer health = 0)

function playerWins(){
  player.wins++
  computer.losses++
  document.getElementById("alert-bar").innerHTML = /*html*/ `<h1>Player Wins!</h1>`
  document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h1>Computer Loses!</h1>`
  document.getElementById("player-wins").innerText = player.wins.toString()
  document.getElementById("computer-losses").innerText = computer.losses.toString()
}
// NOTE
// Script to execute when computer wins (player health = 0)

function computerWins(){
  computer.wins++
  player.losses++
  document.getElementById("alert-bar").innerHTML = /*html*/ `<h1>Player Loses!</h1>`
  document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h1>Computer Wins!</h1>`
  document.getElementById("player-losses").innerText = player.losses.toString()
  document.getElementById("computer-wins").innerText = computer.wins.toString()
}
// NOTE
// Script to execute to reset the game

function resetGame(){
  document.getElementById("alert-bar").innerHTML = /*html*/ `<h1>Start Slapping!</h1>`
  document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h1></h1>`
  player.health = 100;
  let playHealthBar = document.getElementById("player-health")
  playHealthBar.setAttribute("style",`width:${player.health}%;` )
  computer.health = 100;
  let comHealthBar = document.getElementById("computer-health")
  comHealthBar.setAttribute("style", `width:${computer.health}%;`)
}
// NOTE
// Script to select a random computer attack

function randomComputerAttack(){
  let keys = Object.keys(computer.attacks)
  let computerChoiceIndex = Math.floor(Math.random()* keys.length)
  let computerChoice = keys[computerChoiceIndex]
  console.log(computerChoice)
  if (computerChoice == 'slap') {
    player.health = (player.health - 10)
    document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h1>The Computer slapped YOU for 10 damage!</h1>`
    let playHealthBar = document.getElementById("player-health")
    playHealthBar.setAttribute("style",`width:${player.health}%;` )
  }
  if (computerChoice == 'kick') {
    player.health = (player.health - 15)
    document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h1>The Computer kicked YOU for 15 damage!</h1>`
    let playHealthBar = document.getElementById("player-health")
    playHealthBar.setAttribute("style",`width:${player.health}%;` )
  }
  if (computerChoice == 'punch') {
    player.health = (player.health - 20)
    document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h1>The Computer punched YOU for 20 damage!</h1>`
    let playHealthBar = document.getElementById("player-health")
    playHealthBar.setAttribute("style",`width:${player.health}%;` )
  }
}
