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

const CertificatesZilmet = () => {
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
            filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["certificate-zilmet-1", "certificate-zilmet-2", "certificate-zilmet-3", "certificate-zilmet-4", "certificate-zilmet-5"]}}
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
            <TopLine >Сертификаты Zilmet</TopLine>
            <Description >Сертификаты на расширительные баки Zilmet</Description>
           
            <ContentWrapper>
             
                <ColumOne >
                    <Certificate >
                        <IoMdCheckmarkCircleOutline css={`
                        color: #3fffa8;
                        font-size: 2rem;
                        margin-bottom: 1rem;
                        white-space: pre-line;`} />
                        <h3>Zilmet</h3>
                        <p>Мембранные баки Zilmet</p>
                        <p>Баки применяются для:<br />
                        • Максимально допустимое рабочее давление – 10 бар.<br /> 
                        • Есть варианты исполнения 16 и 25 бар.<br />
                        • Заменяемая мембрана из бутиловой резины;<br /> 
                        • Рабочая температура - 10°C +99 °C;<br /> 
                        • Cиний и красный цвет гидроаккумуляторов Zilmet;<br /> 
                        • Корпус из углеродистой стали .</p>
                       
                    </Certificate>
                    <Certificate >
                        <FaRegLightbulb css={`
                        color: #f9b19b;
                        font-size: 2rem;
                        margin-bottom: 1rem;`} />
                        <h3>Описание баков Zilmet</h3>
                        <p> 
                        • Баки от 200 до 10 000 литров могут изготавливаться в специальном исполнении 16 бар, 25 бар. широкая сфера применения;<br /> 
                        Заменяемая мембрана из бутиловой резины, пригодная для питьевой воды;<br />
                        Синий и красный цвет;<br />
                        Корпус гидроаккумулятора изготовлен из углеродистой стали;<br />
                        Максимальное давление 10 бар.Особенности конструкции<br />
                        Объем 24, 35 л баки не имеют опоры (ножек) и площадки для крепления;<br />
                        Объем 50л бак имеет опору (ножки), но без площадки;<br />
                        Объем 60л и более баки имеют опору (ножки) и площадку для крепления;<br />
                        Баки объемом от 500 л до 5000 л исключительно вертикального исполнения.<br />
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

export default CertificatesZilmet



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





