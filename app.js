// GLOBAL VARIABLES/OBJECTS FOR PLAYER AND COMPUTER HEALTH/ATTACKS

let player = {
  health: 100,
  attacks: {'slap': 10,
            'kick': 15,
            'punch': 20}
}
let computer = {
  health: 100,
  attacks: {'slap': 10,
            'kick': 15,
            'punch': 20}
}

// NOTE 
// This function allows the player to attack the computer, attacks are chosen via buttons in our HTML.

function playerAttack(result) {
  if (result == 'slap'){
   computer.health = (computer.health - 10)
  //  console.log(computer.health)
  document.getElementById("computer-health").innerHTML = (computer.health)
  }
  if (result == 'kick'){
   computer.health = (computer.health - 15)
   document.getElementById("computer-health").innerHTML = (computer.health)
  //  console.log(computer.health)
  }
  if (result == 'punch'){
   computer.health = (computer.health - 20)
   document.getElementById("computer-health").innerHTML = (computer.health)
  //  console.log(computer.health)
  }
 }

 