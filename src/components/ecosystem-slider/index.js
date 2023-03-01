import React from "react";
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "../slider-settings";
import EcosystemAnimated from "../ecosystrem-animated"
import Hexagono from "../hexagono"
import "./style.scss";

// import Ecosystem from "../ecosystem";

export default ({ slides }) => {
  const intl = useIntl();
  // borrar luego cuando se termine le ocmponente hexagono
  // esto deberia venir del archivo de traduccion
  // const data = {
  //   styles: {
  //     color:'#69D69D',

  //  },
  //   texto: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.',
  //   boton: {
  //     label: 'ir a...',
  //     link: 'www.democraciaenred.org'
  //   }
  // }

  return (
    <section
      id="ecosystem"
      className="ecosystem-slider hero is-fullheight  is-primary is-bold con"
    >
      <div className="container title-section is-flex is-justify-content-space-between is-align-items-center p-6">
        <h1 className="has-text-black title">
          {intl.formatMessage({ id: slides.title })}
        </h1>
      </div>
      {/* <div className="is-justify-content-space-between is-align-items-center has-text-centered">
        <EcosystemAnimated />
       
      </div> */}
      
      <div className="is-hidden-mobile section div-circle">
        <div className="circle-container">
          
          {slides.ecosystem.slice(0, 2).map((ecosystem, index) => (
              <Hexagono props={ecosystem} mobile={false} key={index}/>
            ))}
        </div>
        <div className="circle-container">
          
          {slides.ecosystem.slice(2, 4).map((ecosystem, index) => (
              <Hexagono props={ecosystem} mobile={false} key={index}/>
            ))}
        </div>
      </div>
      <div>
        
      </div>
      <div id="ecosystem-slider" className="is-hidden-desktop">
        <Slider {...sliderSettings}>
          {slides.ecosystem.map((ecosystem, index) => (
            <Hexagono props={ecosystem} mobile={true} key={index}/>
          ))}
        </Slider>
      </div>
    </section>
  );
};
