import React from 'react'

const Total = (props) => {

    return (
        <>
            <p>Number of exercises {props.courseParts.reduce((accumulator, currentValue) => accumulator + currentValue.exercisesNum, 0)}</p>
        </>
    )
}

export default Total