import { useNavigate } from 'react-router-dom'
import './style.css'

const Homepage = () => {
    let navigate = useNavigate()

    const goToEaster = () => navigate('/easter')

    return (
        <>
            <div className="flexbox column">
                <div className="homepage header">ANH.</div>
                <div className="homepage easter" onClick={goToEaster} />
            </div>
        </>
    )
}

export default Homepage
