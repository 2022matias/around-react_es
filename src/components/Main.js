import React from "react";
import Pencil from "../images/pencil.png";
import editButton from "../images/edit-button.png";
import profileAddButton from "../images/add-button.png";
import closeIcon from "../images/close-icon.png";
import avatarImage from "../images/Avatar.png";

function Main() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(true);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(true);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(true);
  const [isConfirmPopupOpen, setIsconfirmPopupOpen] = React.useState(true);

  const [user, setUser] = React.useState();
  React.useEffect(() => {
    fetch('https://nomoreparties.co/v1/web_es_cohort_04/users/me', `61c6f68c-f2f6-410f-a75d-8fc57629e184`)
		.then((res) => res.json())
    .then(json => {
      setUser(json.res)
    })
		.catch((res) => Promise.reject(`Error: ${res.status}`));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleConfirmClick() {
    setIsconfirmPopupOpen(!isConfirmPopupOpen);
  }


	return(
		<>
			<section className="profile">
        <div className="profile__box" onClick={handleEditAvatarClick}>
          <img src={avatarImage} className="profile__avatar" alt="imagen de Jacques Cousteau"/>
          <img src={Pencil} className="profile__pencil visibility" alt="lapiz de edición de foto" />
        </div>
        <div className="profile__info">
          <h2 className="profile__jacques"></h2>
          <img
            src={editButton}
            className="profile__edit-button" onClick={handleEditProfileClick}
            alt="boton para editar el perfil"
          />
          <p className="profile__explorer"></p>
        </div>
        <img
          src={profileAddButton}
          className="profile__add-button" onClick={handleAddPlaceClick}
          alt="boton para agregar imagenes"
        />
      </section>

      

      <section className={`popup ${isEditProfilePopupOpen ? 'popup-visible' : ''}`}>
        <form className="popup__container" noValidate>
          <img
            src={closeIcon}
            className="popup__close-icon" onClick={handleEditProfileClick}
            alt="boton para cerrar el formulario"
          />
          <h3 className="popup__title">Editar perfil</h3>
          <input
            id="popup__name-input"
            type="text"
            className="popup__name popup__input"
            placeholder="Inserte su Nombre"
            minLength="2"
            maxength="40"
            required
          />
          <span className="popup__name-input-error"></span>
          <input
            id="popup__skill-input"
            type="text"
            className="popup__skill popup__input"
            placeholder="Inserte su Skill"
            minLength="2"
            maxength="200"
            required
          />
          <span className="popup__skill-input-error"></span>
          <button className="popup__button">Guardar</button>
        </form>
        <div className="fondo"></div>
      </section>

      <section className={`popup popup_card ${isAddPlacePopupOpen ? 'visibility' : ''}`}>
        <form className="popup__container popup__container_card">
          <img
            src={closeIcon}
            className="popup__close-icon-card" onClick={handleAddPlaceClick}
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
        <div className="fondo"></div>
      </section>

      <section className={`popup popup_question ${isConfirmPopupOpen ? 'popup-visible' : ''}`}>
        <form className="popup__container popup__container-confirm" noValidate>
          <img
            src={closeIcon}
            className="popup__close-icon close-question" onClick={handleConfirmClick}
            alt="boton para cerrar el formulario"
          />
          <h3 className="popup__title popup__title-confirm">¿Estás seguro?</h3>
          <button className="popup__button confirm">Si</button>
        </form>
        <div className="fondo"></div>
      </section>

      <section className={`popup popup_avatar ${isEditAvatarPopupOpen ? 'popup-visible' : ''}`}>
        <form className="popup__container popup__container-avatar" noValidate>
          <img
            src={closeIcon}
            className="popup__close-icon close-avatar" onClick={handleEditAvatarClick}
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
        <div className="fondo"></div>
      </section>

      <section className="elements"></section>

      <template id="elements">
        <article className="element">
          <img
            src="./images/valle-de-yosemite1.jpg"
            className="element__image"
            alt="foto del valle de yosemite"
          />
          <div className="element__background">
            <div className="element__info">
              <h3 className="element__name"></h3>
              <div className="element__div">
                <button className="element__heart"></button>
                <div className="element__contador"></div>
              </div>
              <button className="element__trash" onClick={handleConfirmClick}></button>
            </div>
          </div>
        </article>
      </template>

      <section className="enlarge-image no-vision">
        <div className="enlarge-image__container">
          <h3 className="enlarge-image__title"></h3>
          <img
            src="./images/valle-de-yosemite1.jpg"
            className="enlarge-image__image"
            alt="imagen ampliada"
          />
          <img
            src={closeIcon}
            className="enlarge-image__close-image"
            alt="boton para cerrar el formulario"
          />
        </div>
        <div className="fondo"></div>
      </section>
		</>
	);
}

export default Main;