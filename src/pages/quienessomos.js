import React from "react"
import "./styles.scss"
import Navbar from "../components/navbar"
import SEO from "../components/seo"

import Footer from "../components/footer"
import UsHeader from "../components/us-header"
import Mision from "../components/mision"
import TeamSlider from "../components/team-slider"
import teamData from "../../content/team.json"
import WorkWith from "../components/work-with-section"
import dataUs from "../../content/us.json"

const QuienesSomos = () => {

    return (
   <React.Fragment>
       <SEO />
       <Navbar/>
       <UsHeader data={dataUs}/>
       <Mision data={dataUs}/>
       <TeamSlider slides={teamData} title={dataUs}/>
       <WorkWith/>
       <Footer/> 
   </React.Fragment>
)}

export default QuienesSomos;