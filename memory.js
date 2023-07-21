var score = 0;
var changedCells = [];
var clickedCells = []; 

        function changeColor() {
            var cells = document.getElementsByClassName("box");
            var numCells = cells.length;
            var numChanges = Math.floor(numCells / 3);
            
        
            for (var i = 0; i < numChanges; i++) {
                var randomIndex = Math.floor(Math.random() * numCells);
                var cell = cells[randomIndex];
                cell.style.backgroundColor = "#BDF6FE";
                changedCells.push(randomIndex);
            }
            return changedCells;
        }
        
        var changedCells = changeColor();  
setTimeout(function() {
    var cells = document.getElementsByClassName("box");
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "#98fb98";
    }
}, 1500);

var cells = document.getElementsByClassName("box");
        for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", function() {
                var cellIndex = Array.prototype.indexOf.call(cells, this);
                if (changedCells.includes(cellIndex)  != clickedCells.includes(cellIndex)) {
                    score++;
                    clickedCells.push(cellIndex);
                    document.getElementById("sc").innerText = "Score: " + score;
                }

            });
        }


        
   