import { NextApiRequest, NextApiResponse } from 'next'
import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// const User = require('../../../models/user')
import User from '../../../models/user'

export const signUpUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    console.log(errors)
    throw new Error('Invalid inputs passed, please check your data!')
  }

  const email = req.body.email
  const name = req.body.name
  const password = req.body.password

  try {
    const hashedPw = await bcrypt.hash(password, 12)

    const hasUser = await User.findOne({ email: email })
    if (hasUser) {
      return res
        .status(403)
        .json({ error: 'email found! try another one..', data: email })
    }

    const user = new User({
      email: email,
      password: hashedPw,
      name: name
    })

    await user.save()
    res.status(201).json({ message: 'User created!' })
  } catch (err: any) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
  }
}

export const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const name = req.body.name
  const password = req.body.password

  let loadedUser
  try {
    const user = await User.findOne({ name: name })

    if (!user) {
      return res.status(401).json({
        status: 'Unsuccessful',
        message: `Username ${name} is not available!`
      })
    }

    loadedUser = user

    const isEqual = await bcrypt.compare(password, user.password)

    if (!isEqual) {
      const error = new Error('Wrong Password!')
      return res.status(401).json({
        status: 'Unsuccessful',
        message: `${error}`
      })
    }

    const token = jwt.sign(
      {
        email: loadedUser.email,
        userId: loadedUser._id.toString()
      },
      'cmssecretsecret',
      { expiresIn: '8h' }
    )

    res.status(200).json({ token: token, status: 'Successful!' })
  } catch (error: any) {
    res.status(500).json({ error: error })
  }
}
