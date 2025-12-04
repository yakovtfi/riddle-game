import { askQuestion } from "./input.js";

export  function askRiddle(riddleObj) {
  console.log(`\nRiddle ${riddleObj.id}: ${riddleObj.name}`);
  console.log(riddleObj.taskDescription);
  
  if (riddleObj.choices) {
    for (let i = 0; i < riddleObj.choices.length; i++) {
      console.log(`${i}. ${riddleObj.choices[i]}`);
    }
  }
  
  let answer = "";
  while (answer !== riddleObj.correctAnswer) {
    answer = askQuestion("Your answer: ");
    
    if (answer === riddleObj.correctAnswer) {
      console.log("Correct!");
    } else {
      console.log("Wrong! Try again.");
    }
  }
}

export function measureSolveTime(fn) {
  let startTime = Date.now();
  fn();
  let endTime = Date.now();
  
  let timeInSeconds = (endTime - startTime) / 1000;
  return timeInSeconds;
}

