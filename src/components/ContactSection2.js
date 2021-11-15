import React, {useState} from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Image from '../assets/images/warehouse.jpg'


import { ContactComponent } from './modal/ContactComponent'


export const ContactSection2 = ({HeaderMark}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
    setShowModal(prev => !prev);
    };
    return (
        <HeroContainer>
            
            <HeroContent>
                <HeroItems>
                    
                    
                   
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

const LeftCol2 = styled.div`
  float: left; 
  width: 49%
`
const RightCol2 = styled.div`
  float: right; 
  width: 49%
`

const InfoColumn = styled.div`
  float: left;
  width: 100%
`
const LeftCol = styled.div`
  float: left;
  width: 33%
`
const CentrCol = styled.div`
  float: left;
  width: 33%
`
const RightCol = styled.div`
  float: left;
  width: 33%
`

const HeroP = styled.p`
    text-align: left;
    padding: 0 1rem;
    opacity: 1;
    font-size: clamp(0.5rem, 2vw, 1rem);
    margin-bottom: 2rem;
    font-weight: 400;
    
    
`

const HeroContainer = styled.div`
  
    background-color: grey;       
    background-size: cover;   
    
    object-fit: contain;
    display: flex;
    justify-content: center;
    
    align-items: center;
    height: 80vh;
    
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    

  
    @media screen and (max-width: 280px) {
    padding: 0 1rem;
    box-sizing: border-box;
    max-width: 100%;
  }
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
    color: black;
    text-align: left;
    padding: 0 1rem;
    opacity: 1;
    font-size: clamp(0.5rem, 2vw, 1rem);
    margin-bottom: 2rem;
    font-weight: 400;
`

