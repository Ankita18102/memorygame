let score = 0;
let changedCells = [];
var clickedCells = []; 
function getRandomCell(cells) {
  return cells[Math.floor(Math.random() * cells.length)];
}

function changeCellColor(cell, duration) {
  cell.style.background = "#BDF6FE"; 
  setTimeout(() => {
    cell.style.background = "#98fb98";
  }, duration * 1000);
}

function changeColor(difficulty) {
    let cells = Array.from(document.getElementsByClassName('box'));
  
    let numCellsToChange;
    let duration;
  
    switch (difficulty) {
      case 'easy':
        numCellsToChange = Math.ceil(cells.length / 6);
        duration = 3;
        break;
      case 'medium':
        numCellsToChange = Math.ceil(cells.length / 4);
        duration = 2;
        break;
      case 'hard':
        numCellsToChange = Math.ceil(cells.length / 2);
        duration = 1;
        break;
      default:
        return;
    }
  
    for (let i = 0; i < numCellsToChange; i++) {
      const randomCell = getRandomCell(cells);
      changeCellColor(randomCell, duration);
      changedCells.push(randomCell);
      
    }
  }

        



        
   