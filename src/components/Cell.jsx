import React from 'react'
import './styles.css';

const Cell = ({value, onClick}) => {
  
  return (
    <div onClick={onClick} className='cell'>
      <p className='move-value'>{value}</p>
    </div>
  )
}

export default Cell