import React from "react";

// Font Awesome 5 (la versión instalada) no incluye el logo de X,
// así que ese se dibuja como SVG inline. El resto sigue usando FA.
const XTwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon-x-twitter"
    viewBox="0 0 512 512"
    fill="currentColor"
    style={{ width: "1em", height: "1em" }}
    aria-hidden="true"
  >
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

const SubstackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon-substack"
    viewBox="0 0 512 512"
    fill="currentColor"
    style={{ width: "1em", height: "1em" }}
    aria-hidden="true"
  >
    <path d="M480 116.7H32V64h448v52.7zM32 180.6V448L256 320l224 128V180.6H32zM480 32H32v52.7h448V32z" />
  </svg>
);

export default ({ media }) => {
  if (media.svg === "x-twitter") return <XTwitterIcon />;
  if (media.svg === "substack") return <SubstackIcon />;
  return <i className={media.icon}></i>;
};
