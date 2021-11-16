import React, {useState} from "react"
import "./styles.scss"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Footer from "../components/footer"
import ResourcesHero from "../components/resources-hero"
import dataResources from "../../content/resources.json"
import Division from "../components/division"
import ResourcesHeader from '../components/resources-header'

const Recursos = () => {

    return (
   <React.Fragment>
       <SEO />
       <Navbar/>
       <ResourcesHero data={dataResources}/>
       <Division/>
       <ResourcesHeader data={dataResources}/>
       <Footer/> 
   </React.Fragment>
)}

export default Recursos;