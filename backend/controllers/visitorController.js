import Visitor from "../models/visitorModel.js"
import asyncHandler from "express-async-handler"
const addCount = asyncHandler(async (req, res) => {
    //storing the records from visitor table
let visitors = await Visitor.findOne({ name: "visitors" })

//if the app is being run for the first time, the visitors table will be empty
//so we need to create a new record
if (!visitors) {
  //create  a new record
  const beginCount = new Visitor({
    name: "visitors",
    count: 1,
  })

  //save the record
  await beginCount.save()

  //send the response
  res.send("This is your first visit")
  console.log("This is your first visit")
} else {
  //if the record already exists, we need to update the count
  visitors.count = +1

  visitors.save()
}


})

const getCount = asyncHandler(async (req, res) => {
  const count = await Visitor.findOne({ name: "visitors" })
  res.json(count.count)
})

export { addCount, getCount }