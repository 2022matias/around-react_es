import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `${props.card} ${isOwn ? 'element__trash' : ''}`
  );
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardlikeButtonClassName = (
    `${props.card} ${isLiked ? 'element__heart-black' : 'element__heart'}`
  );

  function handleClickCard () {
    props.onCardClick(props.card)
  }

	return (
		<>
			<article className="element">
          <img 
            onClick={handleClickCard}
            src={props.card.link} 
            className="element__image"
            alt="foto del valle de yosemite"
          />
          <div className="element__background">
            <div className="element__info">
              <h3 className="element__name">{props.card.name}</h3>
              <div className="element__div">
                <button className={cardlikeButtonClassName}></button>
                <div className="element__contador">{}</div>
              </div>
              <button className={cardDeleteButtonClassName} onClick={props.onConfirmClick}></button>
            </div>
          </div>
        </article>
		</>
	)
}

export default Card;