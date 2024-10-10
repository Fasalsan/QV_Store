var modal = document.getElementById("myModal")
var btn = document.getElementById("myButton")
var span = document.getElementsByClassName('close')[0]

btn.onclick = function () {
    modal.style.display = "block"
}

span.onclick = function (e) {
    modal.style.display = "none"
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }

}