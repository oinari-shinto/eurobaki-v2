import * as React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import SEO from "../components/Seo"


import { Hero } from "../components/Hero"
import ProductsReflex from "../components/ProductsReflex"

import Stats from "../components/Stats"
import Email from "../components/Email"
import TableReflex from "../components/dataTables/TableReflex";

import CertificatesReflex from "../components/CertificatesReflex"






const Reflex = () => (
  <Layout>
    <SEO title="Reflex" />
    <Hero HeaderMark="Поставки расширительных баков Reflex из Германии"/>
    <ProductsReflex heading="Reflex"/>
    <TableReflex />
    <CertificatesReflex />
    {/* <PresentationSection /> */}
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
    
  </Layout>
)

export default Reflex

