import { Application } from './app'

module.exports = async () => {
  try {
    const app = new Application()
    await app.init()
    await app.start()

    let stop = async () => {
      try {
        await app.stop()
        console.log('\nApplication stopped')
      } catch (error) {
        console.log(error)
      }
    }

    process.on('SIGINT', stop)
    process.on('SIGUSR1', stop)
    process.on('SIGUSR2', stop)

    process.on('uncaughtException', (e) => {
      console.log('Uncaught Exception...')
      console.log(e.stack)
    })



  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
