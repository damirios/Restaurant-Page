import Stew from '../images/menu/vegStew.jpg';
import Pumpkin from '../images/menu/pumpkin.jpg';
import Pelmeni from '../images/menu/pelmeni.jpg';
import Kartoshka from '../images/menu/kartoshka.jpg';

function createMenuPage() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');

    const flexContainer = document.createElement('div');
    flexContainer.classList.add('flex-container');
    flexContainer.id = 'menu';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Menu';

    flexContainer.appendChild(title);
    container.appendChild(flexContainer);
    content.appendChild(container);

    let dishes = [];

    function createDishCard() {
        const dishCard = document.createElement('div');
        dishCard.classList.add('dish-card');

        const title = document.createElement('p');
        title.classList.add('dish-title');
        
        const description = document.createElement('p');
        description.classList.add('dish-description');

        const price = document.createElement('p');
        price.classList.add('dish-price');

        const info = document.createElement('div');
        info.classList.add('dish-info');
        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(price);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('dish-image');
        const image = document.createElement('img');
        imageContainer.appendChild(image);

        dishCard.appendChild(info);
        dishCard.appendChild(imageContainer);

        const currentCard = {dishCard, title, description, price, image};
        return currentCard;
    };

    function addDishToDishesList(name, description, price, image) {
        let dish = {
            name,
            description,
            price,
            image,
        };
        dishes.push(dish);
    };

    function fillDishList() {
        // first dish
        let currentName = "vegetable stew";
        let currentDescription = "Это блюдо из тушеных овощей, которое может быть приготовлено как с добавлением соуса или же без него."
        let currentPrice = "3$";
        let currentImage = Stew;
        addDishToDishesList(currentName, currentDescription, currentPrice, currentImage);

        // second dish
        currentName = "pelmeni";
        currentDescription = "Традиционное блюдо русского, удмуртского, коми и ряда финно-угорских народов. \
        Традиционно изготавливаются в виде термически обработанных изделий из пресного теста с начинкой из рубленого мяса или рыбы, \
        ведущее своё происхождение с Урала и Сибири."
        currentPrice = "5$";
        currentImage = Pelmeni;
        addDishToDishesList(currentName, currentDescription, currentPrice, currentImage);
        
        // third dish
        currentName = "pumpkin soup";
        currentDescription = "суп, приготовленный из тыквы в качестве основного ингредиента. \
        Для приготовления используется тыква обыкновенная или тыква мускатная. \
        Суп может быть сладким или пикантным. Наиболее распространённая консистенция — пюреобразная или крем-суп."
        currentPrice = "4$";
        currentImage = Pumpkin;
        addDishToDishesList(currentName, currentDescription, currentPrice, currentImage);

        // fourth dish
        currentName = "пирожное картошка";
        currentDescription = "пирожное из крошек бисквита, перемешанных с масляным кремом и коньяком или ромом. \
        Снаружи отделывается помадкой или обсыпкой с содержанием какао-порошка, и украшается масляным кремом. \
        Форма изделия клубневидная или любая другая."
        currentPrice = "2$";
        currentImage = Kartoshka;
        addDishToDishesList(currentName, currentDescription, currentPrice, currentImage);
    };

    function fillCurrentCard(currentDish) {
        const currentCard = createDishCard();
        currentCard.title.textContent = currentDish.name;
        currentCard.description.textContent = currentDish.description;
        currentCard.price.textContent = currentDish.price;
        currentCard.image.src = currentDish.image;
        return currentCard.dishCard;
    };

    function showDishListInBrowser() {
        if (dishes.length > 0) {
            for (let i = 0; i < dishes.length; i++) {
                const currentCard = fillCurrentCard(dishes[i]);
                flexContainer.appendChild(currentCard);
            }
        }
    };

    fillDishList();
    showDishListInBrowser();
}

export {createMenuPage};