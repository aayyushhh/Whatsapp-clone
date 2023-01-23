import React from 'react'
import "./Place.css"

function Place() {
  return (
    <div className='place'>
      <img src="/images/welcome-placeholder.jpeg" alt=''/>
      <div className='place__info'>
      <h1>Welcome to WhatsApp</h1>
      <p>Place where you stay connected</p>
      </div>
    </div>
  )
}

export default Place
