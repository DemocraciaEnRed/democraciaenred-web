import React from "react";
import "./style.scss";
import gif from "./assets/merre2023.gif";
/**
 * This component is a popup, it shows a gif and a button to close it.
 */
export default (props) => {

    // when the user clicks on the popup, it will send a message to the parent component to close the popup
    const closePopUp = () => {
        props.closePopUp();
    }

    // This function prevents the click event from bubbling up to the parent elements.
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    
    return (
        <div className={`popup-container`} onClick={closePopUp}>
            <div className={`popup-close`} onClick={closePopUp}>
                <i className="fas fa-times"></i>
            </div>
            <div className="popup-image-container" onClick={stopPropagation}>
                <a href="https://merepresenta.info" target="_blank" > <img src={gif} className="popup-image" alt="gif" /></a>
                <a href="https://merepresenta.info" target="_blank"><p className="popup-link">Hacé clic para saber más</p></a>
            </div>
        </div>
    )
}