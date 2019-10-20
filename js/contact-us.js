var contactShow = document.querySelector('.contacts__link');
var formContacts = document.querySelector('.form-contacts');
var btnSubmit = formContacts.querySelector('.form-contacts__submit');
var btnClose = formContacts.querySelector('.form-contacts__close')

var contactName = formContacts.querySelector('#form-name');
var contactEmail = formContacts.querySelector('#form-email');
var contactMessage = formContacts.querySelector('#form-message');

var isStorageSupport = true;
var storage = '';

/* Доступен ли localStorage */
try {
  storage = localStorage.getItem('contactName');
} catch (err) {
  isStorageSupport = false;
};

/* Открытие и закрытие формы,
сохранение данных в localStorage */
contactShow.addEventListener('click', function(evt) {
  evt.preventDefault();
  formContacts.classList.add('form-contacts--show');
  contactName.focus();

  contactName.value = localStorage.getItem('contactName');
  contactEmail.value = localStorage.getItem('contactEmail');
});

/* Загрузках данных из localStorage, если доступно
анимация ошибки */
formContacts.addEventListener('submit', function(evt) {
  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    evt.preventDefault();
    formContacts.classList.remove('form-contacts--error');
    formContacts.offsetWidth = formContacts.offsetWidth;
    formContacts.classList.add('form-contacts--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('contactName', contactName.value);
      localStorage.setItem('contactEmail', contactEmail.value);
    }
  }
});

/* Закрытие формы кнопкой */
btnClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  formContacts.classList.remove('form-contacts--error');
  formContacts.classList.remove('form-contacts--show');
});

/* Закрытие формы клавишой ESC */
window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (formContacts.classList.contains('form-contacts--show')) {
      evt.preventDefault();
      formContacts.classList.remove('form-contacts--error');
      formContacts.classList.remove('form-contacts--show');
    }
  }
});
