import { getEvent } from '../../api/api'
import './style.css'

const Event = () => {
    const event = getEvent('1')

    return (
        <>
            <div className="flexbox main">
                <h1 className="event header">{event.name}</h1>
                <h2>{event.org.name}</h2>
                <img className="event img" src={require('./wildforrest.png')} alt={event.name} />
                <p className="event date">
                    {event.date} {event.startTime}
                </p>
                <p className="event location">{event.locationTBA}</p>
                <p className="event location">{event.locationTip}</p>
                <pre className="event description">{event.description}</pre>
                <a href={event.link} target="_blank" rel="noreferrer">
                    <img className="event ig" src={require('./ig.png')} alt={event.name} />
                </a>
            </div>
        </>
    )
}

export default Event
