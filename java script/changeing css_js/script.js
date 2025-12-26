let div = document.querySelector(".rectangle")

function changeToCircle() {
    div.style.borderRadius = "50%";
}
function hide() {
    div.style.display = "none";
}
function show() {
    div.style.display = "block";
}

div.onmouseenter = function() {
    div.style.background = "red";
}
div.onmouseout = function() {
    div.style.background = "none";
}
function changeToRectangle() {
    div.style.borderRadius = "0%"};