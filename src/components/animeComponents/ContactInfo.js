import React, { useEffect } from "react";
import styled from 'styled-components';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);




export default function ContactInfo
({HeaderMark}) {

  // let headerRef = useRef(null);

  useEffect(() => {
    gsap.from(".headerAnime", {
      duration: 3,
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
      scrollTrigger: {
        trigger: ".headerAnime",
        start: "top 100%",
        end: "bottom 10%",
        toggleActions: "restart reset restart reset",
      }

    })
    
    }, [])
  
  
  return (
    <AnimeHeader className="headerAnime">
      <HeaderH1>{HeaderMark}</HeaderH1>
      <HeroP>
      
      8 (812) 317-00-32 <br/>
          Склады во всех крупных городах <br/>
          info@30bar.ru   <br/>
          Доставка по России бесплатно! <br/>
          30 bar (ООО "30 БАР") <br/>
          Отгрузка в день оплаты! <br/>
          Оплата по счёту / банковским переводом <br/>
          <br/>
        
     
          ООО «30 БАР»<br/>
          Юридический адрес: 194292,город Санкт-Петербург,Домостроительная улица, дом 4 литер а, помещение № 13<br/>
          Фактический адрес:194292,город Санкт-Петербург,Домостроительная улица, дом 4 литер а, помещение № 13<br/>
          ИНН 7802697903<br/>
          КПП 780201001<br/>
          ОГРН 1197847216324<br/>
          р/с 40702810055000021764 в СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК Г. САНКТ-ПЕТЕРБУРГ<br/>
          кор.счет банка 30101810500000000653<br/>
          БИК 044030653<br/>
        
        
          
          <br/>
          Адреса складов:<br/>
          Санкт-Петербург:(склад) ул.Домостроительная д.4<br/>
          Москва: М.О. Шаховской рн <br/>
             
              
              
              <br/>
          
      </HeroP>
      <HeroP>
          <InfoColumn >
          <LeftCol>
              
              Терминал{" "}ТК:<br/>
              <br/>
              Белгород<br/>
              Брянск<br/>
              В.Новгород<br/>
              Владимир<br/>
              Волгоград<br/>
              Воронеж<br/>
              Иваново<br/>
              Ижевск<br/>
          </LeftCol>
          
          <CentrCol>
          Терминал ТК:<br/>
          <br/>
              Казань<br/>
              Калуга<br/>
              Карелия<br/>
              Краснодар<br/>
              Курск<br/>
              Липецк<br/>
              Наб.Челны<br/>
              Н.Новгород<br/>
              Новороссийск<br/>
              Новосибирск<br/>
              Оренбург<br/>
              Орёл<br/>
              Омск<br/>
              Пенза<br/>
              Псков<br/>
              Пятигорск<br/>
          </CentrCol>
          <RightCol>
              Терминал ТК:<br/>
              <br/>
              Ростов-на-Дону<br/>
              Рязань<br/>
              Самара<br/>
              Смоленск<br/>
              Свердл. обл.<br/>
              Сочи<br/>
              Ставрополь<br/>
              Тамбов<br/>
              Тверь<br/>
              Тюмень<br/>
              Тольятти<br/>
              Тула<br/>
              Ульяновск<br/>
              Уфа<br/>
              Чебоксары<br/>
              Челябинск<br/>
              Ярославль  
          </RightCol>
          </InfoColumn>
          

      </HeroP>
      <HeroP>&nbsp;</HeroP>
      
    </AnimeHeader>
    
  );
}

const AnimeHeader = styled.div`
  margin-top: 2rem;
  height: 650;

  @media screen and (max-width: 480px) {
    padding: 0 1rem;
    box-sizing: border-box;
    max-width: 100%;
  }
`

const LeftCol2 = styled.div`
  float: left; 
  width: 30%
`
const RightCol2 = styled.div`
  float: right; 
  width: 50%
`

const InfoColumn = styled.div`
  float: left;
  width: 100%;
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
const HeaderH1 = styled.h1`
    opacity: 1;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    padding-top: 100px;
`
const HeroP = styled.p`
    text-align: left;
    padding: 0 1rem;
    opacity: 1;
    font-size: clamp(0.2rem, 1vw, 1rem);
    margin-bottom: 2rem;
    /* font-weight: 400; */
    height: 1250;
    
`



