import React from 'react'
import Button from './component/button/Button'
import Youtube from './component/youtube/Youtube'
import Headers from './component/headers/Headers'
import './App.css'
const App = () => {
  return (
    <div className='container'>
      <Headers />
      <Youtube />
      <Button />
    </div>
  )
}

export default App