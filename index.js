// Code your solutions in this file
function tailsNeverFails() {
  let tails = 0;
  
  while (Math.random() >= 60) {
    tails++
  }
  
  console.log(`You got ${tails} tails in a row!`);
}

tailsNeverFails();
