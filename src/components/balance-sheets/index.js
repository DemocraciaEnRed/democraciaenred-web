import React from "react"
import "./styles.scss"
import amarillo from "./assets/amarillo.png"
import celeste from "./assets/celeste.png"
import naranja from "./assets/naranja.png"
import rosa from "./assets/rosa.png"
import verde from "./assets/verde.png"
import violeta from "./assets/violeta.png"


import { useIntl } from "gatsby-plugin-intl"

const images = {
    'amarillo'  : amarillo,
    'celeste'  : celeste,
    'naranja'  : naranja,
    'rosa'  : rosa,
    'verde' : verde,
    'violeta'  : violeta
};
export default ({data}) =>  {
    const intl = useIntl()

    return (
        <section className="section">
            <div>
                {/* hay que ponerlo en el archivo de traduccion (JSON) */}
                <h1>
                    Balances
                </h1>
                <p>
                    Te invitamos a descargar y conocer los balances de años pasados 
                </p>
            </div>
            <div class="columns ">
                <div class="column  balance ">
                    <img src={images.amarillo}></img>
                    <div className="above">
                        <p class="">.column</p>
                    </div>
                </div>
                <div class="column item-grid">
                    <p class="notification is-info">.column</p>
                </div>
                <div class="column item-grid">
                    <p class="notification is-info">.column</p>
                </div>
                <div class="column item-grid">
                    <p class="notification is-info">.column</p>
                </div>
            </div>
            <div class="columns">
                <div class="column item-grid">
                    <p class="notification is-info">.column</p>
                </div>
                <div class="column item-grid">
                    <p class="notification is-info">.column</p>
                </div>
                <div class="column item-grid">
                    <p class="notification is-info">.column</p>
                </div>
                <div class="column item-grid">
                    <p class="notification is-info">.column</p>
                </div>
                    <div class="column item-grid">
                    <p class="notification is-info">.column</p>
                </div>
            </div>
        </section>

        // <section className="section">
        //     <div className="container has-text-centered">
        //         <h3 className="title is-4 is-size-1-desktop">{intl.formatMessage({ id: data.title})}</h3>
        //         <div className="columns">
        //             {data.cases.map((useCase, index) =>
        //                 <div key={index} className={`column use-case-item use-case-item-${useCase.color}`}>
        //                     <figure className="image">
        //                         <img src={`${images[useCase.image]}`} alt="" />
        //                     </figure>
        //                     <h4 className="title is-4 is-size-3-desktop">{intl.formatMessage({ id: useCase.title})}</h4>
        //                     <p className="subtitle is-6 is-spaced">{intl.formatMessage({ id: useCase.subtitle})}</p>
        //                     <a className="icon is-large" target="_blank" href={useCase.link} rel="noopener noreferrer">
        //                         <i className="fas fa-plus fa-inverse"></i>
        //                     </a>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        // </section>
    )
}