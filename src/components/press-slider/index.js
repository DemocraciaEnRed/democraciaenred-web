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
      btn.innerHTML= `${intl.formatMessage({ id: "press.see_less" })}`
    }
      else
    {
      let box = document.getElementById('press-box')
      let btn = document.getElementById('btn-see')

      box.style.height = '350px';
      boxvalue = false
      btn.innerHTML= `${intl.formatMessage({ id: "press.see_more" })}`
    }
  }


  return (
    
    <section
      id="press-slider"
      className="section pb-6 hero is-fullheight-deesktop has-background-yellow"
    >
      <h1 className="our-press title has-text-black">
        {intl.formatMessage({ id: slides.title })}
      </h1>
      <div id="press-box" className=" level press-box ">
        {slides.press.map((press, index) => (
            <Press data={press} key={index} className=" pt-6" />
          ))}
      </div>
      <div className="pos-right">
        <button id="btn-see" className="button is-black is-rounded flex-items" onClick={seeMore}>{intl.formatMessage({ id: "press.see_more" })}</button>
      </div>

    </section>
  );
};
