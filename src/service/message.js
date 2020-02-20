import Message from './../models/message'

class MessageService {
  async addMessage (message, email, author) {
    const msg = await new Message(message, email, author)
    return msg.save()
  }

  async getListWithPagination (page) {
    return Message.paginate({}, { page: page / 1 + 1 || 1 });
  }

  async getOne (id) {
    return await Message.findById({_id: id})
  }
}

export const messageService = new MessageService()
