import React from 'react'
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import SEO from "../components/Seo"
import Email from "../components/Email"
import {ContactSection} from '../components/ContactSection'




const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <ContactSection HeaderMark="Адреса наших складов и точек выдачи"/>
            
            
            
           
            
            
            <Email />
            <Link to="/">Go back to the homepage</Link>
            
            
      </Layout>
    )
}

export default Contact