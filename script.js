//BOT
//ROCK = 1
//PAPER = 2
//SCISSOR = 3

const winboard = document.getElementById("win")
const loseboard = document.getElementById("lose")
const tieboard = document.getElementById("tie")
let WinScoreCount = 0;
let LoseScoreCount = 0;
let TieScoreCount = 0;
function rock() {
  const botrandom = Math.floor(Math.random () *3) + 1;
  document.getElementById("left").src="Rock.png";
  if (botrandom == 3){
    document.getElementById('result').innerHTML = 1;
    document.getElementById("right").src="scissor.png";
    ++WinScoreCount;
    winboard.textContent = WinScoreCount;
    document.getElementById("result").innerText = "YOU WON!";
    document.getElementById("result").style.color = 'green';
  }
 else if (botrandom == 2){
    document.getElementById('result').innerHTML = 1;
    document.getElementById("right").src="paper.png";
    ++LoseScoreCount;
    loseboard.textContent = LoseScoreCount;
    document.getElementById("result").innerText = "YOU LOSE!";
    document.getElementById("result").style.color = 'red';
}
else{
  document.getElementById('result').innerHTML = 1;
  document.getElementById("right").src="Rock.png";
  ++TieScoreCount;
  tieboard.textContent = TieScoreCount;
  document.getElementById("result").innerText = "IT'S TIE!";
  document.getElementById("result").style.color = 'orange';
}
}
function paper() {
  const botrandom = Math.floor(Math.random () *3) + 1;
  document.getElementById("left").src="paper.png";
  if (botrandom == 1){
    document.getElementById('result').innerHTML = 1;
    document.getElementById("right").src="Rock.png";
    ++WinScoreCount;
    winboard.textContent = WinScoreCount;
    document.getElementById("result").innerText = "YOU WON!";
    document.getElementById("result").style.color = 'green';
  }
 else if (botrandom == 3){
    document.getElementById('result').innerHTML = 1;
    document.getElementById("right").src="scissor.png";
    ++LoseScoreCount;
    loseboard.textContent = LoseScoreCount;
    document.getElementById("result").innerText = "YOU LOSE!";
    document.getElementById("result").style.color = 'red';
}
else{
  document.getElementById('result').innerHTML = 1;
  document.getElementById("right").src="paper.png";
  ++TieScoreCount;
  tieboard.textContent = TieScoreCount;
  document.getElementById("result").innerText = "IT'S TIE!";
  document.getElementById("result").style.color = 'orange';
}
}
function scissor() {
  const botrandom = Math.floor(Math.random () *3) + 1;
  document.getElementById("left").src="scissor.png";
  if (botrandom == 2){
    document.getElementById('result').innerHTML = 1;
    document.getElementById("right").src="paper.png";
    ++WinScoreCount;
    winboard.textContent = WinScoreCount;
    document.getElementById("result").innerText = "YOU WON!";
    document.getElementById("result").style.color = 'green';
  }
 else if (botrandom == 1){
    document.getElementById('result').innerHTML = 1;
    document.getElementById("right").src="Rock.png";
    ++LoseScoreCount;
    loseboard.textContent = LoseScoreCount;
    document.getElementById("result").innerText = "YOU LOSE!";
    document.getElementById("result").style.color = 'red';
}
else{
  document.getElementById('result').innerHTML = 1;
  document.getElementById("right").src="scissor.png";
  ++TieScoreCount;
  tieboard.textContent = TieScoreCount;
  document.getElementById("result").innerText = "IT'S TIE!";
  document.getElementById("result").style.color = 'orange';
}
}