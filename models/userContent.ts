import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
  {
    title: { type: String, required: true },
    clientName: { type: String, required: true },
    allocatedEmp: [
      {
        empName: String,
        empDesignation: String
      }
    ]
  },
  { timestamps: true }
)

const UserContent = models.content || model('content', userSchema)

export default UserContent
