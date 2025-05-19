function updateBackground(){
    const scrollTop = window.scrollY;
    const parallax = document.getElementById('parallax-background');
    parallax.style.backgroundPositionY = -(scrollTop * 0.075) + 'px';
}

window.addEventListener('scroll', function () {
    updateBackground();
});

window.addEventListener('DOMContentLoaded', function() {
    updateBackground();
})
