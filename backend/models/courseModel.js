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
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestaps: true,
  }
)


const Course = mongoose.model("Course", courseSchema)

export default Course
