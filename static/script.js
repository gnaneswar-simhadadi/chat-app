const socket = io();

socket.on("message", function(msg){

    let chatBox = document.getElementById("chat-box");

    if (typeof msg === "object" && msg.type === "image") {
        chatBox.innerHTML += `<img src="${msg.data}" width="200"><br>`;
    } else {
        chatBox.innerHTML += `<p>${msg}</p>`;
    }

    chatBox.scrollTop = chatBox.scrollHeight;
});

function sendMessage(){

    let input = document.getElementById("message");

    socket.send(input.value);

    input.value = "";
}

function sendImage(){

    let fileInput = document.getElementById("imageInput");

    let file = fileInput.files[0];

    if (!file){
        alert("Select an image first");
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e){
        socket.send({
            type: "image",
            data: e.target.result
        });
    };

    reader.readAsDataURL(file);
}