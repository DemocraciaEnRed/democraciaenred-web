import React, { useState, useEffect } from "react";
import goTopButton from "./assets/to-top.png";
import "./style.scss";

const GoTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, [])
  
  return (
    <>
      <div
        onClick={scrollToTop}
        className="go-top-button"
        style={{ display: visible ? "inline" : "none" }}
      >
        <figure className="image is-48x48 goTop is-relative">
          <img src={goTopButton} />
        </figure>
      </div>
    </>
  );
};

export default GoTop;
