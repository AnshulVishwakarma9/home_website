fetch("footer.html")
    .then(r => r.text())
    .then(t => document.getElementById("footer").innerHTML = t);



function goBack() {
    window.history.back();
}

