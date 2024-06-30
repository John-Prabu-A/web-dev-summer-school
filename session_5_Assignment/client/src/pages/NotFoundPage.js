import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div Style="display: flex; flex-direction: column;justify-content: center; align-items: center;">
        <h1>404 - Not Found!</h1>
        <Link to="/"><button className='sell-button' Style="width: auto;" >Go Home</button></Link>
    </div>
  )
}

export default NotFoundPage