const popupOpenEditBtn = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup__profile');
const popupCloseEditBtn = popupProfile.querySelector('.popup__close');
const popupInputName = popupProfile.querySelector('.popup__input_type_name');
const popupForm = popupProfile.querySelector('.popup__form');
const popupNameChange = document.querySelector('.profile__name');
const popupInputDescription = popupProfile.querySelector('.popup__input_type_description');
const popupDescriptionChange = document.querySelector('.profile__description');

/*открыть попап*/
function popupOpenedProfile() {
 popupProfile.classList.add('popup_opened');
}

/*закрыть попап*/
function popupCloseProfile() {
  popupProfile.classList.remove('popup_opened');
}

popupOpenEditBtn.addEventListener('click', () => {
 popupOpenedProfile();
 popupInputName.value = popupNameChange.textContent;
 popupInputDescription.value = popupDescriptionChange.textContent;
});

popupCloseEditBtn.addEventListener('click', () => {
 popupCloseProfile();
});

popupForm.addEventListener('submit', (Event) => {
 Event.preventDefault();
 popupNameChange.textContent = popupInputName.value;
 popupDescriptionChange.textContent =  popupInputDescription.value;
 popupCloseProfile();
});


const popupOpenAddBtn = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup__card');
const popupCloseAddBtn = popupCard.querySelector('.popup__close');

/*открыть попап*/
function popupOpenedCard() {
  popupCard.classList.add('popup_opened');
 }
 
 /*закрыть попап*/
 function popupCloseCard() {
   popupCard.classList.remove('popup_opened');
 }

 popupOpenAddBtn.addEventListener('click', () => {
  popupOpenedCard();
 });
 
 popupCloseAddBtn.addEventListener('click', () => {
  popupCloseCard();
 });




// нужно перенести инитиал кардс в другой файл, он уже там, но не джава его не видит
 const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


const cardTemplate = document.getElementById('card-template');
const cardGrid = document.querySelector('.card-grid');
const editCardPopup = document.querySelector('.popup__card-image');
const editCardBtn = document.querySelector('.profile__edit-button');
const editCardForm = document.querySelector('.popup__form_edit_card');



const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);

  const cardText = cardElement.querySelector('.card__text');
  const cardImage = cardElement.querySelector('.card__image');

  cardText.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt =  cardData.name;

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

  return cardElement; 
};

const renderyCardElement = (cardElement) => {
  cardGrid.prepend(cardElement);
}

initialCards.forEach((card) => {
  renderyCardElement(createCardElement(card));
});

const handleEditCardSubmit = (event) => {
  event.preventDefault();

  const titleInput = editCardForm.querySelector('.popup__input_type_title');
  const linkInput = editCardForm.querySelector('. popup__input_type_card-link');
}


editCardForm.addEventListener('submit', handleEditCardSubmit);