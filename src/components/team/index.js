import React from "react"
import "./style.scss"
import { useIntl } from "gatsby-plugin-intl"

export default ({ data }) => {
    
    const intl = useIntl()

    const icons={
        gh:"fab fa-github",
        fb:"fab fa-facebook",
        ig:"fab fa-instagram",
        tw:"fab fa-twitter",
        ln: "fab fa-linkedin"
    }
    //  ooo"
    // esta funcion surgió a pedido que los nombres se muestren en dos renglones
    // pero com olos archivos de traduccion los nombres estan en un solo campo 
    // eje: data.title = "Don Powa"
    // elegi procesar la info aca 
    const fullName = {
        "name": '',
        "last": ''
    }

    const format = (text) => {
        let whiteSpaces = 0
        let i = 0
        let cutWord = 0
        while( whiteSpaces != 2 &&  i < text.length){
            if (text[i] == ' '){
                cutWord = i
                whiteSpaces ++
            }
            i++
        }
        fullName['name'] = text.slice(0, cutWord)
        fullName['last'] = text.slice(cutWord)
    }
    format(intl.formatMessage({id: data.title}))
    //  ooo"
    return (
        <section id={data.id} className="px-3 py-6 hero is-flex is-justify-content-center is-flex-direction-column">
            <div className="container  is-align-items-center" style={{maxWidth: "238px"}}>
                <div className="is-flex">
                    <div className='hex-container'>
                        <div className='hex-container-inner'>
                            <div className={`hex-container-inner-2 ${data.id}-bg`}></div>
                        </div>
                    </div> 
                </div>
                <h1 id="idName" className="has-text-black title is-spaced">
                    {/*  ooo" */}
                    {/* {intl.formatMessage({id: data.title}) } */}
                    { fullName['name']}
                     <br></br>
                    {fullName['last']}
                     {/*  ooo" */}
                </h1>
                
                <h3 id="description" className="subtitle is-6 has-text-black is-spaced">{intl.formatMessage({id: data.subtitle})}</h3>
                <div className="mb-6">
                    {data.socialmedia.map((media, index)=> 
                    <a key={index} href={media.url} target="_blank">
                        <span className="icon is-medium has-text-black ml-2">
                            <i className={`${icons[media.icon]} fa-2x`}></i>
                        </span>
                    </a>
                    )}
                </div>      
            </div>              
        </section>
    )
}