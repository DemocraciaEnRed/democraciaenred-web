import React from "react";

const PrevArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.44 22.05">
        <g>
          <g>
            <polyline
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="2px"
              points="11.73 21.34 5.38 14.99 1.41 11.03 11.73 0.71"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

const NextArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.44 22.05">
        <g>
          <g>
            <polyline
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="2px"
              points="0.71 0.71 11.03 11.03 5.89 16.16 0.71 21.34"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  slidesPerRow:1,
  variableWidth: false,
  centerPadding:'100px',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  // className: 'ancho'
};

export default sliderSettings;
