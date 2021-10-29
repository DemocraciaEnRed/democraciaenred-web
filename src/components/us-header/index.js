import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { PopupButton } from '@typeform/embed-react'
import usBackground from './assets/bg-us.png'
import './style.scss'

const UsHeader = ({ data }) =>  {
    const intl = useIntl()
    return(
        <section class="us-header hero is-large " style={{backgroundImage: `url(${usBackground})`}}>
            <div class="hero-body has-text-centered is-flex-mobile is-justify-content-center is-flex-direction-column">
                <h1 className="is-spaced has-text-green mb-5" >{intl.formatMessage({ id: data.title })}</h1>
                <p class="mx-auto subtitle has-text-white">
                    {intl.formatMessage({ id: data.subtitle })}
                </p>
            </div>
        </section>
    )
}

export default UsHeader 