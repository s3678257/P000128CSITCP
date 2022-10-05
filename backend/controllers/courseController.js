import asyncHandler from "express-async-handler"
import Course from "../models/courseModel.js"

// @desc add a new course
// @route POST /courses
// @access Public
const addCourse = asyncHandler(async (req, res) => {
    const { name, price, image, description } = req.body
  
    const courseExists = await Course.findOne({ name })
  
    if (courseExists) {
      res.status(400)
      throw new Error("Course already exists")
    }
  
    const course = await Course.create({
      name,
      price,
      image,
      description
    })
  
    if (course) {
      res.status(201).json({
        _id: course._id,
        name: course.name,
        price: course.price,
        image: course.image,
        description: course.description,
  
      })
    } else {
      res.status(400)
      throw new Error("Invalid course data")
    }
  })

// @desc Get course profile
// @route GET /courses/profile
// @access Private
const getCourseProfile = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.course._id)
  
    if (course) {
      res.json({
        _id: course._id,
        name: course.name,
        price: course.price,
        imgae:course.image,
        description: course.description,
      })
    } else {
      res.status(404)
      throw new Error("Course not found")
    }
  })

// @desc Update course profile
// @route PUT /courses/profile
// @access Private
const updateCourseProfile = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.course._id)
  
    if (course) {
        course.name = req.body.name || course.name
        course.price = req.body.price || course.price
        course.image = req.body.image || course.image
        course.description = req.body.description || course.description
      const updatedCourse = await course.save()
  
      res.json({
        _id: updatedCourse._id,
        name: updatedCourse.name,
        price: updatedCourse.price,
        image:updatedCourse.image,
        description: updatedCourse.description,
       
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
    const course = await Course.findById(req.params.id)
  
    if (course) {
      course.name = req.body.name || course.name
      course.price = req.body.price || course.price
      course.image = req.body.image || course.image
      course.description = req.body.description || course.description
  
      const updatedCourse = await course.save()
  
      res.json({
        _id: updatedCourse._id,
        name: updatedCourse.name,
        price: updatedCourse.price,
        image:updatedCourse.image,
        description: updatedCourse.description,
      })
    } else {
      res.status(404)
      throw new Error("Course not found")
    }
  })

  export {
    getCourseProfile,
    addCourse,
    updateCourseProfile,
    getCourses,
    deleteCourse,
    updateCourse,
  }