import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { Button } from './Button'
import { resetWarningCache } from 'prop-types'
import {ImLocation} from 'react-icons/im'
import Link from 'gatsby-link'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Products = ({ heading }) => {
  useEffect(() => {
      
    gsap.from(".prodAnime", {
      duration: 2,
      autoAlpha: 0,
      ease: 'none',
      delay: 3,
      scrollTrigger: {
        trigger: ".prodAnime",
        start: "top 90%",
        end: "bottom 10%",
        
        toggleActions: "restart reset restart reset",
      }
    })
  }, [])
const data = useStaticQuery(graphql`
 query ProductsQuery  {
    allProductsJson (limit: 4) {
      edges {
        node {
          alt
          button
          name
          link
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      
    }
  }
`)

// for productImg
// src={item.node.img.childImageSharp.fluid}
function getProducts(data) {
    
    const productsArray = []
    data.allProductsJson.edges.forEach((item, index) => {
        productsArray.push(
            <ProductCard key={index}>
                <Link to={item.node.link}>
                <ProductImg 
                    
                     alt={item.node.alt}
                     fluid={item.node.img.childImageSharp.fluid}/>
                </Link>
                <ProductInfo>
                  <TextWrap>
                    <ImLocation />
                    <ProductTitle to="/Wester">{item.node.name}</ProductTitle>
                  </TextWrap>
                  <Button to='/products' primary="true" round="true"
                  css={`
                  position: absolute; 
                  top: 320px;
                  font-size: 14px;
                  `}>
                  {item.node.button}</Button>
                </ProductInfo>
            </ProductCard>
        )
    })
    return productsArray
}

    return (
        <ProductsContainer>
            <ProductsHeading >{heading}</ProductsHeading>
            <ProductsWrapper className="prodAnime">{getProducts(data)}</ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products




const ProductsContainer = styled.div`
    min-height: 50vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: transparent;
    color: #fff;
    
    
    
    
`
const ProductsHeading = styled.div`
   
    font-size: clamp(1.2rem, 5vw, 3rem);
    margin-bottom: 5rem;
    text-align: center;
    color: #000;
`

const ProductsWrapper = styled.div`
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;
  

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 400px;
   /* 100% if i want see image */
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
  
  
  
`
const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(90%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  
  
  
  &:hover {
    filter: brightness(100%);
    
  }
  
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  box-sizing: border-box;
  max-width: 100%;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
    box-sizing: border-box;
  max-width: 100%;
  } 
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 275px;
`

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 1);
  position: left;
  /* other styles (left, top, right, and padding) */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  box-sizing: border-box;
  max-width: 100%;
 
  
`

/* Keyframe animate (import keyframe from style component )
const animateOpacity = keyframes`
  0% {
    opacity: -1;
  }
  100% {
    opacity: 1;
  }

`;
const animatePosition = keyframes`
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
`; */
