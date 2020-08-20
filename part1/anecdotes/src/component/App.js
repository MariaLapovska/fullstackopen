import React, { useState } from 'react';

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = new Array(anecdotes.length).fill(0)

const App = () => {
    const getRandomAnecdote = () => Math.floor(Math.random() * (anecdotes.length - 1))

    const [selected, setSelected] = useState(getRandomAnecdote())
    const [voteNum, setVoteNum] = useState(0)
    const [topVoted, setTopVoted] = useState(selected)

    const updateSelected = () => {
        let newSelected = getRandomAnecdote()

        while (newSelected === selected) {
            newSelected = getRandomAnecdote()
        }

        setSelected(newSelected)
        setVoteNum(votes[newSelected])
    }

    const getTopRatedAnecdoteIndex = () => votes.reduce((maxIndex, currentElement, currentIndex, votesArray) => currentElement > votesArray[maxIndex] ? currentIndex : maxIndex, 0)

    const vote = () => {
        setVoteNum(++votes[selected])
        setTopVoted(getTopRatedAnecdoteIndex())
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {voteNum} votes</p>
            <button onClick={vote}>vote</button>
            <button onClick={updateSelected}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[topVoted]}</p>
        </div>
    )
}

export default App;
