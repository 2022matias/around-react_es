import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";

function App() {
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

export default App;
