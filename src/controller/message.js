import { messageService } from '../service/message'

class MessageController {
  async addMessage (message, email, author) {
    return messageService.addMessage(message, email, author)
  }

  async getListWithPagination (page) {
    return messageService.getListWithPagination(page)
  }

  async getOne (id) {
    return messageService.getOne(id)
  }
}

export const messageController = new MessageController()
