function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    let timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").innerText = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Run clock immediately on page load
updateClock();
