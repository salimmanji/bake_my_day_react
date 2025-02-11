import React from 'react'

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa1'>
    <input 
    className='pa3 w-25 h1 ba b--black bg-moon-gray'
    type='search' 
    placeholder='find a recipe' 
    onChange={searchChange}
    />
    </div>
  )
}

export default Searchbox