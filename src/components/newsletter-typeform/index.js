import React from 'react'
import { useIntl } from "gatsby-plugin-intl";
import { PopupButton } from '@typeform/embed-react'

const NewsletterTypeForm = ({button, TFid}) => {
    const intl = useIntl();
    return (
        <PopupButton id={intl.formatMessage({ id: TFid })} className="button button-disabled-shadow has-no-background is-rounded is-medium is-warning is-outlined is-uppercase is-inline-block">
            {intl.formatMessage({ id: button })}
        </PopupButton>
    )
}

export default NewsletterTypeForm