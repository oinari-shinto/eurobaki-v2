import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { Hero } from "../components/Hero"
import ProductsZilmet from "../components/ProductsZilmet"
import Certificates from "../components/CertificatesZilmet"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableZilmet from "../components/dataTables/TableZilmet"






const Zilmet = () => (
  <Layout>
    <Seo title="Zilmet" description="Расширительные баки Zilmet"/>
    <Hero HeaderMark="Продажа и изготовление расширительных баков Zilmet" ButtonName="Прайс"/>
    <ProductsZilmet heading="Zilmet"/>
    <TableZilmet />
    <Certificates />
    
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Zilmet