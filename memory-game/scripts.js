const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    console.log('yuuup');
    console.log(this);
}

cards.forEach(card => card addEventListener("click", flipCard));