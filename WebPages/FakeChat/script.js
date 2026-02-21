const submitButton = document.getElementById("submit");
const chatBody = document.querySelector(".chat-body");
const prompt = document.getElementById("prompt");
submitButton.addEventListener('click',(ev) => {sendMessage("click",ev)});
prompt.addEventListener('keydown',(ev) => {sendMessage("keyPress",ev)});

chatBody.scrollTop = chatBody.scrollHeight;

function sendMessage(type,ev) {
    if (prompt.value=="clear") {
        const messageList = document.querySelectorAll(".message");
        for(i of messageList) {
            i.remove();
        }
        prompt.value="";
    }
    else if(prompt.value!="") {
        const userPrompt = prompt.value;
        if(type=="click" || type=="keyPress" && ev.key=='Enter'){
            const userMessage = document.createElement("div");
            userMessage.textContent = userPrompt;
            prompt.value = "";
            userMessage.classList.add("message","notSent","user");
            chatBody.appendChild(userMessage);

            chatBody.scrollTop = chatBody.scrollHeight;

            setTimeout(() => {
                userMessage.classList.remove("notSent");
                userMessage.classList.add("sent");
            },1);

            setTimeout(() => {
                const botMessage = document.createElement("div");
                // botMessage.textContent = "bot: "+userPrompt;

                const genericReplies = ["Hello","How are you","Bye"];
                botMessage.textContent = genericReplies[Math.floor(Math.random()*genericReplies.length)]
                prompt.value = "";
                botMessage.classList.add("message","notSent","bot");
                chatBody.appendChild(botMessage);

                chatBody.scrollTop = chatBody.scrollHeight;

                setTimeout(() => {
                    botMessage.classList.remove("notSent");
                    botMessage.classList.add("sent");
                },1);
            },150);
        }
    }
}