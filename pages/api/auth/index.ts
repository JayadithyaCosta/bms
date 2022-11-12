import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/connection'

import { loginUser } from '../controllers/user-auth-controller'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connect().catch((err) => console.error(err))

  switch (req.method) {
    case 'GET':
      break
    case 'POST':
      loginUser(req, res)
      break
    case 'PUT':
      break
    case 'DELETE':
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} not allowed!`)
      break
  }
}
