/* eslint-disable no-unused-vars */
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { getEvent } from '../../api/api'
import ActionButton from '../../components/action_button/action_button'
import './style.css'

const Where = () => {
    const event = getEvent('1')

    const [code, setCode] = useState('')
    const [error, setError] = useState(null)
    const [access, setAccess] = useState(false)

    const handleChange = (e) => {
        setError(null)
        const value = e.target.value
        setCode(value.toUpperCase())
    }

    const handleSubmit = () => {
        if (code === '') return

        if (event.codes.map((c) => c.toUpperCase()).includes(code)) {
            setAccess(true)
        } else {
            setError('invalid code, try again')
        }

        setCode('')
    }

    const getCodeWidget = () => {
        if (access) {
            return (
                <>
                    <p>To reach the party head to the starting point here:</p>
                    <a href={event.location.link} target="_blank" rel="noreferrer" style={{ color: 'green' }}>
                        GOOGLE MAPS
                    </a>
                    <img src={require('./path.png')} alt="entrance map" />
                    <div className="marginBox"></div>
                    <p>then follow a forrest path - like in the above map</p>
                    <p>
                        the path will be marked with <span>colorful</span> materials
                    </p>
                    <div className="marginBox"></div>
                    <img src={require('./way.gif')} alt="entrance map" />
                </>
            )
        }
        return (
            <>
                <p className="top">Insert your CODE to unlock info how to get to the party</p>
                <div className="code">
                    <TextField
                        id="outlined-basic"
                        label="CODE"
                        variant="standard"
                        value={code}
                        onChange={handleChange}
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <ActionButton text="unlock." onClick={handleSubmit} />
                <p className="bot">need code? DM us on instagram and ask for the CODE</p>
            </>
        )
    }

    return (
        <div className="where">
            <div className="flexbox main">{getCodeWidget()}</div>
        </div>
    )
}

export default Where
