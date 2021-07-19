import React, {useEffect} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});

const Certificates = () => {
    /* const tl = gsap.timeline();
    useEffect(() => {
      
      tl.from('.container', {xPercent: 0});
        
    
    ScrollTrigger.create({
      animation: tl,
      trigger: ".container",
      start: "top top",
      end: "+=400",
      scrub: true,
      pin: true,
      anticipatePin: 1
    })
    }, []) */

    
    const data = useStaticQuery (
        graphql`
      query {
        slideShow: allFile(
            filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["certificate-wester-1", "certificate-wester-2", "certificate-zilmet"]}}
            sort: {fields: base, order: ASC}
          ) {
            edges {
              node {
                id
                base
                childImageSharp {
                    gatsbyImageData(
                        height: 900
                        width: 600
                        placeholder: BLURRED
                        quality: 70
                        blurredOptions: {width: 100}
                        transformOptions: {cropFocus: CENTER, fit: COVER}
                    )
                }
              }
            }
          }
      }
    `
    ) 
    
    return (
        <CertificatesContainer>
            <TopLine >Сертификаты</TopLine>
            <Description >Сертификаты на расширительные баки</Description>
           
            <ContentWrapper>
             
                <ColumOne >
                    <Certificate >
                        <IoMdCheckmarkCircleOutline css={`
                        color: #3fffa8;
                        font-size: 2rem;
                        margin-bottom: 1rem;
                        white-space: pre-line;`} />
                        <h3>Назначение</h3>
                        <p>Мембранные расширительные баки</p>
                        <p>Баки применяются для:<br />
                        • поддержания постоянного давления в системе;<br />
                        • уменьшения количества включений-выключений насоса. <br />
                        • защиты системы от гидравлического удара.<br />
                        • для компенсации температурного расширения воды.<br />
                        • основные элементы бака: <br />
                        • корпус из высококачественной стали <br /> 
                        • эластичная мембрана EPDM.</p>
                       
                    </Certificate>
                    <Certificate >
                        <FaRegLightbulb css={`
                        color: #f9b19b;
                        font-size: 2rem;
                        margin-bottom: 1rem;`} />
                        <h3>Описание</h3>
                        <p> Мембрана разделяет бак на две камеры: воздушную, полость между <br /> 
                        металлическим корпусом и мембранной и внутреннюю полость, <br />
                        где находится рабочая  жидкость. Рабочая жидкость находится внутри мембраны и<br />
                         не контактирует с металлически- ми стенками бака.<br />
                        • все баки оснащены сменной мембраной. <br />
                        • Срок службы – до 100 000 циклов <br />
                        • Давление в воздушной полости баков от 8 до 150л – 1,5 бара, от 750 до 10 000л –4бара. <br /> 
                        • Баки от 200 до 10 000 литров могут изготавливаться в специальном исполнении 16 бар, 25 бар. 
                        </p>
                    </Certificate>
                    
                </ColumOne>
                
                <ContainerScroll>
               
                {/* <HorizontalScroll> */}
                {/* <Scrollable _class="data"> */}
                    <ColumTwo >                           
                        <Carousel>
                           {data.slideShow.edges.map(({node}) => (
                               <Carousel.Item key={node.id}>   
                                   <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base.split('-')
                                   .join(' ').split('.')[0]} />
                               </Carousel.Item> 
                           ))}
                        </Carousel>          
                    </ColumTwo>
               {/*  </Scrollable> */}
               {/*  </HorizontalScroll> */}
                
                </ContainerScroll>
                
            </ContentWrapper>
            
        </CertificatesContainer>
        
    )
}

export default Certificates



const CertificatesContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
    white-space: pre-line;
`


const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
    white-space: pre-line;
`

const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    
    
    @media screen and (max-width: 768px) {
        
        grid-template-columns: 1fr;
    }
`

const ColumOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    white-space: pre-line;
`

const Certificate = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    white-space: pre-line;
    

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color: #3b3b3b;
        white-space: pre-line;
    }
`

const ColumTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr ;
    white-space: pre-line;
    grid-gap: 10px;
    /* display:flex;
    flex-direction: row;
    margin-top: 2rem;
    grid-gap: 10px; */
    
   
    

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    } 
`
const ContainerScroll = styled.div`
    max-width: 600px;
    /* overflow-x: scroll; */
    
    
    
`
const Images = styled(Img)`
    /* border-radius: 10px; */
    height: 750px;
    /* min-width: 580px; */
    

`





