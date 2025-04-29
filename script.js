
function sendMessage() {
    const input = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
    const userMessage = document.createElement("div");
    userMessage.className = "message";
    userMessage.textContent = "🧑‍🎓 You: " + input.value;
    chatbox.appendChild(userMessage);

    fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input.value })
    })
    .then(response => response.json())
    .then(data => {
        const aiMessage = document.createElement("div");
        aiMessage.className = "message";
        aiMessage.textContent = "🤖 AI: " + data.response;
        chatbox.appendChild(aiMessage);

        const utterance = new SpeechSynthesisUtterance(data.response);
        speechSynthesis.speak(utterance);
    });

    input.value = "";
}
