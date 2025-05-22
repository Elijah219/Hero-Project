// Fade in on page load //
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

//Navigate with fade-out tranistion //
function navigateWithTransition(url) {
    document.body.classList.remove ("fade-in");
    document.body.style.opacity = 0;
}

setTimeout(() => {
    window.location.href = url;
}, 600); // wait for transition
