import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader/loader'
import './style.css'

const Homepage = () => {
    let navigate = useNavigate()

    const goToEaster = () => navigate('/easter')

    return (
        <>
            <div className="flexbox main">
                <div className="homepage header">ANH.</div>
                <div className="homepage easter" onClick={goToEaster} />
                <div className="homepage action">
                    <Loader />
                </div>
            </div>
        </>
    )
}

export default Homepage
