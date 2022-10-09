import React from 'react'

function Button({ handleClick, color }) {
  return (
    <div className='buttons'>
        <button 
            onClick={handleClick}
            style={{ color: 'white', backgroundColor: color }} 
            className='button'
        >
                New Quote
        </button>
    </div>
  )
}

export default Button