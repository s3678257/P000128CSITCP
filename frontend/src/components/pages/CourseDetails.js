import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { addToCart } from "../../actions/cartActions"
import { useDispatch } from "react-redux"

const CourseDetails = () => {
  const dispatch = useDispatch()

  //get url
  const location = useLocation()
  const course_id = location.pathname.split("/")[2]
  const [courseDetails, setCourseDetails] = useState({})
  //get course details

  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:8000"
    axios
      .get(`/courses/${course_id}`)
      .then((res) => {
        setCourseDetails({ ...JSON.parse(JSON.stringify(res.data)) })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [course_id])

  const addToCartHandler = () => {
    dispatch(addToCart(course_id))
    //find element with shopping-cart-button id and click
    document.getElementById("shopping-cart-button").click()
  }

  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {courseDetails.name}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  $ {courseDetails.price}
                </p>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-">
                {courseDetails.image && (
                  <img
                    src={courseDetails.image}
                    alt="im"
                    className="lg:col-span-2 lg:row-span-2 h-full w-full object-cover rounded-lg"
                  />
                )}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <button
                onClick={addToCartHandler}
                type="submit"
                className="mt-8 w-full bg-gray-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Add to cart
              </button>

              {/* courseDetails details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: courseDetails.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
