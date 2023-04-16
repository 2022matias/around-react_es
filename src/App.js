import React from "react";
import { api } from "./utils/api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(true);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(true);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(true);
  const [isConfirmPopupOpen, setIsconfirmPopupOpen] = React.useState(true);

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleCardClick() {
    setSelectedCard();
  }

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
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

  function onCardClick() {
    setIsconfirmPopupOpen(!isConfirmPopupOpen);
  }

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      {/* <PopupWithForm name={'popup_profile'} 
        isOpen={isEditProfilePopupOpen} 
        openClass={'popup-visible'} 
        onClosePopup={onEditProfileClick} 
        classForm={''} 
        titleText={'Editar perfil'} 
        classButton={''} 
        buttonText={'Guardar'} />
        <PopupWithForm name={'popup_card'} 
        isOpen={isAddPlacePopupOpen} 
        openClass={'visibility'} 
        onClosePopup={onAddPlaceClick} 
        classForm={'popup__container_card'} 
        titleText={'Nuevo lugar'} 
        classButton={''} 
        buttonText={'Crear'} />
        <PopupWithForm name={'popup_question'} 
        isOpen={isConfirmPopupOpen} 
        openClass={'popup-visible'} 
        onClosePopup={onCardClick} 
        classForm={'popup__container-confirm'} 
        titleText={'¿Estás seguro?'} 
        classButton={'confirm'} 
        buttonText={'Si'} />
        <PopupWithForm name={'popup_avatar'} 
        isOpen={isEditAvatarPopupOpen} 
        openClass={'popup-visible'} 
        onClosePopup={onEditAvatarClick} 
        classForm={'popup__container-avatar'} 
        titleText={'Cambiar foto de perfil'} 
        classButton={''} 
        buttonText={'Guardar'} /> */}
    </div>
  );
}