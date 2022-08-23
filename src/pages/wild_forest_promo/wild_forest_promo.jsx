import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../app_router'
import ActionButton from '../../components/action_button/action_button'
import { images, texts } from './data'
import './style.css'

const PROMO_PICS_COUNT = 5

const WildForestPromo = () => {
    let navigate = useNavigate()

    const [currentPromoPic, setCurrentPromoPic] = useState(0)

    const changePic = () => {
        setCurrentPromoPic(currentPromoPic + 1)
        if (currentPromoPic === PROMO_PICS_COUNT) {
            setCurrentPromoPic(0)
        }
    }

    useEffect(() => {
        const interval = setInterval(changePic, 3000)
        return () => clearInterval(interval)
    }, [currentPromoPic]) // eslint-disable-line react-hooks/exhaustive-deps

    const goToEvent = () => navigate(routes.event)

    return (
        <div className="wildForestPromo">
            <img src={images[currentPromoPic]} alt="cool party images" />
            <p>{texts[currentPromoPic]}</p>
            <ActionButton text="more." onClick={goToEvent} color="greenyellow" />
        </div>
    )
}

export default WildForestPromo
