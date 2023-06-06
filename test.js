let btn = document.createElement("button");

btn.textContent = "nandakumar button";

btn.id = "nanda";
btn.style.backgroundColor = "red"
btn.style.color="white";
btn.style.fontSize = "25px";


document.body.appendChild(btn);


btn.onclick = function () {
    alert("nandakumar button clicked")
}


let btn = document.querySelector('button#nanda');

arguments[0]


window.scrollBy()