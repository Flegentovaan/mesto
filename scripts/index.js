const popupOpenEditBtn = document.querySelector('.profile__edit-button-opened');
const popupTypeInfo = document.querySelector('.popup__type_info');
const popupCloseEditBtn = popupTypeInfo.querySelector('.popup__close');
const popupInputName = popupTypeInfo.querySelector('.popup__input_name');
const popupSubmit = popupTypeInfo.querySelector('.popup__submit');
const popupForm = popupTypeInfo.querySelector('.popup__form');
const popupNameChange = document.querySelector('.profile__name');
const popupInputDescription = popupTypeInfo.querySelector('.popup__input_description');
const popupDescriptionChange = document.querySelector('.profile__description');

popupOpenEditBtn.addEventListener('click', () => {
  console.log('click');
  popupTypeInfo.classList.add('popup_opened');
});

popupCloseEditBtn.addEventListener('click', () => {
  popupTypeInfo.classList.remove('popup_opened');
});

popupForm.addEventListener('submit', (Event) => {
  Event.preventDefault();
  
  const name = popupInputName.value;
  popupNameChange.innerHTML = name;
})

popupForm.addEventListener('submit', (Event) => {
  Event.preventDefault();
  
  const description = popupInputDescription.value;
  popupDescriptionChange.innerHTML = description;
})
