import card from "./Main";
import handleConfirmClick from "./Main"

function Card() {
	return (
		<>
			<article className="element">
          <img
            src={card.link}
            className="element__image"
            alt="foto del valle de yosemite"
          />
          <div className="element__background">
            <div className="element__info">
              <h3 className="element__name">{card.name}</h3>
              <div className="element__div">
                <button className="element__heart"></button>
                <div className="element__contador"></div>
              </div>
              <button className="element__trash" onClick={handleConfirmClick}></button>
            </div>
          </div>
        </article>
		</>
	)
}

export default Card;