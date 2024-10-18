document.getElementById('contactForm').addEventListener('submit', submitContactForm);

function submitContactForm(e) {
    e.preventDefault();

    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    fetch('https://script.google.com/macros/s/AKfycbxy8fF81B7wpg1dE8YKu_DBL19pKC5_ls05FHGDvE_AM9y_C2AylQVhkUrjhnI8Yd2I5A/exec', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message })
    })
    .then(response => {
        document.getElementById('formResponse').textContent = "Message sent successfully!";
    })
    .catch(error => {
        console.log(error);
        document.getElementById('formResponse').textContent = "There was an error. Please try again.";
    });

    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('input[name="phone"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
}
