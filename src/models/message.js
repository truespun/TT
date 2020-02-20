import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const regexMessage = /^.{1,100}$/i

const validateRegex = (regex) => {
  return (value) => {
    regex.test(value)
  }
};

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    validate: {
      validator: validateRegex(regexMessage),
      message: props => {
        return `${props.value} is not a valid message ,message should be not empty and less then 100 characters`
      }
    }
  },
  email: {
    type: String,
    validate: {
      validator: validateRegex(regexEmail),
      message: props => {
        return `${props.value} is not a valid email ,Please fill a valid email address`
      }
    }
  },
  author: String

}, { timestamps: true })

MessageSchema.plugin(mongoosePaginate)
mongoosePaginate.paginate.options = {
  limit: 10,
  sort: { createdAt: 'desc' }

}

export default mongoose.model('Message', MessageSchema)
