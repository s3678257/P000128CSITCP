import Email from "../models/emailListModel.js"
import asyncHandler from "express-async-handler"

//add email to list
const addEmail = asyncHandler(async (req, res) => {
    const { email } = req.body
    
    const emailExists = await Email.findOne({ email })
    
    if (emailExists) {
        res.status(400)
      
        return res.send("Email already exists")
    }
    
    const emailList = await Email.create({
        email
    })
    
    if (emailList) {
        res.status(201).json("Thank you for subscribing")
    } else {
        res.status(400)
        throw new Error("Invalid email data")
    }
    }
)

//get all emails
const getEmails = asyncHandler(async (req, res) => {
    const emails = await Email.find({})
    res.json(emails)
}
)

//delete email
const deleteEmail = asyncHandler(async (req, res) => {
    
    const email = await Email.findById(req.params.id)
    
    if (email) {
        await email.remove()
        res.json({ message: "Email removed" })
    } else {
        res.status(404)
        throw new Error("Email not found")
    }

})
    

export { addEmail, getEmails , deleteEmail}


