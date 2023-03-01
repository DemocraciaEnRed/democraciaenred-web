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
    height: 350px;
    max-width: 350px;
    min-width: 350px;
    max-height: 350px;
    background: ${props.styles.color};
    position: relative;
    clip-path: circle(50%);
    display: flex;
    align-items: center;
    align-contenter: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
   `,
  
    <Hexa id={intl.formatMessage({ id: props.title })} className={ mobile ? '' : props.styles.position} >

        <div className="contenido">
            <p><b style={{color: 'black'}}>{intl.formatMessage({ id: props.title })}</b></p>
            <div  className={props.styles.verticalCenter ? 'vertical-center' : 'texto'}>
                {intl.formatMessage({ id: props.texto })}
            </div>
        </div>
    </Hexa>


)

export default hexagono
