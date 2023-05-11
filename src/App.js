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
import EditAvatarPopup from "./components/EditAvatarPopup";
import AddPlacePopup from "./components/AddPlacePopup";

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

  function handleUpdateUser({name, about}) {
    api.editProfile(name, about).then((res) => {
      setCurrentUser(res);
      onEditProfileClick();
    })
  }

  function handleUpdateAvatar(avatar) {
      api.updateAvatar(avatar).then((res) => {
        setCurrentUser(res);
        onEditAvatarClick();
      })
  }

  function handleUpdatePlace({place, url}) {
    api.addCard(place, url).then ((res) => {
      setCards([res, ...cards]);
      onAddPlaceClick();
    })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i.id === currentUser.id);
    api.handleLike(card._id, !isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    });
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
        onCardLike={handleCardLike}
        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={onEditProfileClick} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={onEditAvatarClick} onUpdateAvatar={handleUpdateAvatar}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={onAddPlaceClick} onAddPlace={handleUpdatePlace}/>
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
        <ImagePopup isOpen={isImagePopupOpen} 
        onCardClick={onCardClick} 
        card={selectedCard}
        />
      </CurrentUserContext.Provider>
    </div>
  );

}