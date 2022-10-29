import express from "express"
const router = express.Router()
import {
    addCourse,
    getCourses,
    deleteCourse,
    updateCourse,
    getCourseDetail,
} from "../controllers/courseController.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router.route("/").post(addCourse).get(getCourses)

router
  .route("/profile")
  .get(protect, getCourseDetail)
router
  .route("/:id")
  .delete(protect, admin, deleteCourse)
  .put(protect, admin, updateCourse)
  .get( getCourseDetail)

export default router
