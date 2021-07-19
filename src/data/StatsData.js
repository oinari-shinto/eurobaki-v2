import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'

export const StatsData = [
    {
        icon: (<GiEarthAmerica 
        css={`
            color: #047bf1;
        `}/>),
        title: "Больше 270 контрактов",
        desc: "Тендеры и поставки по всей России"
    },
    {
        icon: (<MdAirplanemodeActive 
        css={`
        color: #f3a82e;
        `}/>),
        title: "Поставка от производителей",
        desc: "Wester Flamco Reflex Zilmet"
    },
    {
        icon: (<MdTimer 
        css={`
        color: #f34f2e;
        `}
        />),
        title: "Быстрая доставка и поддержка",
        desc: "Поставляем в течении 2 дней"
    },
    {
        icon: (<FaMoneyCheck
        css={`
        color: #3af576;
        `}
        />),
        title: "Всегда готовы дать лучшу цену",
        desc: "Если есть предложение сделаем цену дешевле!"
    },
]