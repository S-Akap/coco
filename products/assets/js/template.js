const loader = document.querySelector(".loader");
window.setTimeout(function () {
    loader.classList.toggle('loaded');
}, 2 * 1000);