document.querySelector("#btn").addEventListener("click", welcomemessage);

function welcomemessage() {
    let entry = document.querySelector("#input").value
    let generatedElement = document.createElement("p");
    generatedElement.textContent = `hello ${entry} welcome to the bootcamp`
    document.querySelector('#demo').appendChild(generatedElement);
}