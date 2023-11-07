const btnTheme = document.querySelectorAll('[data-theme]');
const btnPlayers = document.querySelectorAll('[data-players]');
const btnGrid = document.querySelectorAll('[data-grid]');
const btnStartGame = document.getElementById('start-game');
const initialPage = document.querySelector('.container__inicial-page');
const gamePage = document.querySelector('.container__game-page');
const body = document.querySelector('.inicial-page');
const containerCards = document.querySelector('.cards__container');
const containerFooter = document.querySelector('.footer__container');
const containerTimerAndMoves = document.querySelectorAll('.timer-and-moves__container');
const containerMultiPlayerFooter = document.querySelectorAll('.player__container');
const btnMenu = document.getElementById('btnMenu');
const containerModalMenu = document.getElementById('containerModalMenu');
const containerModalGameSolo = document.getElementById('containerModalGameSolo');
const containerModalMultiPlayer = document.getElementById('containerModalMultiPlayersGame');
const btnRestart = document.querySelectorAll('[data-button="restart"]');
const btnNewGame = document.querySelectorAll('[data-button="newGame"]');
const btnContinueGame = document.querySelector('[data-button="continueGame"]');
const time = document.getElementById('time');
const amountOfPlays = document.getElementById('amountOfPlays');
const playerChoices = {};
let movements = 0;
let whoseTurn = 'P1';
let pairFound = 0;
let chosenCards = [];
let chosenCardsIds = [];
let cardsWon = [];
let timerInterval;

///// Numbers /////
const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16,16, 17, 17, 18, 18];

///// Icons /////
const icons = [
    {
        name: 'anchor',
        image: 'assets/icons/anchor-solid.png'
    },
    {
        name: 'anchor',
        image: 'assets/icons/anchor-solid.png'
    },
    {
        name: 'bug',
        image: 'assets/icons/bug-solid.png'
    },
    {
        name: 'bug',
        image: 'assets/icons/bug-solid.png'
    },
    {
        name: 'car',
        image: 'assets/icons/car-solid.png'
    },
    {
        name: 'car',
        image: 'assets/icons/car-solid.png'
    },
    {
        name: 'flask',
        image: 'assets/icons/flask-solid.png'
    },
    {
        name: 'flask',
        image: 'assets/icons/flask-solid.png'
    },
    {
        name: 'futbol',
        image: 'assets/icons/futbol-solid.png'
    },
    {
        name: 'futbol',
        image: 'assets/icons/futbol-solid.png'
    },
    {
        name: 'hand-spock',
        image: 'assets/icons/hand-spock-solid.png'
    },
    {
        name: 'hand-spock',
        image: 'assets/icons/hand-spock-solid.png'
    },
    {
        name: 'lira-sign',
        image: 'assets/icons/lira-sign-solid.png'
    },
    {
        name: 'lira-sign',
        image: 'assets/icons/lira-sign-solid.png'
    },
    {
        name: 'moon',
        image: 'assets/icons/moon-solid.png'
    },
    {
        name: 'moon',
        image: 'assets/icons/moon-solid.png'
    },
    {
        name: 'snowflake',
        image: 'assets/icons/snowflake-solid.png'
    },
    {
        name: 'snowflake',
        image: 'assets/icons/snowflake-solid.png'
    },
    {
        name: 'sun',
        image: 'assets/icons/sun-solid.png'
    },
    {
        name: 'sun',
        image: 'assets/icons/sun-solid.png'
    },
    {
        name: 'fish',
        image: 'assets/icons/fish-solid.png'
    },
    {
        name: 'fish',
        image: 'assets/icons/fish-solid.png'
    },
    {
        name: 'gift',
        image: 'assets/icons/gift-solid.png'
    },
    {
        name: 'gift',
        image: 'assets/icons/gift-solid.png'
    },
    {
        name: 'headphones',
        image: 'assets/icons/headphones-solid.png'
    },
    {
        name: 'headphones',
        image: 'assets/icons/headphones-solid.png'
    },
    {
        name: 'heart',
        image: 'assets/icons/heart-solid.png'
    },
    {
        name: 'heart',
        image: 'assets/icons/heart-solid.png'
    },
    {
        name: 'plane',
        image: 'assets/icons/plane-solid.png'
    },
    {
        name: 'plane',
        image: 'assets/icons/plane-solid.png'
    },
    {
        name: 'smile',
        image: 'assets/icons/smile-solid.png'
    },
    {
        name: 'smile',
        image: 'assets/icons/smile-solid.png'
    },
    {
        name: 'truck',
        image: 'assets/icons/truck-solid.png'
    },
    {
        name: 'truck',
        image: 'assets/icons/truck-solid.png'
    },
    {
        name: 'umbrella',
        image: 'assets/icons/umbrella-solid.png'
    },
    {
        name: 'umbrella',
        image: 'assets/icons/umbrella-solid.png'
    }
]

chooseTypeOfGame();

function chooseTypeOfGame(){
    btnTheme.forEach(button => button.addEventListener('click', chooseTheme));
    btnPlayers.forEach(button => button.addEventListener('click', choosePlayers));
    btnGrid.forEach(button => button.addEventListener('click', chooseGrid));
}

function chooseTheme(e){
    if(e.target.dataset.theme === 'numbers'){
        playerChoices.theme = 'numbers';
        e.target.classList.add('active');
    } else if(e.target.dataset.theme === 'icons'){
        playerChoices.theme = 'icons';
        e.target.classList.add('active');
    }
    btnTheme.forEach(button => button.removeEventListener('click', chooseTheme));
    if(Object.keys(playerChoices).length === 3){
        btnStartGame.addEventListener('click', startGame);
    } else return;
}

function choosePlayers(e){
    if(e.target.dataset.players === '1'){
        playerChoices.players = '1';
        e.target.classList.add('active');
    } else if(e.target.dataset.players === '2'){
        playerChoices.players = '2';
        e.target.classList.add('active');
    } else if(e.target.dataset.players === '3'){
        playerChoices.players = '3';
        e.target.classList.add('active');
    } else if(e.target.dataset.players === '4'){
        playerChoices.players = '4';
        e.target.classList.add('active');
    }
    btnPlayers.forEach(button => button.removeEventListener('click', choosePlayers));
    if(Object.keys(playerChoices).length === 3){
        btnStartGame.addEventListener('click', startGame);
    } else return;
}

function chooseGrid(e){
    if(e.target.dataset.grid === '4x4'){
        playerChoices.grid = '4x4';
        e.target.classList.add('active');
    } else if(e.target.dataset.grid === '6x6'){
        playerChoices.grid = '6x6';
        e.target.classList.add('active');
    }
    btnGrid.forEach(button => button.removeEventListener('click', chooseGrid));
    if(Object.keys(playerChoices).length === 3){
        btnStartGame.addEventListener('click', startGame);
    } else return;
}

function startGame(){
    initialPage.style.display = 'none';
    gamePage.style.display = 'flex';
    body.className = 'game-page';

    /* NUMBERS OPTION */
    if(playerChoices.theme === 'numbers' && playerChoices.grid === '4x4' && playerChoices.players === '1'){
        createBoard4x4WithNumbers();
        timing();
        soloGame();
    } 
    if(playerChoices.theme === 'numbers' && playerChoices.grid === '4x4' && (playerChoices.players === '2' || playerChoices.players === '3' || playerChoices.players === '4')){
        createBoard4x4WithNumbers();
        multiplayers();
    } 
    if(playerChoices.theme === 'numbers' && playerChoices.grid === '6x6' && playerChoices.players === '1'){
        createBoard6x6WithNumbers();
        timing();
    } 
    if(playerChoices.theme === 'numbers' && playerChoices.grid === '6x6' && (playerChoices.players === '2' || playerChoices.players === '3' || playerChoices.players === '4')){
        createBoard6x6WithNumbers();
        multiplayers();
    } 

    /* ICONS OPTION */
    if(playerChoices.theme === 'icons' && playerChoices.grid === '4x4' && playerChoices.players === '1'){
        createBoard4x4WithIcons();
        timing();
        soloGame();
    } 
    if(playerChoices.theme === 'icons' && playerChoices.grid === '4x4' && (playerChoices.players === '2' || playerChoices.players === '3' || playerChoices.players === '4')){
        createBoard4x4WithIcons();
        multiplayers();
    } 
    if(playerChoices.theme === 'icons' && playerChoices.grid === '6x6' && playerChoices.players === '1'){
        createBoard6x6WithIcons();
        timing();
    } 
    if(playerChoices.theme === 'icons' && playerChoices.grid === '6x6' && (playerChoices.players === '2' || playerChoices.players === '3' || playerChoices.players === '4')){
        createBoard6x6WithIcons();
        multiplayers();
    } 
}

// NUMBERS BOARD //

function createBoard4x4WithNumbers(){
    const numbers4x4 = numbers.slice(0, 16);
    numbers4x4.sort(() => 0.5 - Math.random()); 
    for(let i = 0; i <= 15; i++){
        let newItem = document.createElement('div');
        newItem.className = 'card card4x4';
        newItem.innerHTML = `
            <span class="hidden">${numbers4x4[i]}</span>
        `;
        newItem.setAttribute('data-id', i);
        newItem.addEventListener('click', flipBoardNumbers);
        containerCards.appendChild(newItem);
    }
}

function createBoard6x6WithNumbers(){
    numbers.sort(() => 0.5 - Math.random()); 
    containerCards.style.gridTemplateColumns = 'repeat(6, 1fr)';
    containerCards.style.gridTemplateRows = 'repeat(6, 1fr)';
    containerCards.style.gap = '0.57rem';

    for(let i = 0; i <= 35; i++){
        let newItem = document.createElement('div');
        newItem.className = 'card card6x6';
        newItem.innerHTML = `
            <span class="hidden">${numbers[i]}</span>
        `;
        newItem.setAttribute('data-id', i);
        newItem.addEventListener('click', flipBoardNumbers);
        containerCards.appendChild(newItem);
    }
}

// ICONS BOARD //

function createBoard4x4WithIcons(){
    const icons4x4 = icons.slice(0, 16);
    icons4x4.sort(() => 0.5 - Math.random()); 

    for(let i = 0; i <= 15; i++){
        let newItem = document.createElement('div');
        newItem.className = 'card card4x4';
        newItem.innerHTML = `
            <img src="${icons4x4[i].image}" alt="${icons4x4[i].name}" class="icon4x4 hidden">
        `
        newItem.setAttribute('data-id', i);
        newItem.addEventListener('click', flipBoardIcons);
        containerCards.appendChild(newItem);
    }
}

function createBoard6x6WithIcons(){
    icons.sort(() => 0.5 - Math.random()); 

    containerCards.style.gridTemplateColumns = 'repeat(6, 1fr)';
    containerCards.style.gridTemplateRows = 'repeat(6, 1fr)';
    containerCards.style.gap = '0.57rem';

    for(let i = 0; i <= 35; i++){
        let newItem = document.createElement('div');
        newItem.className = 'card card6x6';
        newItem.innerHTML = `
            <img src="${icons[i].image}" alt="${icons[i].name}" class="icon6x6 hidden">
        `
        newItem.setAttribute('data-id', i);
        newItem.addEventListener('click', flipBoardIcons);
        containerCards.appendChild(newItem);
    }
}

function flipBoardNumbers(){
    const cardId = this.getAttribute('data-id');
    this.children[0].classList.remove('hidden');
    this.style.backgroundColor = 'var(--yellow)';
    chosenCards.push(this.children[0].textContent);
    chosenCardsIds.push(cardId);
    if(chosenCardsIds.length === 2){
        setTimeout(checkMatch, 500);
    }
}

function flipBoardIcons(){
    const cardId = this.getAttribute('data-id');
    this.children[0].classList.remove('hidden');
    this.style.backgroundColor = 'var(--yellow)';
    chosenCards.push(this.children[0].alt);
    chosenCardsIds.push(cardId);
    if(chosenCardsIds.length === 2){
        setTimeout(checkMatch, 500);
    }
}

/// SOLO GAME ///

function soloGame(){
    containerMultiPlayerFooter.forEach(element => element.style.display = 'none');
    containerTimerAndMoves.forEach(element => element.style.display = 'flex');
}

function timing(){
    time.innerHTML = '00:00';
    let seconds = 0;
    let minutes = 0;
    let leadingSeconds = 0;
    let leadingMinutes = 0;
    timerInterval = window.setInterval(startTimer, 1000);
    function startTimer(){
        seconds++;
        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
            if(minutes / 60 === 1){
                minutes = 0;
                seconds = 0;
                window.clearInterval(timerInterval);
            }
        }
    
        if(seconds < 10){
            leadingSeconds = "0" + seconds.toString();
        } else {
            leadingSeconds = seconds;
        }
    
        if(minutes < 10){
            leadingMinutes = "0" + minutes.toString();
        } else {
            leadingMinutes = minutes;
        }
    
        time.innerHTML = leadingMinutes + ":" + leadingSeconds;   
    }

    return timerInterval;
}

function updateResultsSoloGame(){
    movements += 1;
    amountOfPlays.innerHTML = movements;
}

function showResultsGameSolo(){
    containerModalGameSolo.style.display = 'flex';
    const finalTime = document.getElementById('finalTime');
    const finalMoves = document.getElementById('finalMoves');
    finalTime.innerHTML = time.innerHTML;
    finalMoves.innerHTML = movements;
}

/// MULTIPLAYERS ///

function multiplayers(){
    whoseTurn = 'P1';
    containerTimerAndMoves.forEach(element => element.style.display = 'none');
    for(let i = 1; i <= 4; i++){
        let newPlayer = document.createElement('DIV');
        newPlayer.classList.add('player__container');
        if(window.matchMedia('(min-width: 768px)').matches){
            newPlayer.innerHTML = `
                <p class="player">Player ${i}</p>
                <p class="result" id="${i}">0</p>        
            `
        } else {
            newPlayer.innerHTML = `
                <p class="player">P${i}</p>
                <p class="result" id="${i}">0</p>        
            `
        }
        containerFooter.appendChild(newPlayer);
    } 
    updateActivePlayer();
}

function updateResultsMultiplayer(){
    const resultP1 = document.getElementById('1');
    const resultP2 = document.getElementById('2');
    const resultP3 = document.getElementById('3');
    const resultP4 = document.getElementById('4');

    if(playerChoices.players === '2'){
        if(whoseTurn === 'P1'){ 
            resultP1.innerHTML = parseInt(resultP1.textContent) + pairFound;    
            whoseTurn = 'P2'; 
        } else if(whoseTurn === 'P2'){
            resultP2.innerHTML = parseInt(resultP2.textContent) + pairFound;  
            whoseTurn = 'P1'; 
        }
    }

    if(playerChoices.players === '3'){
        if(whoseTurn === 'P1'){ 
            resultP1.innerHTML = parseInt(resultP1.textContent) + pairFound;    
            whoseTurn = 'P2'; 
        } else if(whoseTurn === 'P2'){
            resultP2.innerHTML = parseInt(resultP2.textContent) + pairFound;  
            whoseTurn = 'P3'; 
        } else if(whoseTurn === 'P3'){
            resultP3.innerHTML = parseInt(resultP3.textContent) + pairFound;  
            whoseTurn = 'P1'; 
        }
    }

    if(playerChoices.players === '4'){
        if(whoseTurn === 'P1'){ 
            resultP1.innerHTML = parseInt(resultP1.textContent) + pairFound;    
            whoseTurn = 'P2'; 
        } else if(whoseTurn === 'P2'){
            resultP2.innerHTML = parseInt(resultP2.textContent) + pairFound;  
            whoseTurn = 'P3'; 
        } else if(whoseTurn === 'P3'){
            resultP3.innerHTML = parseInt(resultP3.textContent) + pairFound;  
            whoseTurn = 'P4'; 
        } else if(whoseTurn === 'P4'){
            resultP4.innerHTML = parseInt(resultP4.textContent) + pairFound;  
            whoseTurn = 'P1'; 
        }
    }
    updateActivePlayer();
    pairFound = 0;
}

function updateActivePlayer(){
    const allPlayers = document.querySelectorAll('.player__container');
    if(whoseTurn === 'P1'){
        allPlayers[0].classList.add('active');
        allPlayers[1].classList.remove('active');
        allPlayers[2].classList.remove('active');
        allPlayers[3].classList.remove('active');
    } else if(whoseTurn === 'P2'){
        allPlayers[0].classList.remove('active');
        allPlayers[1].classList.add('active');
        allPlayers[2].classList.remove('active');
        allPlayers[3].classList.remove('active');
    } else if(whoseTurn === 'P3'){
        allPlayers[0].classList.remove('active');
        allPlayers[1].classList.remove('active');
        allPlayers[2].classList.add('active');
        allPlayers[3].classList.remove('active');
    }else if(whoseTurn === 'P4'){
        allPlayers[0].classList.remove('active');
        allPlayers[1].classList.remove('active');
        allPlayers[2].classList.remove('active');
        allPlayers[3].classList.add('active');
    }
}

function showResultsMultiPlayersGame(){
    containerModalMultiPlayer.style.display = 'flex';
    const resultP1 = document.getElementById('1');
    const resultP2 = document.getElementById('2');
    const resultP3 = document.getElementById('3');
    const resultP4 = document.getElementById('4');

    let P1 = parseInt(resultP1.textContent);
    let P2 = parseInt(resultP2.textContent);
    let P3 = parseInt(resultP3.textContent);
    let P4 = parseInt(resultP4.textContent);

    const modalTitle = document.getElementById('resultTitle');
    const playerOneResult = document.getElementById('playerOne');
    const playerTwoResult = document.getElementById('playerTwo');
    const playerThreeResult = document.getElementById('playerThree');
    const playerFourResult = document.getElementById('playerFour');

    if(P1 === 1){
        playerOneResult.innerHTML = `
        <p>Jogador 1</p>
        <p>${P1} par</p>`;
    } else {
        playerOneResult.innerHTML = `
        <p>Jogador 1</p>
        <p>${P1} pares</p>`;
    }

    if(P2 === 1){
        playerTwoResult.innerHTML = `
        <p>Jogador 2</p>
        <p>${P2} par</p>`;
    } else {
        playerTwoResult.innerHTML = `
        <p>Jogador 2</p>
        <p>${P2} pares</p>`;
    }

    if(P3 === 1){
        playerThreeResult.innerHTML = `
        <p>Jogador 3</p>
        <p>${P3} par</p>`;
    } else {
        playerThreeResult.innerHTML = `
        <p>Jogador 3</p>
        <p>${P3} pares</p>
    `;
    }

    if(P4 === 1){
        playerFourResult.innerHTML = `
        <p>Jogador 4</p>
        <p>${P4} par</p>`;
    } else {
        playerFourResult.innerHTML = `
        <p>Jogador 4</p>
        <p>${P4} pares</p>`;
    }

    if(playerChoices.players === '2'){        
        if(P1 > P2){
            modalTitle.innerHTML = 'Jogador 1 ganhou!';
            playerOneResult.classList.add('winner');            
        } else if (P1 === P2){
            modalTitle.innerHTML = 'Empate!';
            playerOneResult.classList.add('winner');
            playerTwoResult.classList.add('winner');            
        } else {
            modalTitle.innerHTML = 'Jogador 2 ganhou!';
            playerTwoResult.classList.add('winner');
        }
    } else if (playerChoices.players === '3'){       
        if(P1 > P2 && P1 > P3){
            modalTitle.innerHTML = 'Jogador 1 ganhou!';
            playerOneResult.classList.add('winner');
        } else if(P2 > P1 && P2 > P3){
            modalTitle.innerHTML = 'Jogador 2 ganhou!';
            playerTwoResult.classList.add('winner');
        } else if(P3 > P2 && P3 > P1){
            modalTitle.innerHTML = 'Jogador 3 ganhou!';
            playerThreeResult.classList.add('winner');
        } else if(P1 === P2 && P1 > P3){
            modalTitle.innerHTML = 'Empate!';
            playerOneResult.classList.add('winner');
            playerTwoResult.classList.add('winner');
        } else if(P1 === P3 && P1 > P2){
            modalTitle.innerHTML = 'Empate!';
            playerOneResult.classList.add('winner');
            playerThreeResult.classList.add('winner');
        } else if(P2 === P3 && P2 > P1){
            modalTitle.innerHTML = 'Empate!';
            playerTwoResult.classList.add('winner');
            playerThreeResult.classList.add('winner');
        } else if(P1 === P2 && P1 === P3){
            modalTitle.innerHTML = 'Empate!';
            playerOneResult.classList.add('winner');
            playerTwoResult.classList.add('winner');
            playerThreeResult.classList.add('winner');
        }
    } else {        
        if(P1 > P2 && P1 > P3 && P1 > P4){
            modalTitle.innerHTML = 'Jogador 1 ganhou!';
            playerOneResult.classList.add('winner');
        } else if (P2 > P1 && P2 > P3 && P2 > P4){
            modalTitle.innerHTML = 'Jogador 2 ganhou!';
            playerTwoResult.classList.add('winner');
        } else if(P3 > P1 && P3 > P2 && P3 > P4){
            modalTitle.innerHTML = 'Jogador 3 ganhou!';
            playerThreeResult.classList.add('winner');
        } else if(P4 > P1 && P4 > P2 && P4 > P3){
            modalTitle.innerHTML = 'Jogador 4 ganhou!';
            playerFourResult.classList.add('winner');
        } else if(P1 === P2 && P1 > P3 && P1 > P4){
            modalTitle.innerHTML = 'Empate!';
            playerOneResult.classList.add('winner');
            playerTwoResult.classList.add('winner');
        } else if (P1 === P3 && P1 > P2 && P1 > P4){
            modalTitle.innerHTML = 'Empate!';
            playerOneResult.classList.add('winner');
            playerThreeResult.classList.add('winner');
        } else if(P1 === P4 && P1 > P2 && P1 > P3){
            modalTitle.innerHTML = 'Empate!';
            playerOneResult.classList.add('winner');
            playerFourResult.classList.add('winner');
        } else if(P2 === P3 && P2 > P1 && P2 > P4){
            modalTitle.innerHTML = 'Empate!';
            playerTwoResult.classList.add('winner');
            playerThreeResult.classList.add('winner');
        } else if(P2 === P4 && P2 > P1 && P2 > P3){
            modalTitle.innerHTML = 'Empate!';
            playerTwoResult.classList.add('winner');
            playerFourResult.classList.add('winner');
        } else if(P3 === P4 && P3 > P1 && P3 > P2){
            modalTitle.innerHTML = 'Empate!';
            playerThreeResult.classList.add('winner');
            playerFourResult.classList.add('winner');
        }
    }

}

/// CHECK FOR PAIRS ///

function checkMatch(){
    const allCards = document.querySelectorAll('.card');
    const optionOneId = chosenCardsIds[0];
    const optionTwoId = chosenCardsIds[1];
    
    if(optionOneId === optionTwoId){
        allCards[optionOneId].children[0].classList.add('hidden');
        allCards[optionTwoId].children[0].classList.add('hidden');  
        allCards[optionOneId].style.backgroundColor = 'var(--dark)';
        allCards[optionTwoId].style.backgroundColor = 'var(--dark)';      
    } else if(chosenCards[0] === chosenCards[1]){
        allCards[optionOneId].style.backgroundColor = 'var(--light-gray)';
        allCards[optionTwoId].style.backgroundColor = 'var(--light-gray)';
        allCards[optionOneId].removeEventListener('click', flipBoardNumbers);
        allCards[optionTwoId].removeEventListener('click', flipBoardNumbers);
        allCards[optionOneId].removeEventListener('click', flipBoardIcons);
        allCards[optionTwoId].removeEventListener('click', flipBoardIcons);
        pairFound = 1;
        cardsWon.push(chosenCards);
    } else {
        allCards[optionOneId].children[0].classList.add('hidden');
        allCards[optionTwoId].children[0].classList.add('hidden');
        allCards[optionOneId].style.backgroundColor = 'var(--dark)';
        allCards[optionTwoId].style.backgroundColor = 'var(--dark)';  
    }

    if(playerChoices.players === '1'){
        updateResultsSoloGame();
    } else {
        updateResultsMultiplayer();
    }

    if(playerChoices.grid === '4x4'){
        if(cardsWon.length === 8){
            if(playerChoices.players === '1'){
                window.clearInterval(timerInterval);
                showResultsGameSolo();
            } else {
                showResultsMultiPlayersGame();
            }
        }
    } else if (playerChoices.grid === '6x6'){
        if(cardsWon.length === 18){
            if(playerChoices.players === '1'){
                showResultsGameSolo();
            } else {
                showResultsMultiPlayersGame();
            }
        }
    }

    chosenCards = [];
    chosenCardsIds = [];

}

// MENU FOR TABLETS AND DESKTOPS//

function menuForTabletsAndDesktops(){
    const header = document.querySelector('.header__game-page');
    if(window.matchMedia('(min-width: 768px)').matches){
        btnMenu.remove();
        header.innerHTML += `
            <div class="header__container-buttons">
                <button class="btn-restart" onclick="restartGame()">Reiniciar</button>
                <button class="btn-newGame" onclick="newGame()">Novo Jogo</button>
            </div>
        ` 
    }   
}
menuForTabletsAndDesktops();


// MODAL AND BUTTONS //

btnMenu.addEventListener('click', () => containerModalMenu.style.display = 'flex');

window.addEventListener('click', (e) => {
    if(e.target === containerModalMenu || e.target === containerModalGameSolo){
        containerModalMenu.style.display = 'none';
        containerModalGameSolo.style.display = 'none';
        containerModalMultiPlayer.style.display = 'none';
    }
})
window.addEventListener('keyup', (e) => {
    if(e.code === 'Escape'){
        containerModalMenu.style.display = 'none';
        containerModalGameSolo.style.display = 'none';
        containerModalMultiPlayer.style.display = 'none';
    }
})

btnRestart.forEach(button => button.addEventListener('click', restartGame));

function restartGame(){
    initialPage.style.display = 'block';
    gamePage.style.display = 'none';
    body.className = 'inicial-page';
    containerModalMenu.style.display = 'none';
    containerModalGameSolo.style.display = 'none';
    containerModalMultiPlayer.style.display = 'none';
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(element => element.remove());
    const multiPlayersResults = document.querySelectorAll('.player__container');
    multiPlayersResults.forEach(element => element.remove());
    movements = 0;
    amountOfPlays.innerHTML = movements;
    window.clearInterval(timerInterval); 
    cardsWon = [];
    for(let key in playerChoices){
        delete playerChoices.key;
    }
    chooseTypeOfGame();
}

btnNewGame.forEach(button => button.addEventListener('click', newGame));

function newGame(){
    containerModalMenu.style.display = 'none';
    cardsWon = [];  
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(element => element.remove());
    if(playerChoices.players === '1'){
        containerModalGameSolo.style.display = 'none';
        movements = 0;
        amountOfPlays.innerHTML = movements;
        window.clearInterval(timerInterval); 
        timing();
        soloGame();
        if(playerChoices.theme === 'numbers' && playerChoices.grid === '4x4'){
            createBoard4x4WithNumbers();
        }
        if(playerChoices.theme === 'icons' && playerChoices.grid === '4x4'){
            createBoard4x4WithIcons();
        }
        if(playerChoices.theme === 'numbers' && playerChoices.grid === '6x6'){
            createBoard6x6WithNumbers();
        }
        if(playerChoices.theme === 'icons' && playerChoices.grid === '6x6'){
            createBoard6x6WithIcons();
        }
    } else {
        containerModalMultiPlayer.style.display = 'none';
        const multiPlayersResults = document.querySelectorAll('.player__container');
        multiPlayersResults.forEach(element => element.remove());
        multiplayers();
        if(playerChoices.theme === 'numbers' && playerChoices.grid === '4x4'){
            createBoard4x4WithNumbers();
        }
        if(playerChoices.theme === 'icons' && playerChoices.grid === '4x4'){
            createBoard4x4WithIcons();
        }
        if(playerChoices.theme === 'numbers' && playerChoices.grid === '6x6'){
            createBoard6x6WithNumbers();
        }
        if(playerChoices.theme === 'icons' && playerChoices.grid === '6x6'){
            createBoard6x6WithIcons();
        }
    }
}

btnContinueGame.addEventListener('click', () => containerModalMenu.style.display = 'none');

