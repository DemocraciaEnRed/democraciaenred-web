import React from "react"
import "./styles.scss"

const PageHero = ({ color, title, subtitle, icon }) => (
  <section className="section page-hero" style={{ backgroundColor: color }}>
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-one-third-widescreen is-two-fifths-desktop">
          <div className="is-flex is-justify-content-center">
            <div className="page-hero-hex-wrapper">
              <div className="hex-container page-hero-hex">
                <div className="hex-container-inner">
                  <div className="hex-container-inner-2 page-hero-placeholder"></div>
                </div>
              </div>
              {icon && (
                <img src={icon} className="page-hero-icon" alt="" />
              )}
            </div>
          </div>
        </div>
        <div className="column is-flex is-flex-direction-column is-justify-content-center">
          <h1 className="has-text-black page-hero-title">{title}</h1>
          {Array.isArray(subtitle)
            ? subtitle.map((s, i) => (
                <p key={i} className="has-text-black page-hero-subtitle">{s}</p>
              ))
            : <p className="has-text-black page-hero-subtitle">{subtitle}</p>
          }
        </div>
      </div>
    </div>
  </section>
)

export default PageHero
