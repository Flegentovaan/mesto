const popupOpenEditBtn = document.querySelector('.profile__edit-button');
const popupTypeInfo = document.querySelector('.popup');
const popupCloseEditBtn = popupTypeInfo.querySelector('.popup__close');
const popupInputName = popupTypeInfo.querySelector('.popup_name');

const popupForm = popupTypeInfo.querySelector('.popup__form');
const popupNameChange = document.querySelector('.profile__name');
const popupInputDescription = popupTypeInfo.querySelector('.popup_description');
const popupDescriptionChange = document.querySelector('.profile__description');

/*открыть попап*/
function popupOpened() {
  popupTypeInfo.classList.add('popup_opened');
}

/*закрыть попап*/
function popupClose() {
  popupTypeInfo.classList.remove('popup_opened');
}

popupOpenEditBtn.addEventListener('click', () => {
  popupOpened();
  popupInputName.value = popupNameChange.textContent;
  popupInputDescription.value = popupDescriptionChange.textContent;
});

popupCloseEditBtn.addEventListener('click', () => {
  popupClose();
});

popupForm.addEventListener('submit', (Event) => {
  Event.preventDefault();
  popupNameChange.textContent = popupInputName.value;
  popupDescriptionChange.textContent =  popupInputDescription.value;
  popupClose();
});


