import bcrypt from "bcryptjs"
import mongoose from "mongoose"

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestaps: true,
  }
)


const Course = mongoose.model("Course", courseSchema)

export default Course
