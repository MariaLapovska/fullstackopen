import React from 'react'

const Total = ({ course }) =>
    <p>Number of exercises {course.parts.reduce((totalExercises, coursePart) =>
        totalExercises + coursePart.exercises, 0)}</p>

export default Total