/**
 * 
 * In this function, you will have to draw a vertical line with `n` length
 * for example `drawVLine(5) should print out 
  # 
  # 
  # 
  # 
  # 
 */
function drawVLine(n) {
  // Continue the code here
  for (let i = 0; i < n; i++) {
    console.log("#");
    
  }
}
/**
 *
 * In this function, you will have to draw a horizontal line with `n` length
 * for example `drawHLine(5) should print out # # # # # (there are spaces here!)
 */
function drawHLine(n) {
  // Continue the code here
  for (let i = 0; i < n; i++) {
    process.stdout.write("#");
    
  }
}

/**
 * 
 * In this function, you will have to draw a square with a length of `n` 
 * for example `drawSquare(5) should print out 
 
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #

 */
function drawSquare(n) {
  console.log("")
  // Continue the code here
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n ; j++) {
      process.stdout.write(" # ");
    }
    console.log("");
    
  }
  console.log("---------------")
}

/**
 * 
 * In this function, you will have to draw a triangle with a length of `n` 
 * for example `drawLeftTriangle(5) should print out 
 
  #  
  #  #  
  #  #  #  
  #  #  #  #  
  #  #  #  #  #

 */
function drawLeftTriangle(n) {
  console.log("");
  for (let i = 0; i <n; i++) {
    
    
    for (let j = 0; j <= i; j++) {
      process.stdout.write(" # ");

    }
    
    console.log("");
  }
  // Continue the code here
  console.log("----------------")
}

/**
 * 
 * In this function, you will have to draw a tree with a length of `n` 
 * for example `drawTree(5) should print out 
 
     #   
    # #   
   # # # 
  # # # # 
     #

 */

function drawTree(n) {
  
  let sp=" "
  console.log("")
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n-i; j++) {
      process.stdout.write(sp);
    }
    
    for (let k = 0; k < i; k++) {
      process.stdout.write(" #");
      
    }
  
    console.log("");
  } 
 for(let i=0;i<n;i++){
   process.stdout.write(sp);
 }
process.stdout.write("#");
console.log()
console.log("--------------------")
}
/**
 *
 * In this example, you will create 4 arrays, `yellowCards`, `greenCards`, `redCards`, `blueCards`
 * (BONUS) Try to optimize the code with doing it with one gigantic loop
 */
function fillUnoDeck() {
  let values=[0,1,2,3,4,5,6,7,8,9]
  let greenCards = [];
  let yellowCards = [];
  let redCards = [];
  let blueCards = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < 2; j++) {
      
      greenCards.push(values[i]);
      
      yellowCards.push(values[i]);
   
      redCards.push(values[i]);
  
      blueCards.push(values[i]);
    
    }
    
  }
  console.log("Green Cards :" + greenCards);
  console.log("Yellow Cards :" + yellowCards);
  console.log("Red Cards :" + redCards);
  console.log("Blue Cards :" + blueCards);

}

drawSquare(10)
drawLeftTriangle(10)
drawTree(10)
