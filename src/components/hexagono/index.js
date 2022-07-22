import React from "react";
import "./style.scss";
import styled from 'styled-components';
import { useIntl } from "gatsby-plugin-intl";

let Hexa = ''
let intl = '';
const hexagono = ({props, mobile}) => (
    intl = useIntl(),
    
    // faltaria poder recibir las dimensiones de manera dinamica por ahora se labu
     Hexa = styled.div`
    height: 335px;
    max-width: 249px;
    min-width: 249px;
    max-height: 155px;
    background: ${props.styles.color};
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
        border-color: transparent transparent ${props.styles.color};
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
        border-color: ${props.styles.color} transparent transparent;
    }
    
   `,
  
    <Hexa id={intl.formatMessage({ id: props.title })} className={ mobile ? '' : props.styles.position} >

        <div className="contenido">
            <div className="hexa-label" style={{background:  props.styles.color, transform: mobile != true ? props.styles.lbl_position: 'translate(-0em, -8em)'}} >
                <h3>{intl.formatMessage({ id: props.title })}</h3>
            </div>
            <div  className={props.styles.verticalCenter ? 'vertical-center' : 'texto'}>
                {intl.formatMessage({ id: props.texto })}
            </div>
                {props.boton &&
            <div className="link">
                <a href={props.boton.link}>{intl.formatMessage({ id: props.boton.label })}</a>
                
        </div>
        }
        </div>
    </Hexa>


)

export default hexagono
