import React from "react";
import "./style.scss";

const hexagono = (props) => (
    <div id="hexagono">
        <div className="contenido">

                <React.Fragment>
                    <div className="texto">
                        {props.texto }
                    </div>
                    <div className="link">
                        {props.boton}
                    </div>
                </React.Fragment>
            

        </div>
    </div>
 
)

export default hexagono
