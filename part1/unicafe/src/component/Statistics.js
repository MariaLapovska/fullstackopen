import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ good, neutral, bad }) => {
    if (!good && !neutral && !bad) {
        return <p>No feedback given</p>
    } else {
        const sum = () => good + neutral + bad;
        const average = () => (good - bad) / sum();
        const positive = () => good / sum() * 100;

        return (
            <div>
                <table>
                    <tbody>
                        <Statistic text={'good'} value={good} />
                        <Statistic text={'neutral'} value={neutral} />
                        <Statistic text={'bad'} value={bad} />
                        <Statistic text={'all'} value={sum()} />
                        <Statistic text={'average'} value={average()} />
                        <Statistic text={'positive'} value={positive()} isPercentage={true} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Statistics