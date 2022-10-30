import express from "express"
const router = express.Router()
import { addEmail, getEmails, deleteEmail } from "../controllers/emailListController.js"


router.route("/").post(addEmail).get(getEmails)
router.route("/:id").delete(deleteEmail)

export default router
