const form = document.querySelector('form');
const nameField = form.querySelector('#name');
const phoneField = form.querySelector('#phone');
const emailField = form.querySelector('#email');
const txtField = form.querySelector('#txt');

const nameValidation = () => {
    const regExpName = /[^a-zA-Zа-яА-Я]+/u;
    if(regExpName.test(nameField.value)) {
        nameField.classList.add('errorClass');
        // nameField.setCustomValidity('ошибка');
        console.log(nameField.value + 'error');
    }
}

const phoneValidation = () => {
    const regExpPhone = /[+7(][0-9]{3}[)][0-9]{3}[-][0-9]{4}/;
    if(!regExpPhone.test(phoneField.value)) {
        phoneField.classList.add('errorClass');
        // phoneField.setCustomValidity('ошибка');
        console.log(phoneField.value + 'error');
    }
}

const removeValidation = () => {
    const errors = document.querySelectorAll('.errorClass');
    errors.forEach(el => el.classList.remove('errorClass'));
  }

const submitBtn = form.querySelector('input[type=submit]');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    removeValidation();
    nameValidation();
    phoneValidation();
});

