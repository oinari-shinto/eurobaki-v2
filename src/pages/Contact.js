import React from 'react'
import { Link } from "gatsby"

import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import Email from "../components/Email"
import {ContactSection} from '../components/ContactSection'
import {ContactSection2} from '../components/ContactSection2'




const Contact = () => {
    return (
        <Layout>
            <Seo title="Contact" description="ООО 30 БАР контактная информация"/>
            <div></div>
            <ContactSection HeaderMark="Адреса наших складов и пунктов выдачи"/>
            <ContactSection2 />
            <Email />
            <Link to="/">На главную</Link>    
      </Layout>
    )
}

export default Contact