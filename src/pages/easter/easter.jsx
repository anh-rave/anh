import { useNavigate } from 'react-router-dom'
import stlc from '../../assets/stlc.png'
import './style.css'

const Easter = () => {
    let navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <>
            <div className="flexbox main">
                <h1>Witam w ister eggu</h1>
                <p>Tu mozna schowac jakies tajne rzeczy itp itd</p>
                <img className="easter img" src={stlc} alt="stolec" onClick={goBack} />
            </div>
        </>
    )
}

export default Easter
