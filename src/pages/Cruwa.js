import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"
import { Hero } from "../components/Hero"
import ProductsCruwa from "../components/ProductsCruwa"
import Certificates from "../components/CertificatesCruwa"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableCruwa from "../components/dataTables/TableCruwa"






const Cruwa = () => (
  <Layout>
    <Seo title="Cruwa" description="Расширительные баки Cruwa "/>
    <Hero HeaderMark="Продажа и изготовление расширительных баков Cruwa" ButtonName="Прайс"/>
    <ProductsCruwa heading="Cruwa"/>
    <TableCruwa />
    <Certificates />
    
    <Stats />
    <Email />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Cruwa