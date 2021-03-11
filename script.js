let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

resetButton.addEventListener('click', () => {
    let name = document.getElementById('name');
    let email = document.querySelector('#email');
    let message = document.getElementById('message');

    name.value = '';
    email = '';
    message = '';
});


sendButton.addEventListener('click', (event) => {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    name = name.value;
    localStorage.setItem('name', name);
    window.alert(name);

    email = email.value
    localStorage.setItem('email', email);
    window.alert(email);

    message = message.value;
    localStorage.setItem('message', message);
    window.alert(message);

});
