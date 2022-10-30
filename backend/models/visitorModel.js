import mongoose from "mongoose"

const visitorSchema = mongoose.Schema(
    {
        name: String,
        count: Number
    })

const Visitor = mongoose.model("Visitor", visitorSchema)

export default Visitor