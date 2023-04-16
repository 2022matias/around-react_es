// export default function PopupWithForm(props) {
// 	return (
// 		<>
// 			<section className={`popup ${props.name} ${props.isOpen ? props.openClass : ''}`}>
// 				<form className={`popup__container ${props.classForm}`} noValidate>
//           <img
//             src={closeIcon}
//             className="popup__close-icon" onClick={props.onClosePopup}
//             alt="boton para cerrar el formulario"
//           />
//           <h3 className="popup__title">{props.titleText}</h3>
//           <button className={`popup__button ${props.classButton}`}>{props.buttonText}</button>
// 					{props.children}
//         </form>
//         <div className="fondo"></div>
// 			<section/>
// 		</>
// 	);
// }