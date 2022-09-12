import mongoose from "mongoose"
import dotenv from 'dotenv'
import users from "./data/user.js"
import User from "./models/userModel.js"
import colors from "colors"
import connectDB from "./config.js"

dotenv.config()
//connection to MongoDB
connectDB()

const importData = async () => {

  try {
    await User.deleteMany()
    await User.insertMany(users)
   


    console.log("Data imported".green.inverse)
    process.exit
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log("Data destroyed".red.inverse)
    process.exit
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
