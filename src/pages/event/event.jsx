import { getEvent } from '../../api/api'
import './style.css'

const Event = () => {
    const event = getEvent('2')
    console.log(event)

    return (
        <>
            <div className="flexbox main">
                <a href={'https://www.facebook.com/events/501187248710367'} target="_blank" rel="noreferrer">
                    <img className="event img" src={require('./aliens.png')} alt={event.name} />
                </a>

                <a href={event.link} target="_blank" rel="noreferrer">
                    <img className="event ig" src={require('./ig.png')} alt={event.name} />
                </a>

                <p className="event date">
                    {event.date} {event.startTime}
                </p>
                <pre className="event description">{event.description}</pre>
            </div>
        </>
    )
}

export default Event
