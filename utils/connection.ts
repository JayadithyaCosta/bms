import mongoose from 'mongoose'
import colors from 'colors'

const MONGODB_URI: string = process.env.MONGO_URI || ''

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connect() {
  if (cached.conn) {
    console.log(
      colors.green.underline.bold(
        `Cached Database: ${process.env.DB_NAME} in use!`
      )
    )
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  console.log(
    colors.green.underline.bold(`Database: ${process.env.DB_NAME} Connected!`)
  )
  return cached.conn
}

export default connect
