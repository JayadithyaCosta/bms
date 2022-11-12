import { FormikValues } from 'formik'
import { NextApiRequest, NextApiResponse } from 'next'
import { string } from 'yup'

//Model
import EventContent from '../../../models/event'
// const mongoose = require('mongoose')
// const EventContent = mongoose.model('Events')
/**
 * @param req
 * @param res
 * @returns All data inside event collection
 * @type GET
 * @URL localhost:3000/api/events
 */
export async function getEvents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const events = await EventContent.find({})

    if (!events) return res.status(404).json({ error: 'Data not found!' })
    res.status(200).json(events)
  } catch (error: any) {
    console.error('EVENTS CONTROLLER', error)
  }
}

/**
 * @param req
 * @param res
 * @returns All data inside content collection
 * @type GET
 * @URL localhost:3000/api/users
 */
export async function getEventByName(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { eventName } = req.query
    console.log(eventName)

    if (eventName) {
      const event = await EventContent.findOne({ EventName: eventName })
      return res.status(200).json(event)
    }
    return res.status(404).json({ error: 'Event Doesnt Exist!' })
  } catch (error) {
    return res.status(404).json({ error })
  }
}

/**
 * @param req
 * @param res
 * @returns Insert data to collection => content
 * @type POST
 * @URL localhost:3000/api/users
 */
export async function postEvent(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formData = req.body

    if (!formData)
      return res.status(404).json({ error: 'Form data not provided!' })

    const event = await EventContent.create(formData)
    // const response = event.
    return res.status(201).json({ response: event })
  } catch (error) {
    return res.status(404).json({ error: error })
  }
}

/**
 * @param req
 * @param res
 * @returns Update data of content
 * @type PUT
 * @URL localhost:3000/api/users/:id
 */
export async function updateEventById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { eventId } = req.query

    const formData = req.body

    if (eventId && formData) {
      await EventContent.findByIdAndUpdate(eventId, formData)
      return res.status(200).json({ message: 'Event Updated Successfully!' })
    }

    return res.status(404).json({ error: 'Event does not exist!' })
  } catch (error) {
    return res.status(404).json({ error: 'Error while updating the data!' })
  }
}

/**
 * @param req
 * @param res
 * @returns Delete data of content
 * @type DELETE
 * @URL localhost:3000/api/users/:id
 */
export async function deleteEventById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { eventId } = req.query

    if (eventId) {
      await EventContent.findByIdAndDelete(eventId)
      return res.status(200).json({ message: 'Delete Successful!' })
    }

    return res.status(404).json({ error: 'Event does not exist!' })
  } catch (error) {
    return res.status(404).json({ error: 'Error while deleting!' })
  }
}
