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
      <InfoColumn >
      <LeftCol2>8 (812) 317-00-32 <br/>
          Склады во всех крупных городах <br/>
          info@30bar.ru   <br/>
          Доставка по России бесплатно! <br/>
          30 bar (ООО "30 БАР") <br/>
          Отгрузка в день оплаты! <br/>
          Оплата по счёту / банковским переводом <br/>
          <br/>
        </LeftCol2>
      <RightCol2>
          ООО «30 БАР»<br/>
          Юридический адрес: 194292,город Санкт-Петербург,Домостроительная улица, дом 4 литер а, помещение № 13<br/>
          Фактический адрес:194292,город Санкт-Петербург,Домостроительная улица, дом 4 литер а, помещение № 13<br/>
          ИНН 7802697903<br/>
          КПП 780201001<br/>
          ОГРН 1197847216324<br/>
          р/с 40702810055000021764 в СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК Г. САНКТ-ПЕТЕРБУРГ<br/>
          кор.счет банка 30101810500000000653<br/>
          БИК 044030653<br/>
        </RightCol2>
        </InfoColumn>
          
          <br/>
          Адреса складов:<br/>

          
      </HeroP>
      <HeroP>
          <InfoColumn >
          <LeftCol>
              Санкт-Петербург: ул. Домостроительная д.4 пом.13 (склад) <br/>
              Санкт-Петербург: Тихорецкий пр. 17б <br/>
              Москва М.О., р-н Шаховской <br/>
              Белгород, Терминал тк<br/>
              Брянск,Терминал тк<br/>
              Великий Новгород, тк.<br/>
              Владимир, Терминал тк<br/>
              Волгоград,Терминал тк<br/>
              Воронеж, Терминал тк<br/>
              Иваново Терминал тк<br/>
              Ижевск  Терминал тк <br/>
          </LeftCol>
          <CentrCol>
              Казань, Терминал тк<br/>
              Калуга, Терминал тк<br/>
              Карелия Терминал тк<br/>
              Краснодар, Терминал тк<br/>
              Курск Терминал тк<br/>
              Липецк, Терминал тк<br/>
              Набережные Челны, тк<br/>
              Нижний Новгород, тк<br/>
              Новороссийск, Терм. тк<br/>
              Новосибирск, Терм. тк<br/>
              Оренбург, Терминал тк<br/>
              Орёл , Терминал тк<br/>
              Омск, Терминал тк<br/>
              Пенза Терминал тк<br/>
              Псков Терминал тк <br/>
              Пятигорск, Терминал тк<br/>
          </CentrCol>
          <RightCol>
              Ростов-на-Дону, Терм. тк<br/>
              Рязань, Терминал тк<br/>
              Самара, Терминал тк<br/>
              Смоленск Терминал тк <br/>
              Свердловская обл. <br/>
              Сочи, Терминал тк<br/>
              Ставрополь Терминал тк<br/>
              Тамбов Терминал тк<br/>
              Тверь, Терминал тк<br/>
              Тюмень, Терминал тк<br/>
              Тольятти Терминал тк<br/>
              Тула,Терминал тк<br/>
              Ульяновск Терминал тк<br/>
              Уфа Терминал тк<br/>
              Чебоксары, Терминал тк<br/>
              Челябинск,Терминал тк<br/>
              Ярославль, Терминал тк  
          </RightCol>
          </InfoColumn>
          

      </HeroP>
      <HeroP>&nbsp;</HeroP>
    </AnimeHeader>
    
  );
}

const AnimeHeader = styled.div``

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
    font-size: clamp(0.5rem, 2vw, 1rem);
    margin-bottom: 2rem;
    font-weight: 400;
    
`



