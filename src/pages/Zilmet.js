import React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import SEO from "../components/Seo"


import { Hero } from "../components/Hero"
import ProductsZilmet from "../components/ProductsZilmet"
import Certificates from "../components/CertificatesZilmet"
import Stats from "../components/Stats"
import Email from "../components/Email"


import TableZilmet from "../components/dataTables/TableZilmet"






const Zilmet = () => (
  <Layout>
    <SEO title="Zilmet" />
    <Hero HeaderMark="Продажа и изготовление расширительных баков Zilmet"/>
    <ProductsZilmet heading="Zilmet"/>
    <TableZilmet />
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

export default Zilmet