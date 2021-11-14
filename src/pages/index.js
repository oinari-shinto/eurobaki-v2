import React from "react"
import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { Hero } from "../components/Hero"
import Products from "../components/Products"
import Certificates from "../components/CertificatesWester"
import Stats from "../components/Stats"
import Email from "../components/Email"
import 'bootstrap/dist/css/bootstrap.min.css';






const IndexPage = () =>  {

    return (
    <Layout >
      <Seo title="Home" />
      <Hero HeaderMark="Продажа и изготовление расширительных баков" ButtonName="Выбрать бак"/>
      <Products  heading="Выберите расширительный бак"/>
      <Certificates  />
      <Stats  />
      <Email />
      
      
    </Layout>
    )
  }
  

 
export default IndexPage

