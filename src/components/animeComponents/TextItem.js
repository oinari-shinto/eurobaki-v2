import React, {useEffect, useRef} from 'react'
import {TweenMax, Power3} from 'gsap'

function TextItem({Elem}) {
    let textFade = useRef(null);

    useEffect(() => {
        TweenMax.to(
            textFade,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )
    }, [])

    return (
        <div ref = {el => {textFade = el}}>
            {Elem}
        </div>
    )
}

export default TextItem
