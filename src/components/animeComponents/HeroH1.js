import React, {useRef, useEffect} from "react";
import styled from 'styled-components';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);




export default function HeroH1({HeaderMark}) {

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
      <HeroP>Завод производство. Доставка по России</HeroP>
      <HeroP>почта: info@30bar.ru</HeroP>
    </AnimeHeader>
    
  );
}

const AnimeHeader = styled.div``


const HeaderH1 = styled.h1`
    opacity: 1;
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    padding: 0 1rem;
`
const HeroP = styled.p`
    opacity: 1;
    font-size: clamp(1rem, 3vw, 3rem);
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


