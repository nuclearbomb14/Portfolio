document.addEventListener('DOMContentLoaded', function () {
    const loadCSS = href => {
        return new Promise(resolve => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = resolve;
            document.head.appendChild(link);
        });
    };

    Promise.all([
        loadCSS('../style/header.css'),
        loadCSS('../style/footer.css')
    ]).then(() => {
        return fetch('header.html');
    }).then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
    });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});
