import { askQuestion } from './utils/input.js';
import { Createplayer, addSolveTime, showStats } from './utils/player.js';
import { askRiddle, measureSolveTime } from './utils/riddel.js';
import {AllRiddles}  from './riddels/index.js';


console.log("Welcome to the riddels game")

let playername=askQuestion("what is your name ?:")

let player=Createplayer(playername)

for (let i = 0; i < AllRiddles.length; i++) {
  let riddle = AllRiddles[i];
  
  let duration = measureSolveTime(function() {
    askRiddle(riddle);
  });
  
  addSolveTime(player, duration);
}

showStats(player);
