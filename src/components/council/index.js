import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import "./style.scss"

import Team from "../team"

const Council =  ({staff}) =>  {
    const intl = useIntl()
    return (
        <section id="team-slider" className="px-6-desktop contain-consejo pb-6 hero is-fullheight-deesktop is-large is-primary">
            {/* {intl.formatMessage({ id: title.slider_title})} */}
            <h1 className="container mb-0 mt-6 our-team title has-text-black">
            {intl.formatMessage({id: "council.main_title"})}</h1>
            <div id="council" className="is-flex-desktop is-flex-direction-row is-align-content-center is-flex-wrap-wrap is-flex-grow-5">
                {staff.map((team, index) => 
                    <Team data={team} key={index} className="pt-6"/>
                )}
            </div>

        </section>
    )
}

export default Council