import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import ActionButton from '../../components/action_button/action_button'
import './style.css'

const Where = () => {
    const [code, setCode] = useState('')

    const handleChange = (e) => {
        const value = e.target.value
        setCode(value.toUpperCase())
    }

    const getCodeWidget = () => {
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
                <ActionButton text="unlock." onClick={() => {}} />
                <p className="bot">need code? DM us on instagram and ask for the CODE</p>
            </>
        )
    }

    console.log(code)
    return (
        <div className="where">
            <div className="flexbox main">{getCodeWidget()}</div>
        </div>
    )
}

export default Where
