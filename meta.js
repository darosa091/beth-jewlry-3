
let sendBtn = document.getElementById('send-btn');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();

    if (name !== '' && email !== '' && message !== '') {
        let mailtoLink = `mailto:janetpearls09@gmail.com?subject=Customer Care Message&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        window.location.href = mailtoLink;
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}

