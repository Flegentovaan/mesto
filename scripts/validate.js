// валид
function setInputValidState(config, input, errorElement) {
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
}

// невалид
function setInputInvalidState(config, input, errorElement) {
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
}

// функция, которая проверяет валидность инпута
function checkInputValidity(config, input) {
  const errorElement = popupForm.querySelector(`#error-${input.id}`);

  if (input.checkValidity()) {
    setInputValidState(config, input, errorElement);

  } else {
    setInputInvalidState(config, input, errorElement);
  }
}

//  невалидная кнопка
function disableButton({ inactiveButtonClass }, button) {
  button.setAttribute('disabled', '');
  button.classList.add(inactiveButtonClass);
}
// валидная кнопка
function enableButton({ inactiveButtonClass }, button) {
  button.removeAttribute('disabled');
  button.classList.remove(inactiveButtonClass);
}

function toggleButtonValidity({ submitButtonSelector, ...rest }, popupForm) {
  const submitButton = popupForm.querySelector(submitButtonSelector);

  if (popupForm.checkValidity()) {
    enableButton(rest, submitButton);
  } else {
    disableButton(rest, submitButton);
  }
}

function setSubmitListener(config, popupForm) {
  popupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    popupForm.reset();

    toggleButtonValidity(config, popupForm);
  });
}

// запуск валидации
function enableValidation({ formSelector, inputSelector, ...rest}) {
  const popupForm = document.querySelector(formSelector);
  
  setSubmitListener(rest, popupForm);
  toggleButtonValidity(rest, popupForm);

  const popupInputs = popupForm.querySelectorAll(inputSelector);
  const popupInputsArray = Array.from(popupInputs);

  // обработчик событий данных в инпуте
  popupInputsArray.forEach(function (input) {
    input.addEventListener('input', () => {
      checkInputValidity(rest, input);
      toggleButtonValidity(rest, popupForm);
    });
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_invalid',
  errorClass: 'popup__error-message_visible'
});