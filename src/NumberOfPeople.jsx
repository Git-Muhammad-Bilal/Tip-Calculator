import React from 'react'

const numberOfPeople = ({ numberOfPeople, passNumberOfPeople }) => {
    return (
        <input
            className= "tip-input"
            placeholder="Number Of people"
            type="text"
            value={!isNaN(numberOfPeople) ? numberOfPeople : ''}
            onChange={(e) => passNumberOfPeople(e.target.value)}
            />
    )
}

export default numberOfPeople;