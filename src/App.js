import React from "react";
import { api } from "./utils/api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";
import closeIcon from "./images/close-icon.png";
import ImagePopup from "./components/ImagePopup";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import EditProfilePopup from "./components/EditProfilePopup";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(true);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(true);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(true);
  const [isConfirmPopupOpen, setIsconfirmPopupOpen] = React.useState(true);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(true);

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState([]);
  
  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    })
    api.getCards().then((res) => {
      setCards(res);
    })
  }, []);

  function onEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function onEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function onAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function onConfirmClick() {
    setIsconfirmPopupOpen(!isConfirmPopupOpen);
  }

  function onCardClick(card) {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(card)
  }

  function handleUpdateUser() {
    api.editProfile().then((res) => {
      setCurrentUser(res);
      onEditProfileClick();
    })
  }
  // function closeAllPopus() {
  //   onEditAvatarClick()
  //   onEditProfileClick()                   cerraria y abiria todos
  //   onAddPlaceClick()
  //   onConfirmClick()
  // }


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main cards={cards}
        onEditAvatarClick={onEditAvatarClick} 
        onEditProfileClick={onEditProfileClick} 
        onAddPlaceClick={onAddPlaceClick} 
        onConfirmClick={onConfirmClick}
        onCardClick={onCardClick}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClick={onEditProfileClick} onUpdateUser={handleUpdateUser}/>
        <PopupWithForm name={'card'} 
        isOpen={isAddPlacePopupOpen}>
          <form className="popup__container popup__container_card">
          <img
            src={closeIcon}
            className="popup__close-icon" onClick={onAddPlaceClick}
            alt="boton para cerrar el formulario"
          />
          <h3 className="popup__title">Nuevo lugar</h3>
          <input
            id="popup__place-input"
            type="text"
            className="popup__place popup__input"
            placeholder="Título"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__place-input-error"></span>
          <input
            id="popup__url-input"
            type="url"
            className="popup__url popup__input"
            placeholder="Enlace a la imagen"
          />
          <span className="popup__url-input-error"></span>
          <button className="popup__button">Crear</button>
        </form>
        </PopupWithForm>
        <PopupWithForm name={'question'} 
        isOpen={isConfirmPopupOpen}>
          <form className="popup__container popup__container-confirm" noValidate>
          <img
            src={closeIcon}
            className="popup__close-icon close-question" onClick={onConfirmClick}
            alt="boton para cerrar el formulario"
          />
          <h3 className="popup__title popup__title-confirm">¿Estás seguro?</h3>
          <button className="popup__button confirm">Si</button>
        </form>
        </PopupWithForm>
        <PopupWithForm name={'avatar'} 
        isOpen={isEditAvatarPopupOpen}>
          <form className="popup__container popup__container-avatar" noValidate>
          <img
            src={closeIcon}
            className="popup__close-icon close-avatar" onClick={onEditAvatarClick}
            alt="boton para cerrar el formulario"
          />
          <h3 className="popup__title popup__title-avatar">Cambiar foto de perfil</h3>
          <input
            id="popup__avatar-input"
            type="url"
            className="popup__url popup__input"
            placeholder="Enlace a la imagen"
          />
          <span className="popup__avatar-input-error"></span>
          <button className="popup__button popup__button-avatar">Guardar</button>
        </form>
        </PopupWithForm>
        <ImagePopup isOpen={isImagePopupOpen} 
        onCardClick={onCardClick} 
        card={selectedCard}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}