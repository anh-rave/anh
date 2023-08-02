import { TextField } from '@mui/material'
import { useState } from 'react'
import './style.css'

const Profile = () => {
    const [name, setName] = useState('')

    const handleNameChange = (e) => {
        const value = e.target.value
        setName(value)
    }

    const inputStyle = {
        color: 'white',
        fontSize: '1.5rem',
        width: '100%',
    }

    return (
        <>
            <div className="flexbox main">
                <div className="profile box" />
                <h1>RAVER PROFILE</h1>
                <p>Witaj w klubie, raverze!</p>
                <div className="profile box" />
                <TextField
                        
                        id="outlined-basic"
                        label="name"
                        variant="outlined"
                        color="secondary"
                        value={name}
                        onChange={handleNameChange}
                        InputProps={{
                            style: inputStyle,
                          }}
                    
                    />

            </div>
        </>
    )
}

export default Profile
