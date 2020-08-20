import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementValue = (setValueFunction, previousValue) => () => {
    setValueFunction(previousValue + 1)
  }

  return (
    <div>
      <Header title={'Give feedback'} />
      <Button text={'good'} handleClick={incrementValue(setGood, good)} />
      <Button text={'neutral'} handleClick={incrementValue(setNeutral, neutral)} />
      <Button text={'bad'} handleClick={incrementValue(setBad, bad)} />
      <Header title={'Statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App