import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"




// const products = [
//   {
//     id: 1,
//     name: "Basic Tee 8-Pack",
//     href: "#",
//     price: "$256",
//     description:
//       "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
//     options: "8 colors",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
//     imageAlt:
//       "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     href: "#",
//     price: "$32",
//     description:
//       "Look like a visionary CEO and wear the same black t-shirt every day.",
//     options: "Black",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
//     imageAlt: "Front of plain black t-shirt.",
//   },
//   // More products...
// ]

export default function Courses() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const courseList = useSelector((state) => state.courseList)
  const {  courses } = courseList




  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Courses</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  src={course.imageSrc}
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
                    {course.price}
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
