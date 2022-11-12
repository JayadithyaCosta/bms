import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

// module.exports = mongoose.models.User || mongoose.model('User', userSchema)

export default mongoose.models['User'] || mongoose.model('User', userSchema)
