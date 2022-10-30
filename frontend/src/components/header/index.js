import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Navbar from './Navbar'
const Header = (props) => {
  const [show, setShow] = useState(true)

  const location = useLocation()
  const routeName = location.pathname.split('/')[1]

  useEffect(() => {
    if (routeName === 'adminpanel') {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [routeName])

  return (
    <div>

      {show && <Navbar toggleCartHandler={props.toggleCartHandler} />}
        

    </div>
  )
}

export default Header