import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import Navbar from "./Navbar"
const Header = () => {
  const [show, setShow] = useState(true)

  const location = useLocation()
  //gets the path name after the domain name
  const routeName = location.pathname.split("/")[1]

  //if the path name is not home, then show the navbar
  useEffect(() => {
    if (routeName === "adminpanel") {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [routeName])

  return <div>{show && <Navbar />}</div>
}

export default Header
