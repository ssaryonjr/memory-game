//Array of different cards
const cardArray = [
    {
        name: 'fries',
        img: 'src/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'src/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png'
    }
]

//Sorts the array of cards randomly.
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelectorAll('#result');


let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];


//Creating 12 cards on grid page.
function gameSetUp() {
    for (let i = 0; i < cardArray.length; i++){ //Displays 12 cards because of length of array. 
       const card = document.createElement('img'); 
       card.setAttribute('src', 'src/images/blank.png'); //blank card
       card.setAttribute('data-id', i); //each card has its own ID
       card.addEventListener('click', flipCard); //When a card is clicked trigger to flip over.
       grid.appendChild(card); //lets you put the card into the grid.
    }
}

gameSetUp();

function flipCard() {
    let cardId = this.getAttribute('data-id'); //Grabs the specific card that was clicked.
    cardsChosen.push(cardArray[cardId].name); //stores the card that was clicked into array cardsChosen[];
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img) //Flips the card to show image after card is clicked.
    if (cardsChosen.length === 2) { //If 2 cards are choosen
        setTimeout(checkForMatch, 300) //After 3 seconds
    }
    console.log(cardsChosenIds)
}

function checkForMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId === optionTwoId){
        alert('you have clicked the same image!'); //Same card was clicked twice.
        cards[optionOneId].setAttribute('src', 'src/images/blank.png'); //Sets card back to blank
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png');
    } else if (cardsChosen[0] === cardsChosen[1]){ //Turns two similar cards blank after they match.
        alert('You have found a match!')
        cards[optionOneId].setAttribute('src', 'src/images/white.png');
        cards[optionTwoId].setAttribute('src', 'src/images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard); //Stops allowing card to be clicked after it is matched.
        cards[optionTwoId].removeEventListener('click', flipCard); 
        cardsWon.push(cardsChosen); //Stores the cards that match into a different array.
    } else {
        cards[optionOneId].setAttribute('src', 'src/images/blank.png'); //flips cards back over if they aren't matched.
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png');
        alert('Sorry wrong match!')
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 6) {
        resultDisplay.textContent = 'Congrats you have won!'
    }

    console.log(cardsWon);
    console.log(cardsChosen)
}