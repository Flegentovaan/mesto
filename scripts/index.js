const popupOpenEditBtn = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const popupCloseEditBtn = popupProfile.querySelector('.popup__close');
const popupInputName = popupProfile.querySelector('.popup__input_type_name');
const popupFormProfile = popupProfile.querySelector('.popup__form_edit_profile');
const popupNameChange = document.querySelector('.profile__name');
const popupInputDescription = popupProfile.querySelector('.popup__input_type_description');
const popupDescriptionChange = document.querySelector('.profile__description');
/*открыть попап*/
function popupOpened(popup) {
  popup.classList.add('popup_opened');
}
/*закрыть попап*/
function popupClose(popup) {
  popup.classList.remove('popup_opened');
}
// обработчик событий для откр попапа профиль
popupOpenEditBtn.addEventListener('click', () => {
  popupOpened(popupProfile);
  popupInputName.value = popupNameChange.textContent;
  popupInputDescription.value = popupDescriptionChange.textContent;
});

// обработчик событий для закр попапа профиль
popupCloseEditBtn.addEventListener('click', () => {
  popupClose(popupProfile);
});

// закрытие попапа профиль нажатием на общую зону
popupProfile.addEventListener('click', (e) => {
  if(e.target === popupProfile) {
    popupClose(popupProfile);
  }
});

// обработчик событий для сохранения данных попапа профиль
popupFormProfile.addEventListener('submit', (Event) => {
  Event.preventDefault();
  popupNameChange.textContent = popupInputName.value;
  popupDescriptionChange.textContent = popupInputDescription.value;
  popupClose(popupProfile);
});

// отр и закр карточки
const popupOpenAddBtn = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card');
const popupCloseAddBtn = popupCard.querySelector('.popup__close');
popupOpenAddBtn.addEventListener('click', () => {
  popupOpened(popupCard);
});
popupCloseAddBtn.addEventListener('click', () => {
  popupClose(popupCard);
});

// закрытие попапа карочка нажатием на общую зону
popupCard.addEventListener('click', (ev) => {
  if(ev.target === popupCard) {
    popupClose(popupCard);
  }
});

//  создание карточки
const cardTemplate = document.getElementById('card-template');
const cardGrid = document.querySelector('.card-grid');
const editCardBtn = document.querySelector('.profile__edit-button');
const editCardForm = document.querySelector('.popup__form_edit_card');

const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
  const cardText = cardElement.querySelector('.card__text');
  const cardImage = cardElement.querySelector('.card__image');
  cardText.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  // лайк
  const deleteBtn = cardElement.querySelector('.card__delete-btn');
  const likeBtn = cardElement.querySelector('.card__like-btn');
  const handleDelete = () => {
    cardElement.remove();
  }
  const handleLike = () => {
    likeBtn.classList.toggle('card__like-btn_active');
  }
  deleteBtn.addEventListener('click', handleDelete);
  likeBtn.addEventListener('click', handleLike);
  // увелич фото
  const popupImage = document.querySelector('.popup_image');
  const popupCloseImage = popupImage.querySelector('.popup__close');
  const increaseImage = popupImage.querySelector('.popup__image');
  const captionImage = popupImage.querySelector('.popup__caption');
  cardImage.addEventListener('click', () => {
    popupOpened(popupImage);
    captionImage.textContent = cardText.textContent;
    increaseImage.src = cardImage.src;
    increaseImage.alt = cardImage.alt;
  });
  popupCloseImage.addEventListener('click', () => {
    popupClose(popupImage);
  });
  // закрытие попапа изображение нажатием на общую зону
  popupImage.addEventListener('click', (evt) => {
  if(evt.target === popupImage) {
    popupClose(popupImage);
  }
  });
  return cardElement;
};

const renderyCardElement = (cardElement) => {
    cardGrid.prepend(cardElement);
  }
// перебрала массив
initialCards.forEach((card) => {
  const newCard = createCardElement(card);
  cardGrid.append(newCard);
});

// добавл карт
const handleEditCardSubmit = (event) => {
  event.preventDefault();
  const nameInput = editCardForm.querySelector('.popup__input_type_names');
  const linkInput = editCardForm.querySelector('.popup__input_type_card-link');
  const name = nameInput.value;
  const link = linkInput.value;
  const cardData = {
    name,
    link,
  };
  renderyCardElement(createCardElement(cardData));
  popupClose(popupCard);
};

editCardForm.addEventListener('submit', handleEditCardSubmit);