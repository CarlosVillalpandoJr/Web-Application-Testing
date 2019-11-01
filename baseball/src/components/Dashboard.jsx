import React from 'react';
import { addOneFunction, resetFunction } from './Functions';


const Dashboard = (props) => {
    console.log('Dashboard Props: ', props)

    const strike = () => {
        if(props.strikes < 2) {
        addOneFunction(props.addStrike, props.strikes)
        } else {
        resetFunction(props.addStrike, props.strikes)
        }
    }

    const ball = () => {
        if(props.balls < 3) {
        addOneFunction(props.addBall, props.balls)
        } else {
        resetFunction(props.addBall, props.balls)
        }
    }

    const hit = () => {
        props.addBall(props.balls * 0)
        props.addStrike(props.strikes * 0)
    }

    return (
        <div className='dashboard-container'>
            <button data-testid='add-ball-button' onClick={ball}>Add Ball</button>
            <button data-testid='add-strike-button' onClick={strike}>Add Strike</button>
            <button onClick={strike}>Foul</button>
            <button onClick={hit}>Hit </button>
        </div>
    )
}

export default Dashboard;