import React, { useState } from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import DropDown from '../components/DropDown'



const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <GlobalStyle />
      <Header toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      
      <main>{children}</main>
      <Footer />
    </>
  )
}



export default Layout
