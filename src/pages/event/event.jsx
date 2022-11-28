import { getEvent } from '../../api/api'
import './style.css'

const Event = () => {
    const event = getEvent('2')
    console.log(event)

    return (
        <>
            <div className="flexbox main">
                <img className="event img" src={require('./aliens.png')} alt={event.name} />

                <div className="event links">
                    <a href={event.link} target="_blank" rel="noreferrer">
                        <img className="event ig" src={require('./ig.png')} alt={event.name} />
                    </a>
                    <a href={'https://www.facebook.com/events/501187248710367'} target="_blank" rel="noreferrer">
                        <img className="event ig" src={require('./event.png')} alt={event.name} />
                    </a>
                </div>

                <p className="event date">
                    {event.date} {event.startTime}
                </p>
                <p className="event loc">
                    <a href={'https://goo.gl/maps/zFEXYB4EqgfVKioA7'} target="_blank" rel="noreferrer">
                        KLUB FUTURYSTA
                    </a>
                </p>
                <div className="desc">
                    <p>
                        <span>ANNIHILATION PARTY</span> + UNDERGROUND <span>HIP-HOP</span> COLLECTIVE ={' '}
                        <span>KONCERT</span> plus CAŁONOCNE ANNIHILOWANIE
                    </p>
                    <h3>C Y B E R 👽 G I G</h3>
                    <p>
                        Przenosimy FUTURYSTĘ o dodatkowę 1000 lat świetlnych do przodu. Uwaga KOSMICI ATAKUJĄ :0 pokonać
                        może ich tylko ostry rap i mordercze BPMy!
                    </p>
                    <h3>Rozkład jazdy z kurwami kosmitami:</h3>
                    <p>
                        <ul>
                            <li>
                                <span>19H</span> Otwarcie
                            </li>
                            <li>
                                <span>20H</span> Koncert 650
                            </li>
                            <li>
                                <span>21H</span> Koncert PALETO
                            </li>
                            <li>
                                <span>22H</span> Koncert DIVE FM
                            </li>
                            <li>
                                <span>23H</span> DJ SET Bambinoziomal
                            </li>
                            <li>
                                <span>00H - 06H</span> ANNIHILATION DJs TBA
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Event
