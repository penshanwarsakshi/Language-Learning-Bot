const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function botReply(input) {
  const text = input.toLowerCase();

  if (text.includes("english to hindi")) {
    return "Hello → नमस्ते\nThank you → धन्यवाद\nGood morning → सुप्रभात";
  }

  if (text.includes("english to french")) {
    return "Hello → Bonjour\nThank you → Merci\nGood morning → Bonjour";
  }

  if (text.includes("vocabulary")) {
    return "Today's vocabulary:\n• Happy → Feeling joy\n• Brave → Showing courage\n• Learn → Gain knowledge";
  }

  if (text.includes("grammar")) {
    return "Grammar tip: A sentence needs a subject + verb. Example: She runs.";
  }

  if (text.includes("spanish")) {
    return "Hello → Hola\nThank you → Gracias\nGood night → Buenas noches";
  }

  return "Try asking: English to Hindi, Vocabulary, Grammar tip, or Spanish basics 🌍";
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage(botReply(text), "bot");
  }, 500);
}

userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});
