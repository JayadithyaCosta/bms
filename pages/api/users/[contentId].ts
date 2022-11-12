import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../utils/connection'
import { getContent } from '../controllers/user-controller'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connect().catch((err) => console.error(err))

  const method = req.method

  switch (method) {
    case 'GET':
      getContent(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} not allowed!`)
      break
  }
}
