import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { gsap, TweenLite, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HorizontalScroll from 'react-scroll-horizontal'
import Scrollable from './hooks/Scrollable'

import leftArrow from '../assets/images/arrow-left.svg'
import rightArrow from '../assets/images/arrow-right.svg'



gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});

const data = [
    {
      name: "Julia Cameron",
      title: "Creative Director, VISA",
      image: `${require("../assets/images/certificate-wester-1.jpg")}`,
      quote:
        "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
    },
    {
      name: "Mark Jacobs",
      title: "Tech Lead, Google",
      image: `${require("../assets/images/certificate-wester-2.jpg")}`,
      quote:
        "The rebranding has really helped our business. Definitely worth the investment."
    },
    {
      name: "Lisa Bearings",
      title: "Brand Coordinator, Facebook",
      image: `${require("../assets/images/certificate-wester-1.jpg")}`,
      quote:
        "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
    }
  ];

const Certificates = () => {
    
    let imageList = useRef(null);
    let dataList = useRef(null);
    const imageWidth = 340;

    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    });

    useEffect(() => {
        TweenLite.to(dataList.children[0], 0, {
            opacity: 1
        });
    }, []);

    //image tansition
    const slideLeft = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: -imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const slideRight = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const scale = (index, duration) => {
        TweenLite.from(imageList.children[index], duration, {
            scale: 1.2,
            ease: Power3.easeOut
        });
    };

    //Content transition

    const fadeOut = (index, duration) => {
        TweenLite.to(dataList.children[index], duration, {
            opacity: 0
        });
    };

    const fadeIn = (index, duration) => {
        TweenLite.to(dataList.children[index], duration, {
            opacity: 1,
            delay: 1
        });
    };

    const nextSlide  = () => {
        if (imageList.children[0].classList.contains("active")) {
            setState({ isActive1: false, isActive2: true });
            //Image transition
            slideLeft(0, 1);
            slideLeft(1, 1);
            scale(1, 1);
            slideLeft(2, 1);
            slideLeft(2, 0);
            fadeOut(0, 1);
            fadeIn(1, 1);
        } else if (imageList.children[1].classList.contains("active")) {
            setState({ isActive2: false, isActive3: true });
            //Image transition
            slideRight(0, 1);
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 1);
            //content transition
            fadeOut(1, 1);
            fadeIn(2, 1);
            } else if (imageList.children[2].classList.contains("active")) {
            setState({ isActive1: true, isActive3: false });
            //Image transition
            slideLeft(2, 1, 3);
            slideLeft(0, 1, 0);
            slideLeft(1, 0, 0);
            scale(0, 1);
            //content transition
            fadeOut(2, 1);
            fadeIn(0, 1);
        }
    };
    const prevSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
          setState({ isActive1: false, isActive3: true });
          //Image transition
          slideLeft(2, 0, 3);
          slideLeft(2, 1, 2);
          scale(2, 1);
          slideRight(0, 1);
          slideRight(1, 1);
          //content transtion
          fadeOut(0, 1);
          fadeIn(2, 1);
        } else if (imageList.children[1].classList.contains("active")) {
          setState({ isActive2: false, isActive1: true });
          //Image transition
          slideLeft(0, 0);
          slideRight(0, 1, 0);
          slideRight(1, 1, 0);
          slideRight(2, 1, 2);
          scale(0, 1);
          //content transtion
          fadeOut(1, 1);
          fadeIn(0, 1);
        } else if (imageList.children[2].classList.contains("active")) {
          setState({ isActive2: true, isActive3: false });
          slideLeft(2, 1);
          slideLeft(1, 0, 2);
          slideLeft(1, 1);
          scale(1, 1);
          //content transtion
          fadeOut(2, 1);
          fadeIn(1, 1);
        }
      };


    //Old data

    /* let data = useStaticQuery(graphql`
    query  {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["sert_wester_1", "sert_wester_2", "sert_zilmet" ]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
    {data.allFile.edges.map((image, key) => (
        <div>
        <Images className="container" key={key} fluid={image.node.childImageSharp.fluid}  />
        </div>
    ))} */
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
                        <h3>Wester</h3>
                        <p>Мембранные баки Wester</p>
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
                        <h3>Описание баков Wester</h3>
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
                    <div onClick={prevSlide} className="arrows left">
                        <span>
                            <img src={leftArrow} alt="left arrow" />
                        </span>
                        </div>
                        <div className="inner">
                        <div className="t-image">
                            <ul ref={el => (imageList = el)}>
                            <li className={state.isActive1 ? "active" : ""}>
                                <img src={data[0]}  />
                            </li>
                            <li className={state.isActive2 ? "active" : ""}>
                                <img src={data[1]} />
                            </li>
                            <li className={state.isActive3 ? "active" : ""}>
                                <img src={data[2]}  />
                            </li>
                            </ul>
                        </div>
                        <div className="t-content">
                            <ul ref={el => (dataList = el)}>
                            <li className={state.isActive1 ? "active" : ""}>
                                <div className="content-inner">
                                
                                
                                </div>
                            </li>
                            <li className={state.isActive2 ? "active" : ""}>
                                <div className="content-inner">
                                
                                
                                </div>
                            </li>
                            <li className={state.isActive3 ? "active" : ""}>
                                <div className="content-inner">
                                
                                
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="arrows right" onClick={nextSlide}>
                        <img src={rightArrow} alt="right arrow" />
                        </div>


                           
                        
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
    /* display: grid;
    grid-template-rows: 1fr;
    white-space: pre-line; */
    display:flex;
    flex-direction: row;
    margin-top: 2rem;
    grid-gap: 10px;
    
   
    

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    } 
`
const ContainerScroll = styled.div`
    max-width: 600px;
    overflow-x: scroll;
    
    
    
`
const Images = styled(Img)`
    border-radius: 10px;
    height: 750px;
    min-width: 580px;
    

`





