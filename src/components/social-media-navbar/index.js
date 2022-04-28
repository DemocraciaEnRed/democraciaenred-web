import React from "react";
import "./style.scss";

export default ({ socialMedia }) => {
  return (
    <div className="social-media-nav is-flex is-justify-content-space-between is-flex-direction-row px-4 mb-5 ">
      <div>
        {socialMedia.slice(0, 3).map((media, index) => (
          <a
            key={index}
            className="mx-1 is-size-5 has-text-white"
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className={media.icon}></i>
            </span>
          </a>
        ))}
      </div>
      <div>
        {socialMedia.slice(3, 7).map((media, index) => (
          <a
            key={index}
            className="mx-1 is-size-5 has-text-white"
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className={media.icon}></i>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
