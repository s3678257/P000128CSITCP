import Order from "../models/orderModel.js"
import asyncHandler from "express-async-handler"

// @desc Create new order
// @route POST /orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    itemsPrice,
    taxPrice,
    totalPrice,
    orderedAt
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No order items")
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      itemsPrice,
      taxPrice,
      totalPrice,
      orderedAt: Date.now()
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

// @desc Get order by id
// @route GET /orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error("Order not found")
  }
})


// @desc Get logged in user orders
// @route GET /orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.params.id })
  res.json(orders)
})

// @desc Get all orders
// @route GET /orders
// @access Admin/Private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name")
  res.json(orders)
})

//@desc Delete order by id
//@route DELETE /orders/:id
//@access Private/Admin
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    await order.remove()
    res.json({ message: "Order removed" })
  } else {
    res.status(404)
    throw new Error("Order not found")
  }
})

export {
  addOrderItems,
  getOrderById,
  deleteOrder,
  getMyOrders,

  getOrders,
}
