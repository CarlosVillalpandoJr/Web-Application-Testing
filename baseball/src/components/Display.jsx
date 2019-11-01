import React, { useState } from 'react';
import Dashboard from './Dashboard';

const Display = () => {
    const [strikes, setStrikes] = useState(0)
    const [balls, setBalls] = useState(0)

    const addStrike = (count) => {
        setStrikes(count)
    }

    const addBall = (count) => {
        setBalls(count)
    }


    return (
        <div className='display-container'>
            <div className='display-count'>
                <p>Balls: {balls} |<span data-testid='add-strike-count'>Strikes: {strikes}</span></p>
            </div>
            <Dashboard
                strikes={strikes} 
                balls={balls} 
                addStrike={addStrike}
                addBall={addBall}
            />
        </div>
    )
}

export default Display;