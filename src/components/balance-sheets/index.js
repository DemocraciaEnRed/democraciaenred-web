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
                <h1 style={{color: 'black'}}>
                    Balances
                </h1>
                <p>
                    {intl.formatMessage({ id: "transparency.download_balance" })}
                </p>
            </div>
            <div className="columns is-flex-desktop is-flex-wrap-wrap">

            <div className="column is-one-fifth is-full-mobile balance">
                    <div className="above ">
                        <img className="imgres" src={images.rosa}></img>
                        <a href="https://drive.google.com/file/d/1tPevuiDCDylsiaZwj0iAEd1pqSmL-Q1N/view" target="_blank" className="anio">2023</a>
                    </div>
                </div>                

                <div className="column is-one-fifth is-full-mobile balance">
                    <div className="above ">
                        <img className="imgres" src={images.rosa}></img>
                        <a href="https://drive.google.com/file/d/1DCG0fPdHM1OoHPh2BrMJ2oZRJ4bYBIV3/view" target="_blank" className="anio">2022</a>
                    </div>
                </div>
                
                <div className="column is-one-fifth is-full-mobile balance">
                    <div className="above ">
                        <img className="imgres" src={images.violeta}></img>
                        <a href="https://drive.google.com/file/d/1N4o8yq5wxWwhtDZqNwgQ1d9QeAX63Sig/view" target="_blank" className="anio">2021</a>
                    </div>
                </div>
                <div className="column is-one-fifth is-half-mobile balance">
                    <div className="above  ">
                        <img className="image imgres" src={images.celeste}></img>
                        <a href="https://drive.google.com/file/d/1-4SO0ho2c30xg5c4fAoPaXRhHt38demH/view" target="_blank" className="anio">2020</a>
                    </div>
                </div>
                <div className="column is-one-fifth is-half-mobile balance ">
                    <div className="above ">
                        <img className="image imgres" src={images.verde}></img>
                        <a href="https://drive.google.com/file/d/1TT7Q0dtVwumryXkGmj_m2LvcClv4Hqb2/view" target="_blank" className="anio">2019</a>
                    </div>
                </div>
                <div className="column is-one-fifth is-one-third-mobile balance ">
                    <div className="above ">
                        <img className="image imgres" src={images.amarillo}></img>
                        <a href="https://drive.google.com/file/d/11JP2vbRm_D741G_vmXdHvFATspygVXVS/view" target="_blank" className="anio">2018</a>
                    </div>
                </div>
                <div className="column is-one-fifth is-one-third-mobile balance ">
                    <div className="above " >
                        <img className="image imgres" src={images.naranja}></img>
                        <a href="https://drive.google.com/file/d/1PPCbWGYtcIxoenCZcUzbTe1v6phbyitU/view" target="_blank" className="anio">2017</a>
                    </div>
                </div>
                <div className="column is-one-fifth is-one-third-mobile balance ">
                    <div className="above ">
                        <img className="image imgres" src={images.rosa}></img>
                        <a href="https://drive.google.com/file/d/1-LWAWjFnVnMFR7ymEnRbPr1wr7GW2d2B/view" target="_blank" className="anio">2016</a>
                    </div>
                </div>
                <div className="column is-one-fifth is-half-mobile balance ">
                    <div className="above ">
                        <img className="image imgres" src={images.violeta}></img>
                        <a href="https://drive.google.com/file/d/1tLlkzAH2QdKlnW0tYB1JTPMuYzyOFrMx/view" target="_blank" className="anio">2015</a>
                    </div>
                </div>
                <div className="column is-one-fifth is-half-mobile balance ">
                    <div className="above ">
                        <img className="image imgres" src={images.celeste}></img>
                        <a href="https://drive.google.com/file/d/1ajjvH11UcC7OBC5mjXndMvKgWpe0AQrR/view" target="_blank" className="anio" download>2014</a>
                    </div>
                </div>
                <div className="column is-one-fifth is-full-mobile balance ">
                    <div className="above ">
                        <img className="image imgres" src={images.verde}></img>
                        <a href="https://drive.google.com/file/d/11s7tYeeZ-NAiwqCOj5PpjjZ6VZ2FlCt5/view" target="_blank" className="anio" download>2013</a>
                    </div>
                </div>
            </div>
            {/* <div className="columns">
                <div className="column is-one-third-mobile balance ">
                    <img src={images.naranja}></img>
                    <div className="above" >
                        <a href="https://drive.google.com/drive/folders/1TD-81Yo7G1fdqEZMHex3mRwM-AqTXUWa" className="anio">2017</a>
                    </div>
                </div>
                <div className="column is-one-third-mobile balance ">
                    <img src={images.rosa}></img>
                    <div className="above">
                        <a href="https://drive.google.com/drive/folders/1TD-81Yo7G1fdqEZMHex3mRwM-AqTXUWa" className="anio">2016</a>
                    </div>
                </div>
                <div className="column is-half-mobile balance ">
                    <img src={images.violeta}></img>
                    <div className="above">
                        <a href="https://drive.google.com/drive/folders/1TD-81Yo7G1fdqEZMHex3mRwM-AqTXUWa" className="anio">2015</a>
                    </div>
                </div>
                <div className="column is-half-mobile balance ">
                    <img src={images.celeste}></img>
                    <div className="above">
                        <a href="https://drive.google.com/drive/folders/1TD-81Yo7G1fdqEZMHex3mRwM-AqTXUWa" className="anio" download>2014</a>
                    </div>
                </div>
                <div className="column is-full-mobile balance ">
                    <img src={images.verde}></img>
                    <div className="above">
                        <a href="https://drive.google.com/drive/folders/1TD-81Yo7G1fdqEZMHex3mRwM-AqTXUWa" className="anio" download>2013</a>
                    </div>
                </div>
            </div> */}
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