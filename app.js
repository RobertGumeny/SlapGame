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
   document.getElementById("alert-bar").innerHTML = /*html*/ `<h4>You slapped the Computer for 10 damage!</h4>`
  //  console.log(computer.health)
  let comHealthBar = document.getElementById("computer-health")
  comHealthBar.setAttribute("style", `width:${computer.health}%;`)
  }
  if (result == 'kick'){
   computer.health = (computer.health - 15)
   document.getElementById("alert-bar").innerHTML = /*html*/ `<h4>You kicked the Computer for 15 damage!</h4>`
   let comHealthBar = document.getElementById("computer-health")
   comHealthBar.setAttribute("style", `width:${computer.health}%;`)
  //  console.log(computer.health)
  }
  if (result == 'punch'){
   computer.health = (computer.health - 20)
   document.getElementById("alert-bar").innerHTML = /*html*/ `<h4>You punched the Computer for 20 damage!</h4>`
   let comHealthBar = document.getElementById("computer-health")
   comHealthBar.setAttribute("style", `width:${computer.health}%;`)
  //  console.log(computer.health)
  }
  if (computer.health > 0){
    setTimeout(randomComputerAttack, 1000)
  }
 
  if (player.health <= 0){
    computerWins()
    setTimeout(resetGame, 2000)
  }
  if (computer.health <= 0){
    playerWins()
    setTimeout(resetGame, 2000)
  }
}
// NOTE 
// Script to execute when player wins (computer health = 0)

function playerWins(){
  player.wins++
  computer.losses++
  document.getElementById("alert-bar").innerHTML = /*html*/ `<h4>Player Wins!</h4>`
  document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h4>Computer Loses!</h4>`
  document.getElementById("player-wins").innerText = player.wins.toString()
  document.getElementById("computer-losses").innerText = computer.losses.toString()
  // @ts-ignore
  document.getElementById('btn-clickable').disabled = true
  // @ts-ignore
  document.getElementById('btn-clickable-2').disabled = true
  // @ts-ignore
  document.getElementById('btn-clickable-3').disabled = true

}
// NOTE
// Script to execute when computer wins (player health = 0)

function computerWins(){
  computer.wins++
  player.losses++
  document.getElementById("alert-bar").innerHTML = /*html*/ `<h4>Player Loses!</h4>`
  document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h4>Computer Wins!</h4>`
  document.getElementById("player-losses").innerText = player.losses.toString()
  document.getElementById("computer-wins").innerText = computer.wins.toString()
}
// NOTE
// Script to execute to reset the game

function resetGame(){
  document.getElementById("alert-bar").innerHTML = /*html*/ `<h4>Start Slapping!</h4>`
  document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h4></h4>`
  player.health = 100;
  let playHealthBar = document.getElementById("player-health")
  playHealthBar.setAttribute("style",`width:${player.health}%;` )
  computer.health = 100;
  let comHealthBar = document.getElementById("computer-health")
  comHealthBar.setAttribute("style", `width:${computer.health}%;`)
  // @ts-ignore
  document.getElementById('btn-clickable').disabled = false
  // @ts-ignore
  document.getElementById('btn-clickable-2').disabled = false
  // @ts-ignore
  document.getElementById('btn-clickable-3').disabled = false
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
    document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h4>The Computer slapped YOU for 10 damage!</h4>`
    // document.getElementById("btn-comp-1").classList.add("active")
    let playHealthBar = document.getElementById("player-health")
    playHealthBar.setAttribute("style",`width:${player.health}%;` )
  }
  if (computerChoice == 'kick') {
    player.health = (player.health - 15)
    document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h4>The Computer kicked YOU for 15 damage!</h4>`
    // document.getElementById("btn-comp-2").classList.add("active")
    let playHealthBar = document.getElementById("player-health")
    playHealthBar.setAttribute("style",`width:${player.health}%;` )
  }
  if (computerChoice == 'punch') {
    player.health = (player.health - 20)
    document.getElementById("alert-bar-2").innerHTML = /*html*/ `<h4>The Computer punched YOU for 20 damage!</h4>`
    // document.getElementById("btn-comp-3").classList.add("active")
    let playHealthBar = document.getElementById("player-health")
    playHealthBar.setAttribute("style",`width:${player.health}%;` )
  }
}

