import React from 'react'
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import Email from "../components/Email"
import {ContactSection} from '../components/ContactSection'




const PhotoVideo = () => {
    return (
        <Layout>
            <Seo title="Foto Video" />
            <div></div>
            
            
            
            
           
            
            
            <Email />
            <Link to="/">На главную</Link>
            
            
      </Layout>
    )
}

export default PhotoVideo