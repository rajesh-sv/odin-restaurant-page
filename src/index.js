import buildHomePage from './home.js';
import buildMenuPage from './menu.js';
import buildContactPage from './contact.js';

function PageHandler() {
    const contentDiv = document.querySelector('.content');
    const pageButtons = Array.from(document.querySelectorAll('button'));

    function WindowOnLoad() {
        pageButtons.forEach((pageButton) => {
            pageButton.classList.add('button');
            pageButton.addEventListener('click', (event) => swapPage(event));
        });

        contentDiv.appendChild(buildHomePage());
    }

    function swapPage(event) {
        const buttonValue = event.target.value;
        if (buttonValue === 'home') {
            contentDiv.textContent = '';
            contentDiv.appendChild(buildHomePage());
        } else if (buttonValue === 'menu') {
            contentDiv.textContent = '';
            contentDiv.appendChild(buildMenuPage());
        } else {
            contentDiv.textContent = '';
            contentDiv.appendChild(buildContactPage());
        }
    }

    WindowOnLoad();
}

PageHandler();