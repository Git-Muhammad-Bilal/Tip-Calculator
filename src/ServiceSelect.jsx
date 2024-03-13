import React from 'react';


const ServiceSelct = (props) => {
    let eachService = props.ServiceOption.map((option, index) => {
        return <option key={index} value={option}>{option}</option>
    })

    return <select
        className="select"
        onChange={(e) => {
            let numberconversion = parseFloat(e.target.value)
            props.setTipPercentage(numberconversion)

        }}

    > {eachService}</select>
}

export default ServiceSelct;