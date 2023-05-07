import React from "react";
import Pencil from "../images/pencil.png";
import editButton from "../images/edit-button.png";
import profileAddButton from "../images/add-button.png";
import Card from "./Cards";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";
import setCards from "../App";

  function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

	return(
		<>
			<section className="profile">
        <div className="profile__box" onClick={props.onEditAvatarClick}>
          <img src={currentUser.avatar} className="profile__avatar" alt="imagen de Jacques Cousteau"/>
          <img src={Pencil} className="profile__pencil visibility" alt="lapiz de edición de foto" />
        </div>
        <div className="profile__info">
          <h2 className="profile__jacques">{currentUser.name}</h2>
          <img
            src={editButton}
            className="profile__edit-button" onClick={props.onEditProfileClick}
            alt="boton para editar el perfil"
          />
          <p className="profile__explorer">{currentUser.about}</p>
        </div>
        <img
          src={profileAddButton}
          className="profile__add-button" onClick={props.onAddPlaceClick}
          alt="boton para agregar imagenes"
        />
      </section>

    

      <section className="elements">
        {props.cards.map((card) => {
          // function handleCardLike(card) {
          //   const isLiked = card.like.some(i => i.id === currentUser.id);
          //   api.handleLike(card._id, !isLiked).then((newCard) => {
          //     setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
          //   });
          // }
          // function handleCardDelete(card) {
          //   const isOwn = card.owner._id === currentUser._id;
          //   api.deleteCard(card._id, isOwn).then((newCard) => {
          //     setCards((cards) => cards.filter((c) => c._id === card.id ? newCard : c));
          //   });
          // }
          return (
            <Card key={card._id} 
            card={card} 
            onConfirmClick={props.onConfirmClick} 
            onCardClick={props.onCardClick}
            // onCardLike={handleCardLike(card)}
            //onCardDelete={handleCardDelete(card)}
            />
          )
        })}
      </section>
		</>
	);
}

export default Main;