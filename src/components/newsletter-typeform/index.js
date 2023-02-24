import React from 'react'
import { PopupButton } from '@typeform/embed-react'

const NewsletterTypeForm = ({button, TFid}) => {
    return (
        <PopupButton id={TFid} className="button button-disabled-shadow has-no-background is-rounded is-medium is-warning is-outlined is-uppercase is-inline-block">
            {button}
        </PopupButton>
    )
}

export default NewsletterTypeForm