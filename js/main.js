document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#input-form');
    const h1 = document.querySelector('#main-heading');
    const savedText = localStorage.getItem('savedText');
    
    if (savedText) {
        h1.textContent = savedText;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const input = form.querySelector('input[type="text"]');
        if (!input.value) {
            return;
        }
        h1.textContent = input.value;

        localStorage.setItem('savedText', input.value);

        input.value = '';
        input.blur();
    });
});