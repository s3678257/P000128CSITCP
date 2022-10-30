import mongoose from "mongoose";

const schema = mongoose.Schema

const schemaOptions = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
}

const visitSchema = new schema(
    {page:{
      type: String,
      required: true
    },
    counter:{
        type: Number,
        required: true
    }
}, schemaOptions
)


const visits = mongoose.model("visits", visitSchema, "visits")

export default visits