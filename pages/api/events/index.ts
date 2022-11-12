import { NextApiRequest, NextApiResponse } from 'next'
import connect  from '../../../utils/connection'

import {
  getEvents,
  postEvent,
  updateEventById,
  deleteEventById
} from '../controllers/events-controller'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connect().catch((err) => console.error(err))

  switch (req.method) {
    case 'GET':
      getEvents(req, res)
      // getEventByName(req, res)
      break
    case 'POST':
      postEvent(req, res)
      break
    case 'PUT':
      updateEventById(req, res)
      break
    case 'DELETE':
      deleteEventById(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} not allowed!`)
      break
  }
}
