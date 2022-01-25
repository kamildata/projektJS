
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

const hands = [...document.querySelectorAll('.select img')];


function handSelection(){
  
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow'
}

// const handSelection = (e) =>{
//     console.log(e.target);
//     console.log(e.currentTarget);
// }
function aiChoice(){
    const aiHand = hands[Math.floor(Math.random()*3)].dataset.option;
    return aiHand;
}
function checkResult(player, ai){
if(player === ai)
{
   return 'draw';
}
else if((player === "papier" && ai==="kamień") || (player === "kamień" && ai ==="nożyczki") || (player === "nożyczki" && ai ==="papier")){
    return 'win'
}
else{
    return 'loss'
}

}
function publishResult(player,ai,result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;


    gameSummary.numbers++;
    document.querySelector('p.numbers span').textContent = gameSummary.numbers;

    if(result === 'win')
    {
        gameSummary.wins++;
        document.querySelector('p.wins span').textContent = gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent ="wygrałeś";
    }
    else if(result ==="loss")
    {
        gameSummary.losses++;
        document.querySelector('p.losses span').textContent = gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent ="przegrałeś";
    }
    else{
        gameSummary.draws++;
        document.querySelector('p.draws span').textContent = gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent ="remis";
    }

}
function endGame(){
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow ="";
    game.playerHand="";
}
//funkcja sterujaca 
function startGame(){
    if(!game.playerHand){
     return alert("wybierz dlon");
    }
    game.aiHand = aiChoice();

    const gameResult = checkResult(game.playerHand,game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand,game.aiHand,gameResult)
    endGame()
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)