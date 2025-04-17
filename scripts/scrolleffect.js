window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const parallax = document.getElementById('parallax-background');
    parallax.style.transform = 'translateY(' + (-scrollTop * 0.3) + 'px)';
});