import path from "path"
import express from "express"
import dotenv from "dotenv"
import connectDB from './config/config.js'
import colors from "colors"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import courseRoutes from "./routes/courseRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import emailRoutes from "./routes/emailRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import { addCount,getCount } from "./controllers/visitorController.js"


dotenv.config()
//connection to MongoDB
connectDB()

const app = express()   
const countApp = express()

app.use(cors())
app.use(express.json())


app.use("/users", userRoutes)
app.use("/courses", courseRoutes)
app.use("/orders", orderRoutes)
app.use("/uploads", uploadRoutes)
app.use("/api/visitors", addCount)
app.use("/api/count", getCount)
app.use("/email", emailRoutes)


const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")))

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  )
} else {
  app.get("/", (req, res) => {
   
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

