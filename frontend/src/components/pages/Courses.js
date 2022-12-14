import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Courses() {
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  //import courses from backend
  axios.defaults.baseURL = "http://localhost:8000"

  useEffect(() => {
    axios
      .get("/courses")
      .then((res) => {
        setCourses(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [courses])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Courses</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden cursor-pointer"
              onClick={() => navigate(`/courses/${course._id}`)}
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  src={course.image}
                  alt="im"
                  className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={course.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {course.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{course.description}</p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-base font-medium text-gray-900">
                    ${course.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
