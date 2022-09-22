import './style.css';
import {createHomePage} from './homepage.js';
import {createMenuPage} from './menu.js';
import {createContactsPage} from './contacts.js';

createHomePage();

const buttons = document.querySelectorAll('.menu__list li');
const homeButton = buttons[0];
const menuButton = buttons[1];
const contactsButton = buttons[2];

buttons.forEach(button => addEventListener('click', loadChosenPage));

function clearContentDiv() {
    const content = document.querySelector('#content');
    content.removeChild(content.lastElementChild);
};

function getChosenPage(pressedButton) {
    if (pressedButton == homeButton) {
        const content = document.querySelector('#content');

        if (!content.querySelector('#home')) {
            return createHomePage;
        } else {
            return null;
        }
    } else if (pressedButton == menuButton) {
        if (!content.querySelector('#menu')) {
            return createMenuPage;
        } else {
            return null;
        }
    } else if (pressedButton == contactsButton) {
        if (!content.querySelector('#contacts')) {
            return createContactsPage;
        } else {
            return null;
        }
    }
};

function loadChosenPage(e) {
    const pressedButton = e.target;
    const showChosenPage = getChosenPage(pressedButton);

    if (showChosenPage) {
        clearContentDiv();
        showChosenPage();
    }
}
