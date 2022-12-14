import express from "express"
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getOrders,
  deleteOrder,

} from "../controllers/orderController.js"
import { admin, protect } from "../middleware/authMiddleware.js"

router.route("/").post(protect, addOrderItems).get(getOrders)
router.route("/myorders/:id").get( getMyOrders)
router.route("/:id").get(getOrderById).delete(deleteOrder)


export default router
