function getPizzaMenu() {
    const menuUl = document.createElement('ul');
    const pizzas = [
        'Tandoori Delight Pizza',
        'Masala Fusion Pizza',
        'Butter Chicken Bliss Pizza',
        'Paneer Tikka Feast Pizza',
        'Spicy Vindaloo Veggie Pizza',
        'Mumbai Street Pizza',
        'Curry Sensation Pizza',
        'Chaat Crunch Pizza',
        'Palak Paneer Perfection Pizza',
        'Korma Supreme Pizza'
    ];

    for (const pizza of pizzas) {
        const pizzaLi = document.createElement('li');
        pizzaLi.textContent = pizza;
        menuUl.appendChild(pizzaLi);
    }

    return menuUl;
}

function buildMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    menuDiv.appendChild(getPizzaMenu());

    return menuDiv;
}

export default buildMenuPage;