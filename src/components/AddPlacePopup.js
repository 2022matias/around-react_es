import React from 'react';
import PopupWithForm from "./PopupWithForm";
import closeIcon from "../images/close-icon.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function AddPlacePopup(props) {
	return (
		<CurrentUserContext.Provider>
			<PopupWithForm name={'card'} 
        isOpen={props.isOpen}>
          <form className="popup__container popup__container_card">
          <img
            src={closeIcon}
            className="popup__close-icon" onClick={props.onClose}
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
		</CurrentUserContext.Provider>	
	)
}

export default AddPlacePopup;