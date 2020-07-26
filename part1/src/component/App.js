import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
    const courseName = 'Half Stack application development'
    const courseParts = [
        {
            partName: 'Fundamentals of React',
            exercisesNum: 10
        },
        {
            partName: 'Using props to pass data',
            exercisesNum: 7
        },
        {
            partName: 'State of a component',
            exercisesNum: 14
        }
    ]

    return (
        <div>
            <Header courseName={courseName} />
            <Content courseParts={courseParts} />
            <Total courseParts={courseParts} />
        </div>
    )
}

export default App