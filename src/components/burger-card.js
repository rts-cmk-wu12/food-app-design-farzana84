class BurgerCard {
  constructor(image, name, description) {
    this.image = require(`./images/${image}`);
    this.name = name;
    this.description = description;

  }

  createCard() {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = this.image;
    image.alt = this.name;
    card.appendChild(image);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = this.name;
    cardContent.appendChild(title);

    const description = document.createElement('div');
    description.className = 'card-description';
    description.textContent = this.description;
    cardContent.appendChild(description);

    card.appendChild(cardContent);


    return card;
  }
}

module.exports = BurgerCard;
