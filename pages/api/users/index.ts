import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/connection'
import {
  getContents,
  updateContent,
  deleteContent
} from '../controllers/user-controller'
import { signUpUser, loginUser } from '../controllers/user-auth-controller'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connect().catch((err) => console.error(err))

  switch (req.method) {
    case 'GET':
      getContents(req, res)
      break
    case 'POST':
      signUpUser(req, res)
      loginUser(req, res)
      break
    case 'PUT':
      updateContent(req, res)
      break
    case 'DELETE':
      deleteContent(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} not allowed!`)
      break
  }
}
