const socket = io();

socket.on("message", function(msg){

    let chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `<p>${msg}</p>`;

    chatBox.scrollTop = chatBox.scrollHeight;
});

function sendMessage(){

    let input = document.getElementById("message");

    socket.send(input.value);

    input.value = "";
}