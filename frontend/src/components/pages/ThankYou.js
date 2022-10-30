import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ThankYou = () => {
const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 4000)
  }, [ navigate ])


  return (
    <div className='w-screen h-screen justify-center items-center text-center translate-y-96 top-1/2 text-4xl capitalize'>ThankYou For purchasing, you will be redirected shortly...</div>
  )
}

export default ThankYou