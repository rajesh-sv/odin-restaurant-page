import pizzeriaImage from './pizzeria.jpg';

function getPizzeriaImage() {
    const pizzeriaImg = document.createElement('img');
    
    pizzeriaImg.src = pizzeriaImage;
    pizzeriaImg.alt = 'Delicious mouth-watering pizza being take out of the oven!';

    return pizzeriaImg;
}

function getHeroText() {
    const heroTextH1 = document.createElement('h1');
    
    heroTextH1.textContent = 'Indulge in Authentic Indian Flavor at Vansjalia Pizzeria';

    return heroTextH1;
}

function getHeroSubtext() {
    const heroSubtextP = document.createElement('p');
    
    heroSubtextP.textContent = 'Experience the Art of Handcrafted Pizzas Made with Love (cheese), Indian Spices (cheese) and Tradition (cheese)';

    return heroSubtextP;
}

function buildHomePage() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    
    homeDiv.appendChild(getPizzeriaImage());
    homeDiv.appendChild(getHeroText());
    homeDiv.appendChild(getHeroSubtext());

    return homeDiv;
}

export default buildHomePage;