import express from 'express'
import { messageController } from '../controller/message'
import validate from '../utils/validators'
import { message as messageSchema } from '../controller/schema/message'

const router = express.Router()

const wrapAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}

router.post('/messages/single', validate(messageSchema), wrapAsync(async (req, res, next) => {
  return res.json(await messageController.addMessage(req.body))
}))

router.get('/messages/list/:page', wrapAsync(async (req, res, next) => {
  return res.json(await messageController.getListWithPagination(req.params.page))
}))

router.get('/messages/single/:id', wrapAsync(async (req, res, next) => {
  return res.json(await messageController.getOne(req.params.id))
}))

export default router
