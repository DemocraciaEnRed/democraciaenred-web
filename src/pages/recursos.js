import React, {useState} from "react"
import "./styles.scss"
import Navbar from "../components/navbar"
import SEO from "../components/seo"

import Footer from "../components/footer"
import ResourcesHero from "../components/resources-hero"
import dataResources from "../../content/resources.json"
import Division from "../components/division"
import ResourcesMansonery from '../components/resources-mansonery'
import ResourcesHeader from '../components/resources-header'

const QuienesSomos = () => {

    return (
   <React.Fragment>
       <SEO />
       <Navbar/>
       <ResourcesHero data={dataResources}/>
       <Division/>
       <ResourcesHeader data={dataResources}/>
       <ResourcesMansonery resources={dataResources}/>
       
       <Footer/> 
   </React.Fragment>
)}

export default QuienesSomos;