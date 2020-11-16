const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";

let words = ['html', 'css', 'javascript', 'php', 'python', 'c++', 'c#', 'java', 'angularjs', 'angular2+', 'reactjs', 'nodejs', 'nestjs', 'expressjs', 'mongodb', 'mysql'];

const createNewWords = () => {
  let randNum = Math.floor(Math.random()* words.length);
  let newTempWords = words[randNum];
  return newTempWords;
}

const scrambleWords = (arr) => {
  for (let i = arr.length-1; i > 0; i--) {
    let temp = arr[i];
    //console.log(temp);
    let j = Math.floor(Math.random()*(i+1));
    //console.log(i);
    //console.log(j);
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

btn.addEventListener('click', function(){
  if(!play){
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
    newWords = createNewWords();
    randWords = scrambleWords(newWords.split("")).join("");
    //console.log(randWords.join(""));
    msg.innerHTML = `Guess the word : ${randWords}`;
  } else {
    let tempWord = guess.value;
    if (tempWord === newWords) {
      //console.log("correct");
      play = false;
      msg.innerHTML = `Awesome it's correct. It is ${newWords}`;
      btn.innerHTML = "Play Again";
      guess.classList.toggle('hidden');
      guess.value = "";
    }else{
      //console.log("incorrect");
      msg.innerHTML = `Sorry bro it's incorrect. Please try again ${randWords}`;
    }
  }
})