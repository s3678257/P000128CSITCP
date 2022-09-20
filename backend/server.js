import path from "path"
import express from "express"
import dotenv from "dotenv"
import connectDB from './config/config.js'
import colors from "colors"

import userRoutes from "./routes/userRoutes.js"

import { notFound, errorHandler } from "./middleware/errorMiddleware.js"


dotenv.config()
//connection to MongoDB
connectDB()

const app = express()   

app.use(express.json())


app.use("/users", userRoutes)





if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")))

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  )
} else {
  app.get("/", (req, res) => {
    res.send("api is running...")
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold
  )
)
