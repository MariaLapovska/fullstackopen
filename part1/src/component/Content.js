import React from 'react'
import Part from './Part'

const Content = (props) => {

    return (
        <>
            {props.courseParts.map((value, index) => {
                return <Part key={index} partName={value.partName} exercisesNum={value.exercisesNum} />
            })}
        </>
    )
}

export default Content