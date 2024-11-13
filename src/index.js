require('./styles.css');
const BurgerCard = require('./components/burger-card');

// Create a heading
const heading = document.createElement('h1');
heading.textContent = 'Foodgo';
document.body.appendChild(heading);

const quotation = document.createElement('p');
quotation.textContent = 'Order your favourite food!';
document.body.appendChild(quotation);




// Create the container for the cards
const cardsContainer = document.createElement('div');
cardsContainer.id = 'cards-container';
document.body.appendChild(cardsContainer);

// Function to render burgers
const renderBurgers = (burgers) => {
  cardsContainer.innerHTML = '';
  burgers.forEach(burger => {
    cardsContainer.appendChild(burger.createCard());
  });
};

// Initial burger data
const burgers = [
  new BurgerCard('./images/burger1.png', 'Cheese Burger', "Wendy's Burger"),
  new BurgerCard('./images/burger2.png', 'Hamburger', 'veggie Burger'),
  new BurgerCard('./images/burger3.png', 'Hamburger', 'Fried chicken Burger'),
  new BurgerCard('./images/burger4.png', 'Hamburger', 'Chicken Burger')
];

// Render all burgers initially
renderBurgers(burgers);

