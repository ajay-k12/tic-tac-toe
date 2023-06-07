import React from 'react'

const ScoreBoard = ({Xwins, Owins}) => {

  return (
    <div className='score-board'>
      <h1>Score Board</h1>
      <p>You : {Xwins}</p>
      <p>Computer : {Owins}</p>
    </div>
  )
}

export default ScoreBoard