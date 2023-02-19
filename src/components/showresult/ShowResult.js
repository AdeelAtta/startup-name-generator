import React from 'react'
import './showresult.css'


const name = require('@rstacruz/startup-name-generator')

const ShowResult = ({value}) => {

  const nameArr = name(value);


  return (
        <div className='result-box'>
        {nameArr.map((name,index) => <button className='button' key={index}>{name}</button>)}
        </div>
  )
}

export default ShowResult