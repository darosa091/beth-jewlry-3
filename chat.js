

let chatMessages = document.getElementById('chat-messages');
let messageInput = document.getElementById('message-input');
let sendBtn = document.getElementById('send-btn');
let video = document.getElementById('video');
let snapBtn = document.getElementById('snap-btn');
let canvas = document.getElementById('canvas');

sendBtn.addEventListener('click', sendMessage);
snapBtn.addEventListener('click', takeSnapshot);

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(error => {
        console.error('Error accessing camera:', error);
    });

function sendMessage() {
    let message = messageInput.value.trim();
    if (message !== '') {
        displayMessage('You', message);
        messageInput.value = '';
    }
}

function takeSnapshot() {
    let context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    let imageDataURL = canvas.toDataURL('image/png');
    displayImage(imageDataURL);
}

function displayMessage(username, text) {
    let message = document.createElement('div');
    message.innerHTML = `
        <span>${username}:</span>
        <span>${text}</span>
    `;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

