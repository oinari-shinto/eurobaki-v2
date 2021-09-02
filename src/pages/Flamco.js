import React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"


import { Hero } from "../components/Hero"

import Certificates from "../components/CertificatesFlamco"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableFlamco from "../components/dataTables/TableFlamco";
import ProductFL from "../components/ProductFL"






const Flamco = () => (
  <Layout>
    <Seo title="Flamco" description="Расширительные баки Flamco" />
    <Hero HeaderMark="Продажа и изготовление расширительных баков Flamco" ButtonName="Прайс"/>
    <ProductFL heading="Flamco"/>
    <TableFlamco />
    <Certificates />
    
    <Stats />
    <Email />
    <Link to="/">На главную</Link>
    
   
  </Layout>
)

export default Flamco