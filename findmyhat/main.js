const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const height = 10;
const width = 10;
const field = [[]]

//GENERATE 10 X 10 FIELD
function generateField() {

    
        //Outer Array - Row
        for (let row = 0; row < height; row++)
        {
            //Initialise the columns here
            field[row] = [];        //Creating an empty col first
    
    
            //Inner Array - Col
            for (let col = 0; col < width; col++)
            {
               
                field[row][col] = fieldCharacter;   
            }   
        } 
    
    
        //print();
    
        field[0][0] = pathCharacter;
        //field[0][1] = "A";
        //console.log(field);       //array format

    // Randomly allocate the hat character (^) in the field
    let hatRow, hatCol;
    do {
        hatRow = Math.floor(Math.random() * height);
        hatCol = Math.floor(Math.random() * width);
    } while (field[hatRow][hatCol] === pathCharacter || field[hatRow][hatCol] === hat);
    field[hatRow][hatCol] = hat;
    


 // Randomly allocate 20 hole characters (O) in the field
 let numHoles = 0;
 while (numHoles < 20) {
     let row = Math.floor(Math.random() * height);
     let col = Math.floor(Math.random() * width);
     if (field[row][col] !== pathCharacter && field[row][col] !== hat && field[row][col] !== hole) {
         field[row][col] = hole;
         numHoles++;
         }
     }
 } 
    

 function startGame() {
    let currentRow = 0;
    let currentCol = 0;
  
    // Find the initial position of the pathCharacter
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        if (field[row][col] === pathCharacter) {
          currentRow = row;
          currentCol = col;
          break;
        }
      }
    }
  
    // Loop until the user finds the hat or falls into a hole
    while (true) {
      // Clear the console and print the current state of the field
      clear();
      console.log(field.map(row => row.join('')).join('\n'));
  
      // Ask the user for a direction
      const direction = prompt('Which way do you want to go? ');
  
      // Move the pathCharacter in the specified direction
      switch (direction.toLowerCase()) {
        case 'u':
          currentRow--;
          break;
        case 'd':
          currentRow++;
          break;
        case 'l':
          currentCol--;
          break;
        case 'r':
          currentCol++;
          break;
        default:
          console.log(`Enter (u, d, l or r)`);
          continue; // Ask again for a valid direction
      }
  
      // Check if the new position is valid
      if (currentRow < 0 || currentRow >= height || currentCol < 0 || currentCol >= width) {
        console.log('Out of bounds - Game End');
        break;
      } else if (field[currentRow][currentCol] === hole) {
        console.log('Sorry, you fell down a hole');
        break;
      } else if (field[currentRow][currentCol] === hat) {
        console.log('Congrats, you found your hat!');
        break;
      }
  
      // Update the field with the new position of the pathCharacter
      field[currentRow][currentCol] = pathCharacter;
    }
  }
  
    generateField()
    startGame()

    





