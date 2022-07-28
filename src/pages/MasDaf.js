import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { Hero } from "../components/Hero"
import ProductsZilmet from "../components/ProductMasDaf"
import Certificates from "../components/CertificatesMasDaf"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableZilmet from "../components/dataTables/TableMasDaf"






const Zilmet = () => (
  <Layout>
    <Seo title="Zilmet" description="Расширительные баки MasDaf"/>
    <Hero HeaderMark="Продажа и изготовление расширительных баков MasDaf" ButtonName="Прайс"/>
    <ProductsZilmet heading="MasDaf"/>
    <TableZilmet />
    <Certificates />
    
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Zilmet