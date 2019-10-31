import React, { useState } from 'react';


const Dashboard = (props) => {
    console.log('Dashboard Props: ', props)

    const strike = () => {
        if(props.strikes < 2) {
        props.addStrike(props.strikes + 1)
        } else {
        props.addStrike(props.strikes * 0)
        }
    }

    const ball = () => {
        if(props.balls < 3) {
        props.addBall(props.balls + 1)
        } else {
        props.addBall(props.balls * 0)
        }
    }

    const hit = () => {
        props.addBall(props.balls * 0)
        props.addStrike(props.strikes * 0)
    }

    return (
        <div className='dashboard-container'>
            <button onClick={ball}>Add Ball</button>
            <button onClick={strike}>Add Strike</button>
            <button onClick={strike}>Foul</button>
            <button onClick={hit}>Hit</button>
        </div>
    )
}

export default Dashboard;