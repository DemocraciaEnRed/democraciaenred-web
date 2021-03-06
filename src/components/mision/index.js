import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import "./styles.scss";

const Mision = ({ data }) =>  {
    const intl = useIntl()
    
    return(
        <section id="" className="mision-section section has-background-grey-dark">
            {
            data.content.map((content, index)=>

                <div className="mb-6" key={index}>
                    <h2 className="title is-spaced has-text-green" >{intl.formatMessage({ id: content.title })}</h2>
                    <p className="subtitle has-text-white pb-6">
                        {intl.formatMessage({ id: content.description })}
                    </p>
                </div>
            )
            }
            {/* <div className="my-6">
                <h2 className="title is-spaced has-text-green" >{intl.formatMessage({ id: data.memories.title })}</h2>
                <div className="is-flex is-justify-content-center">
                {
                    data.memories.buttons.map(memory=>
                        // <a className="m-1 button button-disabled-shadow has-no-background is-rounded is-medium is-warning is-outlined is-uppercase is-inline-block" href={memory.link} target="_blank"
                        // >
                        //     {memory.title}</a>
                            
                            <a className="is-medium button-memory is-flex is-justify-content-center is-align-items-center mx-2" href={memory.link} target="_blank">
                            {memory.title}
                            </a>
                        
                        )
                }
                </div>
            </div> */}
        </section>
    )
}

export default Mision 