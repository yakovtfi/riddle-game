export function Createplayer(name){
    return{
        name:name,
        times:[]

    };
}


export function addSolveTime(player, seconds) {
  player.times.push(seconds);
}

export function showStats(player) {
  let total = 0;
  for (let i = 0; i < player.times.length; i++) {
    total += player.times[i];
  }
  
  let average = total / player.times.length;
  
  console.log(`\nGreat job, ${player.name}!`);
  console.log(`Total time: ${total.toFixed(1)} seconds`);
  console.log(`Average per riddle: ${average.toFixed(1)} seconds`);
}
