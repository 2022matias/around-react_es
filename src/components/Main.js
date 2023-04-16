import React from "react";
import Pencil from "../images/pencil.png";
import editButton from "../images/edit-button.png";
import profileAddButton from "../images/add-button.png";
import closeIcon from "../images/close-icon.png";
import Card from "./Cards";

  
function Main(props) {
	return(
		<>
			<section className="profile">
        <div className="profile__box" onClick={props.onEditAvatarClick}>
          <img src={props.userAvatar} className="profile__avatar" alt="imagen de Jacques Cousteau"/>
          <img src={Pencil} className="profile__pencil visibility" alt="lapiz de edición de foto" />
        </div>
        <div className="profile__info">
          <h2 className="profile__jacques">{props.userName}</h2>
          <img
            src={editButton}
            className="profile__edit-button" onClick={props.onEditProfileClick}
            alt="boton para editar el perfil"
          />
          <p className="profile__explorer">{props.userDescription}</p>
        </div>
        <img
          src={profileAddButton}
          className="profile__add-button" onClick={props.onAddPlaceClick}
          alt="boton para agregar imagenes"
        />
      </section>

      

      <section className="elements">
        {props.cards.map((card) => {
          return (
            <Card key={card._id} card={card} onClick={props.onCardClick} />
          )
        })}
      </section>


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


{/* 
      <section className={`popup ${isEditProfilePopupOpen ? 'popup-visible' : ''}`}>
        <form className="popup__container" noValidate>
          <img
            src={closeIcon}
            className="popup__close-icon" onClick={onEditProfileClick}
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
        <div className="fondo"></div>
      </section>

      <section className={`popup popup_question ${isConfirmPopupOpen ? 'popup-visible' : ''}`}>
        <form className="popup__container popup__container-confirm" noValidate>
          <img
            src={closeIcon}
            className="popup__close-icon close-question" onClick={onCardClick}
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
        <div className="fondo"></div>
      </section> */}
