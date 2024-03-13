import React from 'react'

const BillInput = ({ bill, passBill }) => {
    return (
        
         <input 
            className = "tip-input"
            placeholder="Bill Amount"
            type="text"
            value={!isNaN(bill) ? bill : ''}
            onChange={(e) => passBill(e.target.value)}
        />
        
    )
}

export default BillInput;