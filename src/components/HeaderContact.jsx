import React from "react"
import styled from 'styled-components'




const HeaderContact = () => {

  return (
    <Nav2>
      <ContactMenu>8 (812) 317-00-32 <br /> info@30bar.ru</ContactMenu>

    </Nav2>
      
      
      
      
      
   
    
  )
}

export default HeaderContact

const Nav2 = styled.nav`
  background: transparent;
  height: 0;
  top: 15px;
  display: flex;
  justify-content: space-between;
  padding: 0rem calc((100vw - 1300px) /2);
  z-index: 3;
  position: relative;

  @media screen and (max-width: 768px ) {
    display: none;
  }

`

const ContactMenu = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  

`
