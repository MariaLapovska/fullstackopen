import React from 'react'

const Statistic = ({ text, value, isPercentage = false }) => {
    if (isPercentage) {
        return <tr><td>{text}</td><td>{value} %</td></tr>
    } else {
        return <tr><td>{text}</td><td>{value}</td></tr>
    }
}

export default Statistic