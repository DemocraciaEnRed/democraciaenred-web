import React from "react";
import "./style.scss";
import styled from 'styled-components';

let Hexa = ''
const hexagono = ({props}) => (

     Hexa = styled.div`
    height: 335px;
    max-width: 249px;
    max-height: 155px;
    background: ${props.color};
    position: relative;

    :before {
        content: "";
        position: absolute;
        top: -67px;
        left: 0;
        width: 0;
        height: 0;
        border-width: 0 125px 67px;
        border-style: solid;
        border-color: transparent transparent ${props.color};
    }

    &:after {
        content: "";
        position: absolute;
        bottom: -67px;
        left: 0;
        width: 0;
        height: 0;
        border-width: 67px 125px 0;
        border-style: solid;
        border-color: ${props.color} transparent transparent;
    }

`,
  
    <Hexa >
                <div className="contenido">
                    <div className="texto">
                        {props.texto }
                    </div>
                   {props.boton &&
                        <div className="link">
                            <a href={props.boton.link}>{props.boton.label}</a>
                        </div>
                    }
        </div>
    </Hexa>

    // id="hexagono"
    // <div id="hexagono" style={hexaStyle} >
    //     <div className="contenido">
    //                 <div className="texto">
    //                     {props.texto }
    //                 </div>
    //                {props.boton &&
    //                     <div className="link">
    //                         <a href={props.boton.link}>{props.boton.label}</a>
    //                     </div>
    //                 }
    //     </div>
    // </div>

)

export default hexagono
