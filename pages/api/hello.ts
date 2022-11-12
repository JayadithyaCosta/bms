import type { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../utils/connection'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connect()
  res.status(200).json({ name: 'John Doe' })
}
