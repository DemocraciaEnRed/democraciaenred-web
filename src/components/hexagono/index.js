import React from "react";
import "./style.scss";
import styled from 'styled-components';
import { useIntl } from "gatsby-plugin-intl";

let Hexa = '';
let intl = '';
let Red = '';


const hexagono = ({props}) => (
    intl = useIntl(),
    
    // faltaria poder recibir las dimensiones de manera dinamica por ahora se labu
    Hexa = styled.div`
    height: 370px;
    max-width: 450px;
    min-width: 450px;
    max-height: 450px;
    background: ${props.styles.color};
    position: relative;
    clip-path: circle(45%);
    display: flex;
    align-items: center;
    align-contenter: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 40px;
    padding: 60px;
   `,

   Red = styled.div`
    height: 250px;
    width: 250px;
    background: ${props.styles.color};
    position: relative;
    clip-path: circle(50%);
    display: flex;
    align-items: center;
    align-contenter: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 20px;
    white-space: break-word;
    font-size: 12px;
   `,
  
   <>
        <Hexa id={intl.formatMessage({ id: props.title })} className='is-hidden-touch'>
            <div className="contenido">
                <p><b style={{color: 'black'}}>{intl.formatMessage({ id: props.title })}</b></p>
                <div  className={props.styles.verticalCenter ? 'vertical-center' : 'texto'}>
                    {intl.formatMessage({ id: props.texto })}
                </div>
            </div>
    </Hexa>
    <Red id={intl.formatMessage({ id: props.title })} className='is-hidden-desktop' >
            <div className="contenido">
                <p><b style={{color: 'black'}}>{intl.formatMessage({ id: props.title })}</b></p>
                <div  className={props.styles.verticalCenter ? 'vertical-center' : 'texto'}>
                    {intl.formatMessage({ id: props.texto })}
                </div>
            </div>
    </Red>
   </>


)

export default hexagono
