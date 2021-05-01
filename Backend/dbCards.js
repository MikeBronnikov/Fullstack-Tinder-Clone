import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    url:  {type: String, required: true}
},{strict: true})

export default mongoose.model('cards', cardSchema)