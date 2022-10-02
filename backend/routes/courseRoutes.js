import express from "express"
const router = express.Router()
import {
    getCourseProfile,
    addCourse,
    updateCourseProfile,
    getCourses,
    deleteCourse,
    updateCourse,
} from "../controllers/courseController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/").post(addCourse).get(protect, admin, getCourses)

router
  .route("/profile")
  .get(protect, getCourseProfile)
  .put(protect, updateCourseProfile)
router
  .route("/:id")
  .delete(protect, admin, deleteCourse)
  .put(protect, admin, updateCourse)

export default router
