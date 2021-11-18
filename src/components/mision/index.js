import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const Mision = ({ data }) =>  {
    const intl = useIntl()
    return(
        <section class="mision-section section has-background-grey-dark">
            {
                data.content.map(content=>
                    <div class="mb-6">
                        <h2 className="title is-spaced has-text-green" >{intl.formatMessage({ id: content.title })}</h2>
                        <p class="subtitle has-text-white pb-6">
                            {intl.formatMessage({ id: content.description })}
                        </p>
                    </div>
                    )
            }
            <div className="my-6">
                <h2 className="title is-spaced has-text-green" >{intl.formatMessage({ id: data.memories.title })}</h2>
                {
                    data.memories.buttons.map(memory=>
                        <a className="m-1 button button-disabled-shadow has-no-background is-rounded is-medium is-warning is-outlined is-uppercase is-inline-block" href={memory.link} target="_blank">{memory.title}</a>
                        )
                }
            </div>
        </section>
    )
}

export default Mision 