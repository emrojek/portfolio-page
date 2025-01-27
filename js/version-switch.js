document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.switch-btn');
    const webVersion = document.querySelector('.main-container:not(.print-version)');
    const printVersion = document.querySelector('.main-container.print-version');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (button.dataset.version === 'web') {
                webVersion.style.display = 'flex';
                printVersion.style.display = 'none';
            } else {
                webVersion.style.display = 'none';
                printVersion.style.display = 'block';
            }
        });
    });

    const generatePDFBtn = document.querySelector('.generate-pdf-btn');
    if (generatePDFBtn) {
        generatePDFBtn.addEventListener('click', () => {

            generatePDFBtn.style.display = 'none';
            
            window.print();
            
            setTimeout(() => {
                generatePDFBtn.style.display = 'block';
            }, 1000);
        });
    }
});