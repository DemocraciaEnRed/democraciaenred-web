import React from 'react'

export default ()=>{
    return (
        <section className="section">
            <div className="container">

            </div>
            <div className="columns">
                <div className="column">
                    <h1 className="has-text-black title is-spaced mb-6">{intl.formatMessage({id: data.title})}</h1>
                    <h2 className="has-text-black title is-spaced mb-6">{intl.formatMessage({id: data.subtitle})}</h2>
                </div>
                <div className="column"></div>
            </div>
            

        </section>
    )

}