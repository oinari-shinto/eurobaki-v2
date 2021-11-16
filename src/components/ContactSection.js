import React, {useState} from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Image from '../assets/images/warehouse.jpg'
import ContactInfo from './animeComponents/ContactInfo'
import { ContactComponent } from './modal/ContactComponent'

export const ContactSection = ({HeaderMark}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
    setShowModal(prev => !prev);
    };
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Image} type="image/jpg" no-repeat center/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    {/* <ContactInfo HeaderMark={HeaderMark}/> */}
                    
                   
                    <Button primary="true" big="true" round="true" onClick={openModal}>Заказать обратный звонок</Button>
                    <ContactComponent showModal={showModal} setShowModal={setShowModal} />
                    <GarantyInfo>
                        <br/>
                        Гарантийные обязательства:<br/>
                        <br/>
                        Поставляемая нами продукция является официальной и  подлежит обязательной сертификации. С сертификатами качества можно ознакомиться на нашем сайте в каждом разделе расширительных баков<br/>
                        Гарантийные обязательства распространяются на весь товар и действуют в течение года с момента отгрузки. Для некоторых групп товаров производителем предоставляется расширенная гарантия. Более полная информация при оформлении заказа.<br/>
                        Гарантия не распространяется на случаи, когда монтаж произведен компанией, не имеющей лицензии на данный вид работ, и перестает действовать при нарушении инструкций по монтажу и эксплуатации.<br/>
                        Гарантийное и послегарантийное сервисное обслуживание осуществляются авторизованными сервисными центрами (АСЦ) производителей оборудования.<br/>
                        <br/>
                    </GarantyInfo>
                </HeroItems>
                
            </HeroContent>
        </HeroContainer>
    )
}




const HeroContainer = styled.div`
   /*  background: url('../assets/images/warehouse.jpg') center center/cover no-repeat; */
   /* background: linear-gradient(
            180deg, rgba(0,0,0,0.5) 0%, 
            rgba(0,0,0,0.5) 35%, 
            rgba(0,0,0, 0.1) 100%
            ),
            url(${Image}) no-repeat center; */
    background-color: grey;        
    background-size: cover;   
    /* box-shadow: inset 0 0 0 1000px rgba(0,0,0, 0.2); */
    object-fit: contain;
    display: flex;
    justify-content: center;
    
    align-items: center;
    height: 130vh;
    
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    

   /*  :before {
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
    } */
    @media screen and (max-width: 480px) {
    padding: 0 1rem;
    box-sizing: border-box;
    max-width: 100%;
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
const VideoBg = styled.image`
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

const GarantyInfo = styled.div`
     text-align: left;
    padding: 0 1rem;
    opacity: 1;
    font-size: clamp(0.5rem, 2vw, 1rem);
    margin-bottom: 2rem;
    font-weight: 400;
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
