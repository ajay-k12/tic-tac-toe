import React from 'react'
import './start.css'
import { Link } from 'react-router-dom'

const Start = () => {

  return (
    <div className='start'>
        <p className='title'>Play Tic Tac Toe</p>
        <div className='options'>
          <button><Link className='link' to='/play-game'>Play</Link></button>
        </div>
    </div>
  )
}

export default Start