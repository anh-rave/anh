import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../app_router'
import ActionButton from '../../components/action_button/action_button'
import { images, texts } from './data'
import './style.css'

const NewHomepage = () => {
    let navigate = useNavigate()
    // const { user, login } = useAuth();

    const [currentPromoPic, setCurrentPromoPic] = useState(0)

    // useEffect(() => {
    //     if (user) {
    //         goToEvent()
    //     }
    // }, [user]) // eslint-disable-line react-hooks/exhaustive-deps

    const changePic = () => {
        setCurrentPromoPic(currentPromoPic + 1)
        if (currentPromoPic === Object.keys(texts).length - 1) {
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
            <img src={images[0]} alt="cool party images" />
            <p>{texts[currentPromoPic]}</p>
            <ActionButton text="more" onClick={goToEvent} color="#050401" />
        </div>
    )
}

export default NewHomepage
