import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import "./style.scss";

import Press from "../press";

export default ({ slides }) => {
  let boxvalue = false;
  const intl = useIntl();

   function seeMore  ()  {
    if (boxvalue == false) {
      let box = document.getElementById('press-box')
      let btn = document.getElementById('btn-see')
      box.style.height = '100%';
      boxvalue = true
      btn.innerHTML= 'ver menos'

    }
      else
    {
      let box = document.getElementById('press-box')
      let btn = document.getElementById('btn-see')

      box.style.height = '440px';
      boxvalue = false
      btn.innerHTML= 'ver más'

    }
  }


  return (
    <section
      id="press-slider"
      className="section pb-6 hero is-fullheight-deesktop has-background-yellow"
    >
      <h1 className="pl-6 mb-0 mt-6 our-press title has-text-black">
        {intl.formatMessage({ id: slides.title })}
      </h1>
      <div id="press-box" className=" level press-box ">
        {slides.press.map((press, index) => (
            <Press data={press} key={index} className=" pt-6" />
          ))}
      </div>
      <div className="pos-right">
        <button id="btn-see" className="button is-black is-rounded flex-items" onClick={seeMore}>Ver más</button>
      </div>

    </section>
  );
};
