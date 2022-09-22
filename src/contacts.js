import Morgan from '../images/contacts/morgan.jpg';
import Morganessa from '../images/contacts/morganessa.jpg';

function createContactsPage() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');

    const flexContainer = document.createElement('div');
    flexContainer.classList.add('flex-container');
    flexContainer.id = 'contacts';

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Contacts';

    flexContainer.appendChild(title);
    container.appendChild(flexContainer);
    content.appendChild(container);
    
    let contacts = [];

    function createContactCard() {
        const contactCard = document.createElement('div');
        contactCard.classList.add('contact-card');

        const name = document.createElement('p');
        name.classList.add('contact-name');

        const post = document.createElement('p');
        post.classList.add('contact-post');
        
        const phone = document.createElement('p');
        phone.classList.add('contact-phone');

        const email = document.createElement('p');
        email.classList.add('contact-email');

        const info = document.createElement('div');
        info.classList.add('contact-info');
        info.appendChild(name);
        info.appendChild(post);
        info.appendChild(phone);
        info.appendChild(email);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('contact-image');
        const image = document.createElement('img');
        imageContainer.appendChild(image);

        contactCard.appendChild(info);
        contactCard.appendChild(imageContainer);

        const currentCard = {contactCard, name, post, phone, email, image};
        return currentCard;
    };

    function addContactToContactsList(name, post, phone, email, image) {
        let contact = {
            name,
            post,
            phone,
            email,
            image,
        };
        contacts.push(contact);
    };

    function fillContactsList() {
        let name = 'damirios';
        let post = 'web site creator';
        let phone = '"some nice phone number"';
        let email = 'absolutelyRealEmail@NotAFake.com';
        let image = Morgan;
        addContactToContactsList(name, post, phone, email, image);

        name = 'irina';
        post = 'designer';
        phone = '"another nice phone number"';
        email = 'absolutelyRealEmailToo@NotAFake.com';
        image = Morganessa;
        addContactToContactsList(name, post, phone, email, image);
    };

    function fillCurrentCard(currentContact) {
        const contactCard = createContactCard();
        contactCard.name.textContent = currentContact.name;
        contactCard.post.textContent = currentContact.post;
        contactCard.phone.textContent = currentContact.phone;
        contactCard.email.textContent = currentContact.email;
        contactCard.image.src = currentContact.image;
        return contactCard.contactCard;
    };

    function showContactsInBrowser() {
        if (contacts.length > 0) {
            for (let i = 0; i < contacts.length; i++) {
                const contact = fillCurrentCard(contacts[i]);
                flexContainer.appendChild(contact);
            }
        }
    };

    fillContactsList();
    showContactsInBrowser();
}

export {createContactsPage};