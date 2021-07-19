import React, {useState} from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/video-3.mp4'
import Component1 from './Component1'
import HeroH1 from './animeComponents/HeroH1'
import { ContactComponent } from './modal/ContactComponent'

export const Hero = ({HeaderMark}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
    setShowModal(prev => !prev);
    };
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1 HeaderMark={HeaderMark}/>
                    
                    {/* <HeroH1>Продажа и изготовление расширительных баков</HeroH1> */}
                    {/* <HeroP>Завод производство. Доставка по России</HeroP> */}
                    <Button primary="true" big="true" round="true" onClick={openModal}>Заказать обратный звонок</Button>
                    <ContactComponent showModal={showModal} setShowModal={setShowModal} />
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}




const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
        ),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100% )
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
const HeroContent = styled.div`
    z-index: 2;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
    
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height:  1.1;
    font-weight: bold;
`
// const HeroH1 = styled.h1`
//     font-size: clamp(1.5rem, 6vw, 4rem);
//     margin-bottom: 1.5rem;
//     letter-spacing: 1px;
//     padding: 0 1rem;
// `
// const HeroP = styled.p`
//     font-size: clamp(1rem, 3vw, 3rem);
//     margin-bottom: 2rem;
//     font-weight: 400;
// `
