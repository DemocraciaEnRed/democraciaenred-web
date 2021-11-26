import React, {useState} from "react"
import "./styles.scss"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Footer from "../components/footer"
import InternalPageHero from "../components/internal-page-hero"
import dataTransparency from "../../content/transparency.json"
import Division from "../components/division"
import ResourcesHeader from '../components/resources-header'
import Transparency from "../components/transparency"
const Transparencia = () => {

    return (
   <React.Fragment>
       <SEO />
       <Navbar/>
       <InternalPageHero data={dataTransparency}/>
       <Division/>
       <Transparency data={dataTransparency}/>       
       <Footer/> 
   </React.Fragment>
)}

export default Transparencia;