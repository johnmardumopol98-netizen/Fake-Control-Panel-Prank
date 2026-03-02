function shake() {
    document.body.classList.toggle("shake");
}

function flip() {
    document.body.classList.toggle("flip");
}

function darkMode() {
    document.body.classList.toggle("dark");
}

function popupSpam() {
    for (let i = 0; i < 5; i++) {
        alert("⚠ SYSTEM ERROR DETECTED ⚠");
    }
}

function fakeHack() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    overlay.innerHTML = "💀 SYSTEM HACKED 💀";

    setTimeout(() => {
        overlay.innerHTML = "😂 PRANKED!";
    }, 3000);
}

function resetAll() {
    document.body.className = "";
    document.getElementById("overlay").style.display = "none";
}
