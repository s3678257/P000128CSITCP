import React, { useEffect } from "react"
import Content from "../Content"
import Pricing from "../Pricing"
import Testimonial from "../Testimonials"
import CallToAction from "../CallToAction"
import Hero from "../Hero"
import axios from "axios"
const Landing = () => {

  useEffect(() => {
    //add count to visitor table
    const addCount = async () => {
      await axios.get("/api/visitors")
    }
    addCount()
  }, [])

  return (
    <>
      <Hero />
      <Content />
      <Pricing />
      <Testimonial />
      <CallToAction />
    </>
  )
}

export default Landing
