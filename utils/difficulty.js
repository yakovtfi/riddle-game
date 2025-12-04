export function sortByDifficulty(riddles) {
  let difficultyOrder = { "EASY": 1, "MEDIUM": 2, "HARD": 3 };
  
  let sorted = [];
  for (let i = 0; i < riddles.length; i++) {
    sorted.push(riddles[i]);
  }
  
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      let current = difficultyOrder[sorted[j].difficulty];
      let next = difficultyOrder[sorted[j + 1].difficulty];
      
      if (current > next) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  
  return sorted;
}

export function filterByDifficulty(riddles, difficulty) {
  let filtered = [];
  for (let i = 0; i < riddles.length; i++) {
    if (riddles[i].difficulty === difficulty) {
      filtered.push(riddles[i]);
    }
  }
  return filtered;
}

export function filterUpToDifficulty(riddles, maxDifficulty) {
  let difficultyOrder = { "EASY": 1, "MEDIUM": 2, "HARD": 3 };
  let maxLevel = difficultyOrder[maxDifficulty];
  
  let filtered = [];
  for (let i = 0; i < riddles.length; i++) {
    let riddleLevel = difficultyOrder[riddles[i].difficulty];
    if (riddleLevel <= maxLevel) {
      filtered.push(riddles[i]);
    }
  }
  return filtered;
}


