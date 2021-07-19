import React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import SEO from "../components/Seo"


import { Hero } from "../components/Hero"
import ProductsFlamco from "../components/ProductsFlamco"
import Certificates from "../components/CertificatesFlamco"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableFlamco from "../components/dataTables/TableFlamco";







const Flamco = () => (
  <Layout>
    <SEO title="Flamco" />
    <Hero HeaderMark="Продажа и изготовление расширительных баков Flamco"/>
    <ProductsFlamco heading="Flamco"/>
    <TableFlamco />
    <Certificates />
    {/* <PresentationSection /> */}
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
    
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default Flamco