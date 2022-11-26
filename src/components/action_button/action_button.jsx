import { useState } from 'react'
import './style.css'

const ActionButton = ({ onClick, color, text }) => {
    const [isHovered, setIsHovered] = useState(false)
    const c = color || '#fff'

    const getHoverColor = () => (isHovered ? '#92E000' : '#fffaff')

    return (
        <div
            className="actionbutton button"
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ borderColor: c, backgroundColor: c, color: getHoverColor() }}
        >
            {text && text}
        </div>
    )
}

export default ActionButton
