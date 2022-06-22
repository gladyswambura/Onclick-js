document.querySelector("button").addEventListener("click", Name);

function Name() {
    let name = document.querySelector("input").value;
    document.querySelector("p").innerHTML = 'Hello ${name} welcome to this Bootcamp!';
}