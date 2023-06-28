import React from 'react'
import Winner from './Winner'

const Draw = ({nextRound, isWinner, winnerName, isAllFill}) => {
  return (
    <div className='draw'>
      <div className='draw-area'>
        {isWinner && <Winner winnerName={winnerName} />}
        {(isAllFill && !isWinner) && <h1 className='draw-text'>DRAW!!!</h1>}
        <button className='next-game' onClick={nextRound}>Next Round</button>
      </div>
    </div>
  )
}

export default Draw