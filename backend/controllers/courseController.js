import asyncHandler from "express-async-handler"
import Course from "../models/courseModel.js"

// @desc add a new course
// @route POST /courses
// @access Public
const addCourse = asyncHandler(async (req, res) => {
    const { name, price, description, image } = req.body
    //check if the course already exists
    const courseExists = await Course.findOne({ name })
    if (courseExists) {
        res.status(400)
        throw new Error("Course already exists")
    }
    const course = new Course({
        name,
        price,
        description,
        image: image || "/images/sample.jpg",
    })
    const createdCourse = await course.save()
    res.status(201).json(createdCourse)
  
})

// @desc Get course details
// @route GET /courses/details
// @access Private
const getCourseDetail = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id)
  
    if (course) {
      res.json({
        _id: course._id,
        name: course.name,
        price: course.price,
        description: course.description,
        image: course.image,
        
      })
    } else {
      res.status(404)
      throw new Error("Course not found")
    }
  })



// @desc Get all courses
// @route GET /courses
// @access Private/Admin
const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({})
    res.json(courses)
  })
  
  // @desc Delete course
  // @route DELETE /courses/:id
  // @access Private/Admin
  const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id)
    if (course) {
      await course.remove()
      res.json({ message: "Course removed" })
    } else {
      res.status(404)
      throw new Error("Course not found")
    }
  })

// @desc Update course
// @route PUT /course/id
// @access Private/Admin
const updateCourse = asyncHandler(async (req, res) => {
   const {name, price , description, image } = req.body

   const course = await Course.findById(req.params.id)

   if( course){
       course.name = name || course.name
       course.price = price || course.price
       course.description = description || course.description
       course.image = image || course.image

       const updatedCourse = await course.save()
       res.json(updatedCourse)
   } else {
        res.status(404)
        throw new Error('Course not found')
    }
  })

  export {
    getCourseDetail,
    addCourse,
    getCourses,
    deleteCourse,
    updateCourse,
  }