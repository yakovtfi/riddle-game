import { askQuestion } from './utils/input.js';
import { Createplayer, addSolveTime, showStats } from './utils/player.js';
import { askRiddle, measureSolveTime } from './utils/riddel.js';
import { sortByDifficulty, filterByDifficulty, filterUpToDifficulty } from './utils/difficulty.js';
import {AllRiddles}  from './riddels/index.js';

console.log("Welcome to the Riddle Game!");

let playerName = askQuestion("What is your name? ");

let player = Createplayer(playerName);

console.log("\nChoose game mode:");
console.log("1. Play all riddles sorted by difficulty");
console.log("2. Play riddles of a specific difficulty");
console.log("3. Play riddles up to a certain difficulty");
console.log("4. Play all riddles in original order");

let choice = askQuestion("Enter your choice (1-4): ");

let riddlesToPlay = [];

if (choice === "1") {
  riddlesToPlay = sortByDifficulty(AllRiddles);
} else if (choice === "2") {
  console.log("\nChoose difficulty:");
  console.log("1. EASY");
  console.log("2. MEDIUM");
  console.log("3. HARD");
  let diffChoice = askQuestion("Enter your choice (1-3): ");
  
  let difficulty = "";
  if (diffChoice === "1") {
    difficulty = "EASY";
  } else if (diffChoice === "2") {
    difficulty = "MEDIUM";
  } else if (diffChoice === "3") {
    difficulty = "HARD";
  }
  
  riddlesToPlay = filterByDifficulty(AllRiddles, difficulty);
} else if (choice === "3") {
  console.log("\nPlay riddles up to:");
  console.log("1. EASY ");
  console.log("2. Up to MEDIUM ( EASY and MEDIUM)");
  console.log("3. Up to HARD ");
  let maxChoice = askQuestion("Enter your choice (1-3): ");
  
  let maxDifficulty = "";
  if (maxChoice === "1") {
    maxDifficulty = "EASY"; 
  } else if (maxChoice === "2") {
    maxDifficulty = "MEDIUM";
  } else if (maxChoice === "3") {
    maxDifficulty = "HARD";
  }
  
  riddlesToPlay = filterUpToDifficulty(AllRiddles, maxDifficulty);
} else {
  riddlesToPlay = AllRiddles;
}

if (riddlesToPlay.length === 0) {
  console.log("\nNo riddles match your selection!");
} else {
  for (let i = 0; i < riddlesToPlay.length; i++) {
    let riddle = riddlesToPlay[i];
    
    let duration = measureSolveTime(function() {
      askRiddle(riddle);
    });
    
    addSolveTime(player, duration);
  }
  
  showStats(player);
}
