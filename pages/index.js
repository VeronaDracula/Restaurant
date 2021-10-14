import {FormValidator} from '../components/FormValidator.js'

//селекторы для валидации
export const dataClasses = {
    inputSelector: '.form__item',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_inactive',
    inputErrorClass: 'form__item_type_error',
    errorClass: 'form__input-error_active',
};

const formYourContacts = document.querySelector('.form');

const formYourContactsValidator = new FormValidator(dataClasses, formYourContacts);
formYourContactsValidator.enableValidation();