function askName() {
    let name = prompt("Isminizi Giriniz:");
    document.querySelector(".name").textContent = name;
}

const timer = document.querySelector(".date")

function setDate() {
    let date = new Date();

    let localTime = date.toLocaleTimeString();

    let day = date.getDay();
    day = day === 1 ? "Pazartesi" : day === 2 ? "Salı" : day === 3 ? "Çarşamba" : day === 4 ? "Perşembe" : day === 5 ? "Cuma" : day === 6 ? "Cumartesi" : "Pazar";
    timer.textContent = `${localTime} - ${day}`;
}

askName();
setInterval(setDate, 1000);