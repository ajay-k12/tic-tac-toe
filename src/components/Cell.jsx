import React from 'react'
import './styles.css';

const Cell = ({value, onClick}) => {
  
  return (
    <div onClick={onClick} className='cell'>
      {value}
    </div>
  )
}

export default Cell