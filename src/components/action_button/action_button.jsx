import { useState } from 'react'
import './style.css'

const ActionButton = ({ onClick, color, text }) => {
    const [isHovered, setIsHovered] = useState(false)
    const c = color || '#fff'

    // eslint-disable-next-line no-unused-vars
    const getBackgroundColor = () => (isHovered ? c : 'transparent')

    return (
        <div
            className="actionbutton button"
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ borderColor: c, backgroundColor: c, color: 'white' }}
        >
            {text && text}
        </div>
    )
}

export default ActionButton
