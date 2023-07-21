var score = 0;
var changedCells = [];
var clickedCells = []; 
var a=[];

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
    var cells = Array.from(document.getElementsByClassName('box'));
  
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
      var randomIndex = getRandomCell(cells);
      changeCellColor(randomIndex, duration);
      changedCells.push(randomIndex);
      
    }
    
    return changedCells;


      }

  // document.getElementById("easy").addEventListener("click", function(){
  //       changeColor('easy');
  // });
  // document.getElementById("medium").addEventListener("click", function(){
  //     changeColor('medium');
  // });
  document.getElementById("hard").addEventListener("click", function(){
    a=changeColor('hard');
  });
  

  var cells = document.getElementsByClassName("box");
        for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", function() {
                var cellIndex = Array.prototype.indexOf.call(cells, this);
                if (a.includes(cellIndex)  == clickedCells.includes(cellIndex)) {
                    score++;
                    clickedCells.push(cellIndex);
                    document.getElementById(-[p-"sc").innerText = "Score: " + score;
                }

            });
        }
