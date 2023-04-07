import Pencil from "../images/pencil.png";
import editButton from "../images/edit-button.png";
import profileAddButton from "../images/add-button.png";
import closeIcon from "../images/close-icon.png";

function Main() {
	return(
		<>
			<section className="profile">
        <div className="profile__box">
          <img src="#" className="profile__avatar" alt="imagen de Jacques Cousteau"/>
          <img src={Pencil} className="profile__pencil visibility" alt="lapiz de edición de foto" />
        </div>
        <div className="profile__info">
          <h2 className="profile__jacques"></h2>
          <img
            src={editButton}
            className="profile__edit-button"
            alt="boton para editar el perfil"
          />
          <p className="profile__explorer"></p>
        </div>
        <img
          src={profileAddButton}
          className="profile__add-button"
          alt="boton para agregar imagenes"
        />
      </section>

      

      <section className="popup popup-visible">
        <form className="popup__container" novalidate>
          <img
            src={closeIcon}
            className="popup__close-icon"
            alt="boton para cerrar el formulario"
          />
          <h3 className="popup__title">Editar perfil</h3>
          <input
            id="popup__name-input"
            type="text"
            className="popup__name popup__input"
            placeholder="Inserte su Nombre"
            minlength="2"
            maxlength="40"
            required
          />
          <span className="popup__name-input-error"></span>
          <input
            id="popup__skill-input"
            type="text"
            className="popup__skill popup__input"
            placeholder="Inserte su Skill"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="popup__skill-input-error"></span>
          <button className="popup__button">Guardar</button>
        </form>
        <div className="fondo"></div>
      </section>

      <section className="popup popup_card visibility">
        <form className="popup__container popup__container_card">
          <img
            src={closeIcon}
            className="popup__close-icon-card"
            alt="boton para cerrar el formulario"
          />
          <h3 className="popup__title">Nuevo lugar</h3>
          <input
            id="popup__place-input"
            type="text"
            className="popup__place popup__input"
            placeholder="Título"
            minlength="2"
            maxlength="30"
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

      <section className="popup popup_question popup-visible">
        <form className="popup__container popup__container-confirm" novalidate>
          <img
            src={closeIcon}
            className="popup__close-icon close-question"
            alt="boton para cerrar el formulario"
          />
          <h3 className="popup__title popup__title-confirm">¿Estás seguro?</h3>
          <button className="popup__button confirm">Si</button>
        </form>
        <div className="fondo"></div>
      </section>

      <section className="popup popup_avatar popup-visible">
        <form className="popup__container popup__container-avatar" novalidate>
          <img
            src={closeIcon}
            className="popup__close-icon close-avatar"
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
              <button className="element__trash"></button>
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