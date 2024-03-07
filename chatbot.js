function sendMessage() {
    const userInput = $('#user-input').val();
    const timestamp = new Date().toLocaleString();

    displayMessage('You', userInput, timestamp);
    const jamieResponse = getJamieResponse(userInput);
    displayMessage('Jamie', jamieResponse, timestamp);
    $('#user-input').val('');

    document.getElementById('sendButton').disabled = true;
}

function displayMessage(name, content, timestamp) {
    const message = `<div id="chat-box" class="container-content d-flex flex-column p-3">
                        <span class="fw-semibold ${name === 'You' ? 'text-end' : ''}">${name}</span>
                        <span class="content p-2 ps-3 pe-3 ${name === 'You' ? 'text-end' : ''}">${content}</span>
                        <small class="text-black-50 fw-semibold ${name === 'You' ? 'text-end' : ''}">${timestamp}</small>
                     </div>`;

    $('#chat-box').append(message);
    $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
}

function getJamieResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.endsWith("jamie")) {
        return "Can I help you?";
    } else if (["what", "how", "why", "when", "which", "may", "could", "can", "?"].some(keyword => userInput.includes(keyword))) {
        return userInput.includes("!") ? "Please give me some time to resolve the issue." : "Yes";
    } else if (userInput.includes("!")) {
        return "Please remain calm";
    } else {
        return "Sorry, I don't understand";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('user-input').addEventListener('input', function () {
        document.getElementById('sendButton').disabled = !this.value.trim();        
    });
});

const timestamp = new Date().toLocaleString();
document.getElementById('timestamp').innerHTML = `${timestamp}`