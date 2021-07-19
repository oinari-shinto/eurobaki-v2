import React from "react"


import styled from 'styled-components'
import Layout from "../layouts/MainLayout"
import SEO from "../components/Seo"
import { Hero } from "../components/Hero"
import Products from "../components/Products"
import Certificates from "../components/CertificatesWester"
import Stats from "../components/Stats"
import Email from "../components/Email"

import 'bootstrap/dist/css/bootstrap.min.css';






const IndexPage = () =>  {

    return (
    <Layout >
      <SEO title="Home" />
      <Hero HeaderMark="Продажа и изготовление расширительных баков"/>
      <Products heading="Выберите расширительный бак"/>
      <Certificates  />
      <Stats  />
      <Email />
      
      
      {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
    </Layout>
    )
  }
  

 
export default IndexPage

const Container = styled.div``