import { getEvent } from '../../api/api'
import ActionButton from '../../components/action_button/action_button'
import './style.css'

const Event = () => {
    const event = getEvent('1')

    return (
        <>
            <div className="flexbox main">
                <img className="event img" src={require('./wildforrest.png')} alt={event.name} />
                <div className="event btn">
                    <ActionButton text="where?" onClick={() => {}} color="greenyellow" />
                </div>
                <p className="event date">
                    {event.date} {event.startTime}
                </p>
                <pre className="event description">{event.description}</pre>
                <a href={event.link} target="_blank" rel="noreferrer">
                    <img className="event ig" src={require('./ig.png')} alt={event.name} />
                </a>
            </div>
        </>
    )
}

export default Event
