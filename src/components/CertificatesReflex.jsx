import React from 'react'
import styled from 'styled-components'
/* import Img from 'gatsby-image' */
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});

const CertificatesReflex = () => {
    
    const data = useStaticQuery (
        graphql`
      query {
        slideShow: allFile(
            filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["certificate-reflex-1", "certificate-reflex-2", "certificate-reflex-3", "certificate-reflex-4", "certificate-reflex-5"]}}
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
                        <h3>Описание баков Reflex DE</h3>
                        <p>Мембранные баки Reflex</p>
                        <p>Баки (гидроаккумуляторы) Refix DE применяются для:<br/>
                        
                        Систем водоснабжения, пожаротушения, <br/>
                        а так же повысительных установок водоснабжения,<br/>
                        и напольного панельно-лучистого отопления. <br/>
                        В комплектацию баков объемом 1000 и более литров входит манометр.<br/>
                        Баки серии D и DE отвечают требованиям,<br/>
                        предъявляемым к гидропневмобакам,<br/>
                        и рекомендуются для систем питьевого водоснабжения.<br/>
                        </p>
                       
                    </Certificate>
                    <Certificate >
                        <FaRegLightbulb css={`
                        color: #f9b19b;
                        font-size: 2rem;
                        margin-bottom: 1rem;`} />
                        <h3>Описание баков Reflex N и Reflex G</h3>                        
                        <p> 
                            Баки Reflex N мембрана не сменная<br/> 
                            Баки Reflex G бутиловая заменяемая мембрана по DIN EN 13831<br/> 
                            Особенности и преимущества:<br/> 
                            • Для систем тепло- и холодоснабжения<br/> 
                            • Допустимая рабочая температура 70°C<br/> 
                            • Макс. температура корпуса 120 °<br/> 
                            • Допущены к применению согласно соотв. указаниям для устройств под давлением 97/23/EG<br/> 
                            • Имеют смотровое отверстие (свыше 1000 литров Ø 1000 мм)<br/> 
                            • Оснащены манометром предварительного давления<br/> 
                            • До 1000 л / Ø 740 мм с резьбовым присоединением<br/> 
                            • С 1000 л / Ø 1000 мм с фланцевым соединением DN 65<br/> 
                            • От 3000 до 10000 литров с верхним расположением фланцев<br/> 
                            • Прочное эпоксидное покрытие с привлекательным новым цветом<br/> 
                            • На заводе заполнены азотом с предварительным давлением<br/> 
                            • Допустимая концентрация гликоля до 50%
                        </p>
                    </Certificate>
                    
                </ColumOne>
                
                <ContainerScroll>
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
/* const Images = styled(Img)`
    border-radius: 10px;
    height: 750px;
    min-width: 580px;
    

` */





