import React from "react";
import "./styles.scss";
import SocialMediaNavbar from "../components/social-media-navbar";
import HeroSlider from "../components/hero-slider";
import heroSliderData from "../../content/hero-slider.json";
import productsData from "../../content/products.json";
import dcosData from "../../content/dcOS.json";
import socialMedia from "../../content/social-media-navbar.json";
import ProductsSlider from "../components/products-slider";
import LivesSlider from "../components/lives-slider";
import livesData from "../../content/lives.json";
import TeamSlider from "../components/team-slider";
import teamData from "../../content/team.json";
// import ecosystemData from "../../content/ecosystem.json";
import ecosystemData from "../../content/hexaEcosystem.json";
import EcosystemSlider from "../components/ecosystem-slider";
// import EcosystemAnimated from "../components/ecosystrem-animated"
import Newsletter from "../components/newsletter";
import newsletterData from "../../content/newsletter.json"
import Resources from "../components/resources-section";
import dataResources from "../../content/resources.json";
import Division from "../components/division";
import UsSection from "../components/us-section";
import dataUs from "../../content/us-section.json";
import PressSlider from "../components/press-slider";
import pressData from "../../content/press.json";
import dataTransparency from "../../content/transparency.json";
import TransparencySection from "../components/transparency-section";
import Layout from "../components/layout";
// import PopUp from "../components/pop-up";

//Sets smooth scroll animation for anchor links
if (typeof window !== "undefined") {
  const SmoothScroll = require("smooth-scroll");
  new SmoothScroll('a[href*="#"]');
}

const IndexPage =()=>{

  // const [showModal, setShowModal] = React.useState(false);

  // // after 3 seconds, set showModal to true
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     // check in local storage if the user has already visited the site today
  //     const today = new Date();
  //     const lastVisit = localStorage.getItem("lastVisit");
  //     if (lastVisit) {
  //       // if the user has already visited the site today, do nothing
  //       if (today.getDate() === parseInt(lastVisit)) {
  //         return;
  //       }
  //     }
  //     // if the user has not visited the site today, set showModal to true
  //     setShowModal(true);
  //     // and save the current date in local storage
  //     localStorage.setItem("lastVisit", today.getDate());
  //   }, 1000);
  // }, []);

  // // define a function that when the PopUp components calls "closePopUp" it will set showModal to false
  // const closePopUp = () => {
  //   setShowModal(false);
  // };

  return (
    <React.Fragment>
      <Layout>
        {/* {
          showModal && <PopUp closePopUp={closePopUp} />
        } */}
        <HeroSlider slides={heroSliderData} />
        <Division />
        <SocialMediaNavbar socialMedia={socialMedia} />
        <Resources resources={dataResources} />
        <ProductsSlider firstSlide={dcosData} slides={productsData} />
        <EcosystemSlider slides={ecosystemData} />
        <Newsletter data={newsletterData}/>
        <LivesSlider slides={livesData} />
        <UsSection data={dataUs} />
        <TeamSlider slides={teamData} title={dataUs} />
        <PressSlider slides={pressData} />
        <TransparencySection data={dataTransparency} />
      </Layout>
    </React.Fragment>
  );
};
export default IndexPage