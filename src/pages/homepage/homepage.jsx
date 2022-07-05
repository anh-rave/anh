/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ActionButton from '../../components/action_button/action_button'
import Loader from '../../components/loader/loader'
import './style.css'

const Homepage = () => {
    let navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [initialized, setInitialized] = useState(false)

    const goToEaster = () => navigate('/easter')

    useEffect(() => {
        setTimeout(() => setInitialized(true), 500)
    }, [])

    useEffect(() => {
        if (!initialized) return

        setTimeout(() => setLoading(false), 5000)
    }, [initialized])

    const getAction = () => {
        if (!initialized) return <></>
        if (loading) return <Loader />
        return <ActionButton text="GO" />
    }

    return (
        <>
            <div className="flexbox main">
                <div className="homepage header">ANH.</div>
                <div className="homepage easter" onClick={goToEaster} />
                <div className="homepage action">{getAction()}</div>
            </div>
        </>
    )
}

export default Homepage
