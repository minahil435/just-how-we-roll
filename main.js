/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

const firstDice = document.querySelector('#d6-roll');
const firstDiceMean = document.querySelector('#d6-rolls-mean');
const firstDiceMedian = document.querySelector('#d6-rolls-median');
const firstDiceMode = document.querySelector('#d6-rolls-mode');

const doubleDice1 = document.querySelector('#double-d6-roll-1');
const doubleDice2 = document.querySelector('#double-d6-roll-2');


const doubleDiceMean = document.querySelector('#double-d6-rolls-mean');
const doubleDiceMedian = document.querySelector('#double-d6-rolls-median');
const doubleDiceMode = document.querySelector('#double-d6-rolls-mode');

const singleDie12 = document.querySelector('#d12-roll');

const singleDie12Mean = document.querySelector('#d12-rolls-mean');
const singleDie12Median = document.querySelector('#d12-rolls-median');
const singleDie12Mode = document.querySelector('#d12-rolls-mode');

const singleDie20 = document.querySelector('#d20-roll');

const singleDie20Mean = document.querySelector('#d20-rolls-mean');
const singleDie20Median = document.querySelector('#d20-rolls-median');
const singleDie20Mode = document.querySelector('#d20-rolls-mode');



const resetButton = document.querySelector('#reset-button');






/*******************
 * EVENT LISTENERS *
 *******************/

firstDice.addEventListener('click', ludoDiceRolled);
doubleDice1.addEventListener('click', ludoDiceRolled2);
singleDie12.addEventListener('click', ludoDiceRolled3);
singleDie20.addEventListener('click', ludoDiceRolled4);
resetButton.addEventListener('click', reset);



/******************
 * RESET FUNCTION *
 ******************/

 function reset(){
  firstDice.src = 'images/start/d6.png'
  firstDiceMean.innerText = "NA"
  firstDiceMedian.innerText = "NA"
  firstDiceMode.innerText = "NA"

  doubleDice1.src = 'images/start/d6.png'
  doubleDice2.src = 'images/start/d6.png'
  doubleDiceMean.innerText = "NA"
  doubleDiceMedian.innerText = "NA"
  doubleDiceMode.innerText = "NA"

  singleDie12.src = 'images/start/d12.jpeg'
  singleDie12Mean.innerText = "NA"
  singleDie12Median.innerText = "NA"
  singleDie12Mode.innerText = "NA"

  singleDie20.src = 'images/start/d20.jpg'
  singleDie20Mean.innerText = "NA"
  singleDie20Median.innerText = "NA"
  singleDie20Mode.innerText = "NA"
 }

 reset()


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function ludoDiceRolled(){
  let num = getRandomNumber(5)
  num = num + 1

  firstDice.src = 'images/d6/'+ num + '.png'

  sixes.push(num)

  firstDiceMean.innerText = mean(sixes)
  firstDiceMedian.innerText = median(sixes)
  firstDiceMode.innerText = mode(sixes)
}

function ludoDiceRolled2(){

  let num = getRandomNumber(5)
  num = num + 1
  let num2 = getRandomNumber(5)
  num2 = num2 + 1

  doubleDice1.src = 'images/d6/'+ num + '.png'
  doubleDice2.src = 'images/d6/'+ num2 + '.png'

  doubleSixes.push(num + num2)

  doubleDiceMean.innerText = mean(doubleSixes)
  doubleDiceMedian.innerText = median(doubleSixes)
  doubleDiceMode.innerText = mode(doubleSixes)
}

function ludoDiceRolled3(){
  let num = getRandomNumber(11)
  num = num + 1

  singleDie12.src = 'images/numbers/'+ num + '.png'

  twelves.push(num)
   console.log("hello")
  singleDie12Mean.innerText = mean(twelves)
  singleDie12Median.innerText = median(twelves)
  singleDie12Mode.innerText = mode(twelves)
}
function ludoDiceRolled4(){
  let num = getRandomNumber(19)
  num = num + 1

  singleDie20.src = 'images/numbers/'+ num + '.png'

  twenties.push(num)
  singleDie20Mean.innerText = mean(twenties)
  singleDie20Median.innerText = median(twenties)
  singleDie20Mode.innerText = mode(twenties)

}


function mean(arr){
  let sum = 0
  for(const each of arr){
        sum = sum + each
  }
  if (sum === 0){return "NA"}
  return sum / (arr.length)
}

function median(arr){
  if (arr.length === 0){ return "NA"}
  const sortedArr = sortByNumber(arr)
  let mid = sortedArr.length / 2 
  if ((sortedArr.length % 2) === 0 ){
  
  const firstVal = sortedArr[mid - 1] 
  const secondVal =  sortedArr[mid]
  const sum = ( firstVal + secondVal ) / 2 
  return sum

  }
  return sortedArr[Math.floor(mid)]

}

function mode(arr){
  if (arr.length === 0){ return "NA"}
   let diceOccuringArray = []
   for (const each of arr){
     let sum = 0
    for (const digit of arr){
        if (each === digit){ sum = sum + 1}         
    }
    diceOccuringArray.push(sum)
   }

   return  arr[indexOfMax(diceOccuringArray)]
}
function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}
  
/****************
 * MATH SECTION *
 ****************/
