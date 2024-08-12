const weddingDate = new Date('August 23, 2024 18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + " <span>kun</span>";
    document.getElementById('hours').innerHTML = hours + " <span>saat</span>";
    document.getElementById('minutes').innerHTML = minutes + " <span>minutlar</span>";
    document.getElementById('seconds').innerHTML = seconds + " <span>sekundlar</span>";

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "To'y baslandi!";
    }
}

const interval = setInterval(updateCountdown, 1000);
