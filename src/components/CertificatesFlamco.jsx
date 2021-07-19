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

const CertificatesReflex = () => {
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
            filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["certificate-flamco-1", "certificate-flamco-2", "certificate-flamco-3", "certificate-flamco-4", "certificate-flamco-5"]}}
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
                        <h3>Описание баков Flamco</h3>
                        <p>Расширительные баки Flamco</p>
                        <p>Расширительные баки Flamco Flexon применяются для:<br/>
                        
                        • Надежность корпуса, выполненного из высококачественной обработанной углеродистой стали,<br/>
                          подтверждена расчетом на прочность в соответствии с европейской директивой PED 97/23/EC<br/>
                          («Оборудование, работающее под давлением»).<br/>
                           Толщина стенок корпуса защищена от проникающей коррозии в течение не менее 10 лет.<br/>
                           • Форма корпусов расширительных баков Flexcon R<br/>
                            рассчитана специально для восприятия повышенных давлений при<br/>
                             несанкционированном повышении давления в системе,<br/>
                            выходе из строя предохранительной арматуры и других неблагоприятных факторах.
                        </p>
                       
                    </Certificate>
                    <Certificate >
                        <FaRegLightbulb css={`
                        color: #f9b19b;
                        font-size: 2rem;
                        margin-bottom: 1rem;`} />
                        <h3>Описание баков Flexon Flamco R</h3>                        
                        <p> 
                        Параметры эксплуатации:<br/>
                        • В расширительных мембранных баках свыше 80 литров используется мембрана диафрагменного типа из SBR, обладающая крайне низкой проницаемостью воздуха и повышенной прочностью.<br/>
                        • Допускается применение мембранных расширительных баков в системе отопления с температурой теплоносителя не выше 110 °С.<br/>
                        • Минимально допустимая рабочая температура составляет -10 °С.<br/>
                        • Допустимый тип теплоносителя: вода либо водный раствор с содержанием гликоля с концентрацией не более 50%.<br/>
                        • Тип монтажа: напольный, на опорах.
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

export default CertificatesReflex



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





