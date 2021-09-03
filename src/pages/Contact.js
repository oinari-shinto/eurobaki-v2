import React from 'react'
import { Link } from "gatsby"

import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import Email from "../components/Email"
import {ContactSection} from '../components/ContactSection'




const Contact = () => {
    return (
        <Layout>
            <Seo title="Contact" description="ООО 30 БАР контактная информация"/>
            <div></div>
            <ContactSection HeaderMark="Адреса наших складов и пунктов выдачи"/>
        
            
            <Email />
            <Link to="/">На главную</Link>
            
            
      </Layout>
    )
}

export default Contact