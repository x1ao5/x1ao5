// script.js
document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector('.marquee');
    const clone = marquee.cloneNode(true);
    marquee.parentElement.appendChild(clone);
});
