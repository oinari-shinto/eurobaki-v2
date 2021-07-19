    import React from 'react'
    import styled from 'styled-components'
    import EmailBg from '../assets/images/web-baki.png'

    import 'bootstrap/dist/css/bootstrap.min.css'
    import { Carousel } from 'react-bootstrap'
    import { graphql, useStaticQuery } from 'gatsby'
    import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'


    const PresentationSection = () => {
        const data = useStaticQuery (
            graphql`
          query {
            slideShow: allFile(
                filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["web-baki"]}}
                
              ) {
                edges {
                  node {
                    id
                    base
                    childImageSharp {
                        gatsbyImageData(
                            
                            
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
            <PresContainer>
                <PresContent>
                        {/* <Carousel>
                           {data.slideShow.edges.map(({node}) => (
                               <Carousel.Item key={node.id}>   
                                   <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base.split('-')
                                   .join(' ').split('.')[0]} />
                               </Carousel.Item> 
                           ))}
                        </Carousel>  */}
                     
                </PresContent>
                
            </PresContainer>
           
        )
    }
    
    export default PresentationSection

    const PresContainer = styled.div`
        background: url(${EmailBg}) no-repeat center;
        background-size: cover;
        height: 1200px;
        width: 100%;
        padding: 5rem calc((100vw - 1300px) / 2);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 768px) {
           
            
            
            height: 100%;
        
    `

    const PresContent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            text-align: center;
            margin-bottom: 1rem;
            font-size: clamp(1rem, 5vw, 3rem);
            padding: 0 1rem;
        }

        p {
            text-align: center;
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            padding: 0 1rem;
            margin-bottom: 2rem;
        }

        form {
            z-index: 10;
        }
    `

  
    
    