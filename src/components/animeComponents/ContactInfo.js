import React, {useRef, useEffect} from "react";
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
              Санкт-Петербург: Тихорецкий проспект 17б (офис)<br/>
              Москва М.О., р-н Шаховской, р.п. Шаховская, Волочановское шоссе, д. 12, стр. Б <br/>
              Белгород, Терминал тк<br/>
              Брянск,Терминал тк<br/>
              Великий Новгород, Терминал тк<br/>
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
              Набережные Челны, Терминал тк<br/>
              Нижний Новгород, Терминал тк<br/>
              Новороссийск, Терминал тк<br/>
              Новосибирск, Терминал тк<br/>
              Оренбург, Терминал тк<br/>
              Орёл , Терминал тк<br/>
              Омск, Терминал тк<br/>
              Пенза Терминал тк<br/>
              Псков Терминал тк Деловые линии<br/>
              Пятигорск, Терминал тк<br/>
          </CentrCol>
          <RightCol>
              Ростов-на-Дону, Терминал тк<br/>
              Рязань, Терминал тк<br/>
              Самара, Терминал тк<br/>
              Смоленск Терминал тк <br/>
              Свердловская обл. <br/>
              Сочи, Терминал тк<br/>
              Ставрополь Терминал тк Деловые линии<br/>
              Тамбов Терминал тк Деловые линии<br/>
              Тверь, Терминал тк<br/>
              Тюмень, Терминал тк<br/>
              Тольятти Терминал тк Деловые линии<br/>
              Тула,Терминал тк<br/>
              Ульяновск Терминал тк Деловые линии<br/>
              Уфа Терминал тк<br/>
              Чебоксары, Терминал тк<br/>
              Челябинск,Терминал тк<br/>
              Ярославль, Терминал тк <br/>
          </RightCol>
          </InfoColumn>
          

      </HeroP>
      <HeroP>почта: info@30bar.ru</HeroP>
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
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    padding-top: 100px;
`
const HeroP = styled.p`
    padding: 0 1rem;
    opacity: 1;
    font-size: clamp(1rem, 3vw, 1rem);
    margin-bottom: 2rem;
    font-weight: 400;
`
// export default function HeroH1({HeaderMark}) {
    
//     const fadeIn = useSpring(
//         {
//             from: { opacity: 0, transform: 'translateY(3rem)' },
//             to: { opacity: 1, transform: 'translateY(-1rem)' },
//             config: { duration: 1000 }
//         }
//     )

//Anime with scroll and view a part of content after scroll (react-spring)
// const FadeInDirection = ({ isVisible, children }) => {
//     const props = useSpring({
//       opacity: isVisible ? 1 : 0,
//       transform: isVisible ? "translateY(0px)" : "translateY(50px)"
//     });
//     return <animated.div style={props}>{children}</animated.div>;
//   };
  
//   export const FadeInContainer = ({ children }) => {
//     const [isVisible, setVisibility] = useState(false);
  
//     const onChange = visibility => {
//       visibility && setVisibility(visibility);
//     };
  
//     return (
//       <VisibilitySensor onChange={onChange}>
//         <FadeInDirection isVisible={isVisible}>{children}</FadeInDirection>
//       </VisibilitySensor>
//     );
//   };

//       export default function HeroH1({HeaderMark}) {
//         return (
//           <div>
            
//             <FadeInContainer>
//             <HeaderH1>{HeaderMark}</HeaderH1>
//             </FadeInContainer>
      
//           </div>
//         );
//       }


//Animation with Aos

//First animate with react spring
//     if (HeaderMark) {
//         return (           
//         )
//     }
//     else 
//     {
//         return (
//             <animated.div style={fadeIn}>
//                 <HeaderH1>ありがとうございます</HeaderH1>
//                 <HeroP>Завод производство. Доставка по России</HeroP>                
//             </animated.div>
//         )
//     }
// }


/* <animated.div style={fadeIn}>
                <HeaderH1>                
                    {HeaderMark}                    
                </HeaderH1>
                <HeroP>Завод производство. Доставка по России</HeroP>
                
            </animated.div> */


