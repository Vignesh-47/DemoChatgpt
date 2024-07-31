
document.getElementById('send-button').addEventListener('click', sendMessage);
let c=0;
document.getElementById('user-input').addEventListener('click', function (e) {
    if(c==0)
    {
    const botResponse=getBotResponse("");
    appendMessage(botResponse, 'bot-message');
    }
    c=1;
});

document.getElementById('user-input').addEventListener('keypress', function (e) 
{
   
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() 
{
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        appendMessage(message, 'user-message');
        userInput.value = '';
        

        setTimeout(() => {
            const botResponse = getBotResponse(message);
            appendMessage(botResponse, 'bot-message');
        }, 1000);
    }
}

function appendMessage(text, className) 
{
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.innerText = text;

    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(userMessage) 
{  
    
        if(userMessage==="")
        {
            return "How Can i Help You ?"
        }
        else{
            return "Sorry Sir Data Not Found"
        }
}
