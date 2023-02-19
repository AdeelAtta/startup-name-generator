import React from 'react'
import './inputsearch.css'

const InputSearch = ({handleChange,value}) => {
  return (
    <>
        <br />
      <input onChange={(e) => handleChange(e)} 
        value={value}
        className='search-input' 
        type="text" 
        placeholder='Enter Keywords' />
    </>
  )
}

export default InputSearch