import events from './db/events.json'

export const getEvent = (eventId) => {
    const event = events.find(({ id }) => id === eventId)
    return event
}
