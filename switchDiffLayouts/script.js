const styleSwitcher = document.getElementById('style-switcher');
const buttons = styleSwitcher.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const layout = this.dataset.style;
        document.body.classList.remove('layout1', 'layout2');
        document.body.classList.add(layout);
    });
});
