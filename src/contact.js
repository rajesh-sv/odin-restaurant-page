function getContactText() {
    const contactTextH1 = document.createElement('h1');
    
    contactTextH1.textContent = 'Come on, pay us a visit!';

    return contactTextH1;
}

function getPhoneNumber() {
    const phoneP = document.createElement('p');

    phoneP.textContent = 'Phone: +91 9887334325';

    return phoneP;
}

function getEmail() {
    const emailP = document.createElement('p');

    emailP.textContent = 'Email: pizzeria@vansjalia.com';

    return emailP;
}

function getAddress() {
    const addressP = document.createElement('p');

    addressP.textContent = 'Address: Vidhana Soudha, Bangalore';

    return addressP;
}

function buildContactPage() {
    const contentDiv = document.querySelector('.content');

    contentDiv.appendChild(getContactText());
    contentDiv.appendChild(getPhoneNumber());
    contentDiv.appendChild(getEmail());
    contentDiv.appendChild(getAddress());

    return contentDiv;
}

export default buildContactPage;