import * as React from "react"
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import Seo from "../components/Seo"


import { Hero } from "../components/Hero"

import Certificates from "../components/CertificatesWester"
import Stats from "../components/Stats"
import Email from "../components/Email"
import TableWester from "../components/dataTables/TableWester";
import ProductsWester from "../components/ProductsWester"






const Wester = () => (
  <Layout>
    
    <Seo title="Wester" />
    <Hero HeaderMark="Продажа и изготовление расширительных баков Wester"/>
    <ProductsWester heading="Wester"/>
    
    <TableWester  />
    <Certificates />
    {/* <PresentationSection /> */}
    <Stats />
    <Email />
    <Link to="/">На главную</Link>
    
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
)

export default Wester

