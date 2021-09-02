import React from 'react'
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import Email from "../components/Email"
import { PhotoVideoSection } from '../components/PhotoVideoSection'





const PhotoVideo = () => {
    return (
        <Layout>
            <Seo title="Foto Video" description="Видео и фото объектов по расширительным бакам"/>
            <PhotoVideoSection HeaderMark="В процессе загрузки"/>
            
            
            
            
           
            
            
            <Email />
            <Link to="/">На главную</Link>
            
            
      </Layout>
    )
}

export default PhotoVideo