import mongoose from 'mongoose'
const Schema = mongoose.Schema

const eventSchema = new Schema({
  EventDate: {
    type: Date,
    required: true
  },
  EventOrganizer: {
    type: String,
    required: true
  },
  EventName: {
    type: String,
    required: true
  },
  AboutEvent: {
    type: String,
    required: true
  }
})

// module.exports =
//   mongoose.models.EventContent || mongoose.model('Events', eventSchema)

export default mongoose.models['Events'] ||
  mongoose.model('Events', eventSchema)
