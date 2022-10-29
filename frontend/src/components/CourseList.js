import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CourseEdit from './CourseEdit'



const CourseList = () => {
    const [courseEdit, setCourseEdit] = useState(false)
    //get all courses
    const [courses, setCourses] = useState([])
    const [id, setId] = useState("")
    const [courseItem , setCourse] = useState({})

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
    }, [])

    const setCourseEditFalse = () => {
        setCourseEdit(false)
    }

  return (
    <div className="m-8">
      <div className="flex justify-between mr-5 mb-5">
        <h1>Course List</h1> <button>Add Course</button>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, idx) => (
                    <tr
                      key={course._id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {course._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {course.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.price}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {setCourseEdit(true)
                          setId(course._id)
                          setCourse({...course})
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </button>
                      </td>
                      {courseEdit && (
                        <CourseEdit
                        course={courseItem}
                          id={id}
                          setCourseEdit={setCourseEditFalse}
                        />
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseList