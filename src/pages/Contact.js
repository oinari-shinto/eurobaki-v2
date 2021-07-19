import React from 'react'
import { Link } from "gatsby"


import Layout from "../layouts/MainLayout"
import SEO from "../components/Seo"
import Email from "../components/Email"



const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            
            
            
           
            
            
            <Email />
            <Link to="/">Go back to the homepage</Link>
            
            {/* <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </p> */}
      </Layout>
    )
}

export default Contact