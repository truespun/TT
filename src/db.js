import mongoose from 'mongoose'

export default class Database {
  async init () {
    mongoose.connect(`${process.env.MONGODB_URI}`)
    mongoose.connection.on('error', (err) => {
      console.log('Cannot connect to DB', { action: 'start', error: err.message })
    })
    mongoose.connection.on('open', () => {
      console.log(`Connected to DB`, { action: 'start' })
    })
  }

  async stop () {
    await mongoose.disconnect()
  }
}

