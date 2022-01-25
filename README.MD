# Projekt zaliczeniowy JavaScript

## Kamil Data informatyka rok 2.

<br>
Tematem projektu zaliczeniowego jest gra napisana za pomocą html, css oraz JavaScript

Gra prezentuje się następująco:
<br>
![kamildata github io_projektJS_](https://user-images.githubusercontent.com/79749390/150981829-14d3ecee-ebce-49d6-909e-8dd47b950010.png)

Użykownik ma opcje wyboru "ręki" czyli kamień papier albo nożyce w momencie kliknięcia przycisku Let's play! komputer losuję wybór, wyniki są porównywane, statystyki uzupełniane oraz pokazywany jest komunikat kto wygrał daną runde.

Kod JavaScript gry:

```

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
```
