import { NextApiRequest, NextApiResponse } from 'next'
import { string } from 'yup'
import UserContent from '../../../models/userContent'


/**
 * @param req
 * @param res
 * @returns All data inside content collection
 * @type GET
 * @URL localhost:3000/api/users
 */
export async function getContents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const contents = await UserContent.find({})

    if (!contents) return res.status(404).json({ error: 'Data not found!' })
    res.status(200).json(contents)
  } catch (error: any) {
    console.error('CONTROLLER', error)
  }
}

/**
 * @param req
 * @param res
 * @returns All data inside content collection
 * @type GET
 * @URL localhost:3000/api/users
 */
export async function getContent(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { contentId } = req.query

    if (contentId) {
      const content = await UserContent.findById(contentId)
      return res.status(200).json(content)
    }
    return res.status(404).json({ error: 'User Doesnt Exist!' })
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
// export async function postContent(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const formData = req.body

//     if (!formData)
//       return res.status(404).json({ error: 'Form data not provided!' })

//     UserContent.create(formData, function (err: string, data: FormData) {
//       return res.status(200).json({ message: 'Content Inserted Successfully!' })
//     })
//   } catch (error) {
//     return res.status(404).json({ error })
//   }
// }

/**
 * @param req
 * @param res
 * @returns Update data of content
 * @type PUT
 * @URL localhost:3000/api/users/:id
 */
export async function updateContent(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { contentId } = req.query

    const formData = req.body

    if (contentId && formData) {
      await UserContent.findByIdAndUpdate(contentId, formData)
      return res.status(200).json({ message: 'Content Updated Successfully!' })
    }

    return res.status(404).json({ error: 'Content does not exist!' })
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
export async function deleteContent(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { contentId } = req.query

    if (contentId) {
      await UserContent.findByIdAndDelete(contentId)
      return res.status(200).json({ message: 'Delete Successful!' })
    }

    return res.status(404).json({ error: 'Content does not exist!' })
  } catch (error) {
    return res.status(404).json({ error: 'Error while deleting!' })
  }
}

